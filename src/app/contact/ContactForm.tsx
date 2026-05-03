"use client";

import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import {
  CONTACT_FORM_COOKIE,
  COOKIE_CONSENT_EVENT,
  hasCookieConsent,
  readJsonCookie,
  saveJsonCookie,
} from "@/lib/formCookies";
import styles from "./Contact.module.css";

type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

const emptyValues: ContactFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(emptyValues);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    function loadSavedValues() {
      if (!hasCookieConsent()) return;
      setValues((current) => ({
        ...current,
        ...readJsonCookie<ContactFormValues>(CONTACT_FORM_COOKIE),
      }));
    }

    loadSavedValues();
    window.addEventListener(COOKIE_CONSENT_EVENT, loadSavedValues);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, loadSavedValues);
  }, []);

  function updateValue(field: keyof ContactFormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result?.error || "Unable to submit your message.");
      }

      saveJsonCookie(CONTACT_FORM_COOKIE, values);
      setStatus("success");
      setMessage("Thank you. Your message has been submitted successfully.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to submit your message.");
    }
  }

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <input
          name="firstName"
          type="text"
          placeholder="First Name"
          className={styles.input}
          value={values.firstName}
          onChange={(event) => updateValue("firstName", event.target.value)}
          required
        />
        <input
          name="lastName"
          type="text"
          placeholder="Last Name"
          className={styles.input}
          value={values.lastName}
          onChange={(event) => updateValue("lastName", event.target.value)}
          required
        />
      </div>
      <input
        name="email"
        type="email"
        placeholder="Email Address"
        className={styles.input}
        value={values.email}
        onChange={(event) => updateValue("email", event.target.value)}
        required
      />
      <input
        name="subject"
        type="text"
        placeholder="Subject"
        className={styles.input}
        value={values.subject}
        onChange={(event) => updateValue("subject", event.target.value)}
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows={6}
        className={styles.textarea}
        value={values.message}
        onChange={(event) => updateValue("message", event.target.value)}
        required
      ></textarea>

      {message && (
        <p className={status === "success" ? styles.successMessage : styles.errorMessage}>
          {message}
        </p>
      )}

      <button type="submit" className={styles.submitBtn} disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
