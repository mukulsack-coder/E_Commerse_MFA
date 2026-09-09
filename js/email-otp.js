const EmailOtpService = {
  currentOtp: null,
  recipientEmail: "",
  expiresAt: 0,
  attemptsRemaining: 5,
  resendAvailableAt: 0,
  timerId: null,

  maskEmail(email) {
    if (!email) return "••••@ca70a-lab.internal";
    const parts = email.split("@");
    if (parts.length !== 2) return email;
    const name = parts[0];
    const domain = parts[1];
    if (name.length <= 2) {
      return name[0] + "••••@" + domain;
    }
    const visibleStart = name.slice(0, 1);
    const visibleEnd = name.slice(-1);
    return visibleStart + "••••" + visibleEnd + "@" + domain;
  },

  generateOtp(email, validitySeconds = 300, resendCooldownSeconds = 30) {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }

    const randomDigits = Math.floor(100000 + Math.random() * 900000).toString();
    this.currentOtp = randomDigits;
    this.recipientEmail = email;
    this.expiresAt = Date.now() + validitySeconds * 1000;
    this.attemptsRemaining = 5;
    this.resendAvailableAt = Date.now() + resendCooldownSeconds * 1000;

    return {
      otp: this.currentOtp,
      recipientEmail: this.recipientEmail,
      expiresAt: this.expiresAt,
      resendAvailableAt: this.resendAvailableAt,
      attemptsRemaining: this.attemptsRemaining
    };
  },

  verifyOtp(inputCode) {
    if (!this.currentOtp) {
      return {
        success: false,
        error: "No active verification session found. Please request a new verification code."
      };
    }

    if (Date.now() > this.expiresAt) {
      this.currentOtp = null;
      return {
        success: false,
        error: "The verification code has expired. Please request a new code."
      };
    }

    if (this.attemptsRemaining <= 0) {
      this.currentOtp = null;
      return {
        success: false,
        error: "Security lockout: Maximum verification attempts exceeded. Please request a new code."
      };
    }

    const cleaned = (inputCode || "").trim().replace(/\s+/g, "");
    if (cleaned.length !== 6) {
      return {
        success: false,
        error: "Please enter a valid 6-digit verification code."
      };
    }

    if (cleaned !== this.currentOtp) {
      this.attemptsRemaining -= 1;
      if (this.attemptsRemaining <= 0) {
        this.currentOtp = null;
        return {
          success: false,
          error: "Verification failed. Maximum attempts exceeded. Code has been invalidated."
        };
      }
      return {
        success: false,
        error: `Verification failed. ${this.attemptsRemaining} attempt${this.attemptsRemaining === 1 ? "" : "s"} remaining.`
      };
    }

    this.currentOtp = null;
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }

    return {
      success: true,
      message: "Email verification successful."
    };
  },

  canResend() {
    return Date.now() >= this.resendAvailableAt;
  },

  getRemainingCooldownSeconds() {
    const diff = Math.ceil((this.resendAvailableAt - Date.now()) / 1000);
    return diff > 0 ? diff : 0;
  },

  getRemainingValiditySeconds() {
    const diff = Math.ceil((this.expiresAt - Date.now()) / 1000);
    return diff > 0 ? diff : 0;
  },

  formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  },

  renderPreviewPanel(containerElement) {
    if (!containerElement) return;

    if (!this.currentOtp) {
      containerElement.innerHTML = "";
      return;
    }

    const remainingSecs = this.getRemainingValiditySeconds();
    const formattedExpiry = this.formatTime(remainingSecs);

    containerElement.innerHTML = `
      <div class="dispatch-container">
        <div class="dispatch-status-banner">
          <div class="dispatch-status-indicator">
            <span class="dispatch-pulse-dot"></span>
            <span>Security Transmission Channel Active</span>
          </div>
          <span class="dispatch-expiry-text">Valid: <strong id="email-validity-display">${formattedExpiry}</strong></span>
        </div>
        <details class="dispatch-accordion">
          <summary class="dispatch-summary">
            <span>Security Gateway Dispatch Log</span>
            <span class="dispatch-summary-toggle">View Details</span>
          </summary>
          <div class="dispatch-detail-content">
            <div class="dispatch-meta-grid">
              <div class="meta-item">
                <span class="meta-label">Gateway:</span>
                <span class="meta-value">CA70A Security Mail Exchange (TLS 1.3)</span>
              </div>
              <div class="meta-item">
                <span class="meta-label">Destination:</span>
                <span class="meta-value">${this.recipientEmail}</span>
              </div>
              <div class="meta-item">
                <span class="meta-label">Message Subject:</span>
                <span class="meta-value">CA70A Security Authentication Passcode</span>
              </div>
            </div>
            <div class="dispatch-code-row">
              <span class="dispatch-code-label">Dispatched Code:</span>
              <span class="dispatch-code-display" id="dispatch-code-value">${this.currentOtp}</span>
              <button type="button" class="btn-copy-dispatch" id="btn-copy-dispatched-code">
                Copy
              </button>
            </div>
          </div>
        </details>
      </div>
    `;

    const copyBtn = containerElement.querySelector("#btn-copy-dispatched-code");
    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        if (this.currentOtp) {
          navigator.clipboard.writeText(this.currentOtp);
          copyBtn.textContent = "Copied";
          setTimeout(() => {
            copyBtn.textContent = "Copy";
          }, 2000);
        }
      });
    }
  },

  startLiveTicker(containerElement, onTickCallback) {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
    this.timerId = setInterval(() => {
      const remainingSecs = this.getRemainingValiditySeconds();
      const validityDisplay = containerElement ? containerElement.querySelector("#email-validity-display") : null;
      if (validityDisplay) {
        validityDisplay.textContent = this.formatTime(remainingSecs);
      }
      if (onTickCallback) {
        onTickCallback({
          validitySeconds: remainingSecs,
          cooldownSeconds: this.getRemainingCooldownSeconds(),
          canResend: this.canResend(),
          isExpired: remainingSecs <= 0
        });
      }
      if (remainingSecs <= 0) {
        clearInterval(this.timerId);
        this.timerId = null;
      }
    }, 1000);
  },

  stopLiveTicker() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }
};
