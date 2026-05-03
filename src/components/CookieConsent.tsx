"use client";

import { useEffect, useState } from "react";
import {
  clearSavedFormCookies,
  COOKIE_CONSENT_EVENT,
  COOKIE_CONSENT_NAME,
  getCookieConsent,
  setCookie,
} from "@/lib/formCookies";
import styles from "./CookieConsent.module.css";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!getCookieConsent());
  }, []);

  function updateConsent(value: "accepted" | "declined") {
    setCookie(COOKIE_CONSENT_NAME, value);
    if (value === "declined") {
      clearSavedFormCookies();
    }
    window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className={styles.banner} role="dialog" aria-live="polite" aria-label="Cookie notice">
      <div>
        <h2 className={styles.title}>Cookie Preferences</h2>
        <p className={styles.text}>
          We use essential cookies for the website and, with your permission, a small cookie to remember details you enter in contact and application forms.
        </p>
      </div>
      <div className={styles.actions}>
        <button
          type="button"
          className={styles.secondaryButton}
          onClick={() => updateConsent("declined")}
        >
          Decline
        </button>
        <button
          type="button"
          className={styles.primaryButton}
          onClick={() => updateConsent("accepted")}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
