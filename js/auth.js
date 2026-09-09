const AuthService = {
  async hashPassword(password, salt) {
    const encoder = new TextEncoder();
    const data = encoder.encode(`${salt}:${password}`);
    const hashBuffer = await window.crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
  },

  generateSalt() {
    const randomBytes = new Uint8Array(16);
    window.crypto.getRandomValues(randomBytes);
    return Array.from(randomBytes).map(b => b.toString(16).padStart(2, "0")).join("");
  },

  validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(String(email || "").trim());
  },

  validatePassword(password) {
    if (!password || typeof password !== "string") return false;
    return password.length >= 8;
  },

  async startRegistration(fullName, email, password, confirmPassword) {
    const trimmedName = (fullName || "").trim();
    const trimmedEmail = (email || "").trim().toLowerCase();

    if (!trimmedName) {
      throw new Error("Full name is required.");
    }

    if (!this.validateEmail(trimmedEmail)) {
      throw new Error("Please enter a valid email address.");
    }

    if (!this.validatePassword(password)) {
      throw new Error("Password must be at least 8 characters long.");
    }

    if (password !== confirmPassword) {
      throw new Error("Passwords do not match.");
    }

    const existingUser = StorageService.getUserByEmail(trimmedEmail);
    if (existingUser) {
      throw new Error("An account with this email address already exists.");
    }

    const salt = this.generateSalt();
    const passwordHash = await this.hashPassword(password, salt);

    const pendingUser = {
      fullName: trimmedName,
      email: trimmedEmail,
      passwordHash,
      salt,
      registeredAt: new Date().toISOString()
    };

    StorageService.setPendingRegistration(pendingUser);
    return pendingUser;
  },

  async completeRegistrationWithMfa(mfaType, mfaData) {
    const pending = StorageService.getPendingRegistration();
    if (!pending) {
      throw new Error("Registration session expired. Please start over.");
    }

    const finalUser = {
      fullName: pending.fullName,
      email: pending.email,
      passwordHash: pending.passwordHash,
      salt: pending.salt,
      createdAt: pending.registeredAt,
      mfa: {
        type: mfaType,
        data: mfaData,
        enrolledAt: new Date().toISOString()
      }
    };

    StorageService.saveUser(finalUser);
    StorageService.clearPendingRegistration();
    return finalUser;
  },

  async authenticateCredentials(email, password) {
    const trimmedEmail = (email || "").trim().toLowerCase();

    if (!trimmedEmail) {
      throw new Error("Email address is required.");
    }

    if (!password) {
      throw new Error("Password is required.");
    }

    const user = StorageService.getUserByEmail(trimmedEmail);
    if (!user) {
      throw new Error("Invalid email or password.");
    }

    const candidateHash = await this.hashPassword(password, user.salt);
    if (candidateHash !== user.passwordHash) {
      throw new Error("Invalid email or password.");
    }

    return {
      user,
      mfaRequired: Boolean(user.mfa && user.mfa.type),
      mfaType: user.mfa ? user.mfa.type : null
    };
  },

  async verifyPassword(email, password) {
    const user = StorageService.getUserByEmail(email);
    if (!user) return false;
    const testHash = await this.hashPassword(password, user.salt);
    return testHash === user.passwordHash;
  },

  loginSession(user) {
    const sessionData = {
      fullName: user.fullName,
      email: user.email,
      mfa: user.mfa,
      loginTimestamp: new Date().toISOString()
    };
    StorageService.setSession(sessionData);
    return sessionData;
  },

  logoutSession() {
    StorageService.clearSession();
  },

  getCurrentSession() {
    return StorageService.getSession();
  },

  isAuthenticated() {
    return Boolean(this.getCurrentSession());
  }
};
