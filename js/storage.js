const StorageService = {
  KEYS: {
    USERS: "ca70a_users",
    SESSION: "ca70a_session",
    CART: "ca70a_cart",
    PENDING_REGISTRATION: "ca70a_pending_registration"
  },

  getUsers() {
    try {
      const raw = localStorage.getItem(this.KEYS.USERS);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  },

  getUserByEmail(email) {
    if (!email) return null;
    const users = this.getUsers();
    return users.find(u => u.email.toLowerCase() === email.trim().toLowerCase()) || null;
  },

  saveUser(user) {
    const users = this.getUsers();
    const index = users.findIndex(u => u.email.toLowerCase() === user.email.toLowerCase());
    if (index >= 0) {
      users[index] = { ...users[index], ...user };
    } else {
      users.push(user);
    }
    localStorage.setItem(this.KEYS.USERS, JSON.stringify(users));
    return user;
  },

  updateUserMfa(email, mfaType, mfaData) {
    const users = this.getUsers();
    const index = users.findIndex(u => u.email.toLowerCase() === email.toLowerCase());
    if (index >= 0) {
      users[index].mfa = {
        type: mfaType,
        data: mfaData,
        updatedAt: new Date().toISOString()
      };
      localStorage.setItem(this.KEYS.USERS, JSON.stringify(users));
      const session = this.getSession();
      if (session && session.email.toLowerCase() === email.toLowerCase()) {
        session.mfa = users[index].mfa;
        this.setSession(session);
      }
      return users[index];
    }
    return null;
  },

  setPendingRegistration(data) {
    sessionStorage.setItem(this.KEYS.PENDING_REGISTRATION, JSON.stringify(data));
  },

  getPendingRegistration() {
    try {
      const raw = sessionStorage.getItem(this.KEYS.PENDING_REGISTRATION);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  },

  clearPendingRegistration() {
    sessionStorage.removeItem(this.KEYS.PENDING_REGISTRATION);
  },

  getSession() {
    try {
      const raw = sessionStorage.getItem(this.KEYS.SESSION);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  },

  setSession(user) {
    sessionStorage.setItem(this.KEYS.SESSION, JSON.stringify(user));
  },

  clearSession() {
    sessionStorage.removeItem(this.KEYS.SESSION);
  },

  getCart() {
    try {
      const raw = localStorage.getItem(this.KEYS.CART);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  },

  saveCart(items) {
    localStorage.setItem(this.KEYS.CART, JSON.stringify(items));
  },

  clearCart() {
    localStorage.removeItem(this.KEYS.CART);
  },

  clearAllData() {
    localStorage.removeItem(this.KEYS.USERS);
    localStorage.removeItem(this.KEYS.CART);
    sessionStorage.removeItem(this.KEYS.SESSION);
    sessionStorage.removeItem(this.KEYS.PENDING_REGISTRATION);
  }
};
