const WebAuthnService = {
  isSupported() {
    return Boolean(
      window.PublicKeyCredential &&
      typeof window.PublicKeyCredential === "function" &&
      navigator.credentials &&
      typeof navigator.credentials.create === "function" &&
      typeof navigator.credentials.get === "function"
    );
  },

  isSecureContext() {
    return Boolean(window.isSecureContext);
  },

  checkStatus() {
    const supported = this.isSupported();
    const secure = this.isSecureContext();
    return {
      supported,
      secure,
      ready: supported && secure,
      reason: !supported
        ? "Your browser does not support the WebAuthn / Passkey specification."
        : !secure
        ? "Passkeys require a secure context (HTTPS or localhost). Access is restricted by browser security policies on non-secure origins."
        : "WebAuthn cryptographic interface is operational."
    };
  },

  bufferToBase64(buffer) {
    const bytes = new Uint8Array(buffer);
    let binary = "";
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  },

  base64ToBuffer(base64) {
    const binary = window.atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes.buffer;
  },

  async registerPasskey(user) {
    const status = this.checkStatus();
    if (!status.ready) {
      throw new Error(status.reason);
    }

    const challenge = new Uint8Array(32);
    window.crypto.getRandomValues(challenge);

    const userIdBytes = new TextEncoder().encode(user.email);

    const creationOptions = {
      publicKey: {
        challenge: challenge,
        rp: {
          name: "CA70A Cyber Security Lab"
        },
        user: {
          id: userIdBytes,
          name: user.email,
          displayName: user.fullName || user.email
        },
        pubKeyCredParams: [
          { alg: -7, type: "public-key" },
          { alg: -257, type: "public-key" }
        ],
        timeout: 60000,
        authenticatorSelection: {
          userVerification: "preferred",
          residentKey: "preferred"
        },
        attestation: "none"
      }
    };

    if (window.location.hostname && window.location.hostname !== "" && window.location.hostname !== "localhost") {
      creationOptions.publicKey.rp.id = window.location.hostname;
    }

    try {
      const credential = await navigator.credentials.create(creationOptions);
      if (!credential) {
        throw new Error("Passkey enrollment was cancelled or failed to produce credentials.");
      }

      return {
        id: credential.id,
        rawId: this.bufferToBase64(credential.rawId),
        type: credential.type,
        registeredAt: new Date().toISOString()
      };
    } catch (err) {
      if (err.name === "NotAllowedError") {
        throw new Error("Passkey creation was cancelled or timed out.");
      }
      if (err.name === "SecurityError") {
        throw new Error("Passkeys require a secure context (HTTPS or localhost). Access is restricted by browser security policies.");
      }
      throw new Error(err.message || "An unexpected error occurred during Passkey registration.");
    }
  },

  async authenticatePasskey(storedPasskey) {
    const status = this.checkStatus();
    if (!status.ready) {
      throw new Error(status.reason);
    }

    const challenge = new Uint8Array(32);
    window.crypto.getRandomValues(challenge);

    const requestOptions = {
      publicKey: {
        challenge: challenge,
        timeout: 60000,
        userVerification: "preferred"
      }
    };

    if (window.location.hostname && window.location.hostname !== "" && window.location.hostname !== "localhost") {
      requestOptions.publicKey.rpId = window.location.hostname;
    }

    if (storedPasskey && storedPasskey.rawId) {
      try {
        requestOptions.publicKey.allowCredentials = [
          {
            id: this.base64ToBuffer(storedPasskey.rawId),
            type: "public-key"
          }
        ];
      } catch (e) {
      }
    }

    try {
      const assertion = await navigator.credentials.get(requestOptions);
      if (!assertion) {
        throw new Error("Passkey verification was cancelled.");
      }

      return {
        success: true,
        credentialId: assertion.id,
        verifiedAt: new Date().toISOString()
      };
    } catch (err) {
      if (err.name === "NotAllowedError") {
        throw new Error("Passkey authentication was cancelled or timed out.");
      }
      if (err.name === "SecurityError") {
        throw new Error("Passkeys require a secure context (HTTPS or localhost). Access is restricted.");
      }
      throw new Error(err.message || "Passkey authentication failed.");
    }
  }
};
