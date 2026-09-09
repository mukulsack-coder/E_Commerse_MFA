const TotpService = {
  ALPHABET: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",

  generateSecret(length = 16) {
    const randomBytes = new Uint8Array(length);
    window.crypto.getRandomValues(randomBytes);
    let secret = "";
    for (let i = 0; i < length; i++) {
      secret += this.ALPHABET[randomBytes[i] % this.ALPHABET.length];
    }
    return secret;
  },

  base32ToBytes(base32) {
    const cleaned = base32.toUpperCase().replace(/=+$/, "").replace(/\s+/g, "");
    let bits = 0;
    let value = 0;
    const output = [];
    for (let i = 0; i < cleaned.length; i++) {
      const idx = this.ALPHABET.indexOf(cleaned[i]);
      if (idx === -1) continue;
      value = (value << 5) | idx;
      bits += 5;
      if (bits >= 8) {
        output.push((value >>> (bits - 8)) & 255);
        bits -= 8;
      }
    }
    return new Uint8Array(output);
  },

  generateOtpAuthUri(accountName, issuer, secret) {
    const encodedIssuer = encodeURIComponent(issuer);
    const encodedAccount = encodeURIComponent(accountName);
    return `otpauth://totp/${encodedIssuer}:${encodedAccount}?secret=${secret}&issuer=${encodedIssuer}&algorithm=SHA1&digits=6&period=30`;
  },

  async generateTotp(secret, timeStepSeconds = 30, windowOffset = 0) {
    const counter = Math.floor(Date.now() / 1000 / timeStepSeconds) + windowOffset;
    const counterBuffer = new ArrayBuffer(8);
    const view = new DataView(counterBuffer);
    view.setUint32(0, 0, false);
    view.setUint32(4, counter, false);

    const keyBytes = this.base32ToBytes(secret);
    const cryptoKey = await window.crypto.subtle.importKey(
      "raw",
      keyBytes,
      { name: "HMAC", hash: { name: "SHA-1" } },
      false,
      ["sign"]
    );

    const signature = await window.crypto.subtle.sign("HMAC", cryptoKey, counterBuffer);
    const hash = new Uint8Array(signature);
    const offset = hash[hash.length - 1] & 0x0f;
    const binary =
      ((hash[offset] & 0x7f) << 24) |
      ((hash[offset + 1] & 0xff) << 16) |
      ((hash[offset + 2] & 0xff) << 8) |
      (hash[offset + 3] & 0xff);

    const otp = (binary % 1000000).toString().padStart(6, "0");
    return otp;
  },

  async verifyCode(secret, candidateCode, timeStepSeconds = 30, windowTolerance = 1) {
    if (!candidateCode) return false;
    const cleanCandidate = candidateCode.trim().replace(/\s+/g, "");
    if (cleanCandidate.length !== 6 || !/^\d{6}$/.test(cleanCandidate)) {
      return false;
    }

    for (let offset = -windowTolerance; offset <= windowTolerance; offset++) {
      const validCode = await this.generateTotp(secret, timeStepSeconds, offset);
      if (validCode === cleanCandidate) {
        return true;
      }
    }
    return false;
  },

  getRemainingPeriodSeconds(timeStepSeconds = 30) {
    const elapsed = Math.floor(Date.now() / 1000) % timeStepSeconds;
    return timeStepSeconds - elapsed;
  },

  renderQrCode(containerElement, uri) {
    if (!containerElement) return;
    containerElement.innerHTML = "";

    if (typeof QRCode !== "undefined") {
      try {
        new QRCode(containerElement, {
          text: uri,
          width: 180,
          height: 180,
          colorDark: "#2f3e46",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.M
        });
        return;
      } catch (e) {
      }
    }

    const fallbackImg = document.createElement("img");
    fallbackImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=" + encodeURIComponent(uri);
    fallbackImg.alt = "CA70A TOTP Authenticator QR Code";
    fallbackImg.className = "qr-image-fallback";
    fallbackImg.style.width = "180px";
    fallbackImg.style.height = "180px";
    fallbackImg.style.display = "block";
    fallbackImg.style.borderRadius = "8px";
    fallbackImg.onerror = () => {
      containerElement.innerHTML = `
        <div class="qr-offline-box">
          <div class="qr-offline-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <rect x="7" y="7" width="3" height="3" fill="currentColor" />
              <rect x="14" y="7" width="3" height="3" fill="currentColor" />
              <rect x="7" y="14" width="3" height="3" fill="currentColor" />
            </svg>
          </div>
          <p class="qr-offline-text">Scan via Authenticator or use Manual Secret Key below</p>
        </div>
      `;
    };
    containerElement.appendChild(fallbackImg);
  }
};
