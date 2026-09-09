const MfaService = {
  METHODS: {
    TOTP: "totp",
    EMAIL_OTP: "email-otp",
    PASSKEY: "passkey"
  },

  selectedMethodForEnrollment: null,
  activeLoginChallengeUser: null,
  activeEnrollmentTotpSecret: null,
  isReauthenticatingForChange: false,

  setEnrollmentMethod(method) {
    this.selectedMethodForEnrollment = method;
  },

  getEnrollmentMethod() {
    return this.selectedMethodForEnrollment;
  },

  setChallengeUser(user) {
    this.activeLoginChallengeUser = user;
  },

  getChallengeUser() {
    return this.activeLoginChallengeUser;
  },

  clearChallengeUser() {
    this.activeLoginChallengeUser = null;
  },

  initTotpEnrollment(accountEmail) {
    const secret = TotpService.generateSecret(16);
    this.activeEnrollmentTotpSecret = secret;
    const uri = TotpService.generateOtpAuthUri(accountEmail, "CA70A Cyber Security Lab", secret);
    return { secret, uri };
  },

  async verifyAndEnrollTotp(candidateCode) {
    if (!this.activeEnrollmentTotpSecret) {
      throw new Error("No active TOTP enrollment session found.");
    }
    const isValid = await TotpService.verifyCode(this.activeEnrollmentTotpSecret, candidateCode);
    if (!isValid) {
      throw new Error("Invalid 6-digit authenticator code. Please check your app and try again.");
    }
    const mfaData = {
      secret: this.activeEnrollmentTotpSecret,
      algorithm: "SHA1",
      period: 30,
      digits: 6
    };
    this.activeEnrollmentTotpSecret = null;
    return mfaData;
  },

  initEmailOtpEnrollment(email) {
    return EmailOtpService.generateOtp(email, 300, 30);
  },

  verifyAndEnrollEmailOtp(code) {
    const verification = EmailOtpService.verifyOtp(code);
    if (!verification.success) {
      throw new Error(verification.error || "Email OTP verification failed.");
    }
    return {
      verifiedEmail: EmailOtpService.recipientEmail,
      enrolled: true
    };
  },

  async registerAndEnrollPasskey(user) {
    const passkeyData = await WebAuthnService.registerPasskey(user);
    return passkeyData;
  },

  async verifyTotpLogin(candidateCode) {
    if (!this.activeLoginChallengeUser || !this.activeLoginChallengeUser.mfa) {
      throw new Error("No active MFA verification challenge found.");
    }
    const secret = this.activeLoginChallengeUser.mfa.data ? this.activeLoginChallengeUser.mfa.data.secret : null;
    if (!secret) {
      throw new Error("MFA configuration error: secret key not found.");
    }
    const isValid = await TotpService.verifyCode(secret, candidateCode);
    if (!isValid) {
      throw new Error("Invalid 6-digit authenticator code. Please try again.");
    }
    return true;
  },

  verifyEmailOtpLogin(code) {
    const verification = EmailOtpService.verifyOtp(code);
    if (!verification.success) {
      throw new Error(verification.error || "Invalid one-time code.");
    }
    return true;
  },

  async verifyPasskeyLogin() {
    if (!this.activeLoginChallengeUser || !this.activeLoginChallengeUser.mfa) {
      throw new Error("No active MFA verification challenge found.");
    }
    const passkeyData = this.activeLoginChallengeUser.mfa.data;
    const result = await WebAuthnService.authenticatePasskey(passkeyData);
    return result.success;
  },

  getMethodLabel(method) {
    switch (method) {
      case this.METHODS.TOTP:
        return "Authenticator App (TOTP)";
      case this.METHODS.EMAIL_OTP:
        return "Email OTP";
      case this.METHODS.PASSKEY:
        return "Passkey (WebAuthn / FIDO2)";
      default:
        return "Not Configured";
    }
  }
};
