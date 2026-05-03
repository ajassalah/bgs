"use client";

import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import {
  APPLY_FORM_COOKIE,
  COOKIE_CONSENT_EVENT,
  hasCookieConsent,
  readJsonCookie,
  saveJsonCookie,
} from "@/lib/formCookies";
import styles from "./Apply.module.css";

type Course = {
  id: string;
  title: string;
  category: string;
  awardingBody?: string;
};

type ApplyFormProps = {
  courses: Course[];
  initialSubject?: string;
  initialMessage?: string;
};

type ApplySavedValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  awardingBody: string;
  programId: string;
  otherProgram: string;
  contactMethod: string;
  subject: string;
  message: string;
};

const emptySavedValues: ApplySavedValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  awardingBody: "",
  programId: "",
  otherProgram: "",
  contactMethod: "",
  subject: "",
  message: "",
};

export default function ApplyForm({
  courses,
  initialSubject = "",
  initialMessage = "",
}: ApplyFormProps) {
  const [values, setValues] = useState<ApplySavedValues>({
    ...emptySavedValues,
    subject: initialSubject,
    message: initialMessage,
  });
  const [selectedAwardingBody, setSelectedAwardingBody] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [otherProgram, setOtherProgram] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const awardingBodies = Array.from(
    new Set(courses.map((course) => course.awardingBody || "Other").filter(Boolean))
  ).sort();

  const filteredCourses = selectedAwardingBody
    ? courses.filter((course) => (course.awardingBody || "Other") === selectedAwardingBody)
    : [];

  const groupedPrograms = filteredCourses.reduce<Record<string, Course[]>>((acc, course) => {
    const category = course.category || "General";
    if (!acc[category]) acc[category] = [];
    acc[category].push(course);
    return acc;
  }, {});

  const categories = Object.keys(groupedPrograms).sort();

  useEffect(() => {
    function loadSavedValues() {
      if (!hasCookieConsent()) return;

      const saved = readJsonCookie<ApplySavedValues>(APPLY_FORM_COOKIE);
      setValues((current) => ({
        ...current,
        ...saved,
        subject: initialSubject || saved.subject || current.subject,
        message: initialMessage || saved.message || current.message,
      }));
      setSelectedAwardingBody(saved.awardingBody || "");
      setSelectedProgram(saved.programId || "");
      setOtherProgram(saved.otherProgram || "");
    }

    loadSavedValues();
    window.addEventListener(COOKIE_CONSENT_EVENT, loadSavedValues);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, loadSavedValues);
  }, [initialMessage, initialSubject]);

  function updateValue(field: keyof ApplySavedValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const selectedCourse = courses.find((course) => course.id === selectedProgram);
    const program =
      selectedProgram === "other" ? otherProgram : selectedCourse?.title || selectedProgram;

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          awardingBody: selectedAwardingBody,
          program,
          contactMethod: formData.get("contactMethod"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result?.error || "Unable to submit your application.");
      }

      saveJsonCookie(APPLY_FORM_COOKIE, {
        ...values,
        awardingBody: selectedAwardingBody,
        programId: selectedProgram,
        otherProgram,
        subject: String(formData.get("subject") || ""),
        message: String(formData.get("message") || ""),
      });
      setStatus("success");
      setMessage("Thank you. Your enquiry has been submitted successfully.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Unable to submit your application."
      );
    }
  }

  return (
    <form className={styles.applyForm} onSubmit={handleSubmit}>
      <div className={styles.formSection}>
        <div className={styles.inputGrid}>
          <div className={styles.formGroup}>
            <label>First Name<span className={styles.required}>*</span></label>
            <input
              name="firstName"
              type="text"
              className={styles.input}
              placeholder="Enter your first name"
              value={values.firstName}
              onChange={(event) => updateValue("firstName", event.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Last Name<span className={styles.required}>*</span></label>
            <input
              name="lastName"
              type="text"
              className={styles.input}
              placeholder="Enter your last name"
              value={values.lastName}
              onChange={(event) => updateValue("lastName", event.target.value)}
              required
            />
          </div>
        </div>
      </div>

      <div className={styles.inputGrid}>
        <div className={styles.formGroup}>
          <label>Email Address<span className={styles.required}>*</span></label>
          <input
            name="email"
            type="email"
            className={styles.input}
            placeholder="Enter your email"
            value={values.email}
            onChange={(event) => updateValue("email", event.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Phone Number<span className={styles.required}>*</span></label>
          <input
            name="phone"
            type="tel"
            className={styles.input}
            placeholder="Enter your phone number"
            value={values.phone}
            onChange={(event) => updateValue("phone", event.target.value)}
            required
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label>Select Awarding Body<span className={styles.required}>*</span></label>
        <select
          className={styles.select}
          required
          value={selectedAwardingBody}
          onChange={(e) => {
            setSelectedAwardingBody(e.target.value);
            updateValue("awardingBody", e.target.value);
            setSelectedProgram("");
            setOtherProgram("");
          }}
        >
          <option value="">Choose an awarding body...</option>
          {awardingBodies.map((body) => (
            <option key={body} value={body}>
              {body}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.formGroup}>
        <label>Select Program of Interest<span className={styles.required}>*</span></label>
        <select
          className={styles.select}
          required
          value={selectedProgram}
          disabled={!selectedAwardingBody}
          onChange={(e) => {
            setSelectedProgram(e.target.value);
            updateValue("programId", e.target.value);
            if (e.target.value !== "other") setOtherProgram("");
          }}
        >
          <option value="">
            {selectedAwardingBody ? "Choose a program..." : "Select an awarding body first..."}
          </option>
          {categories.map((cat) => (
            <optgroup key={cat} label={cat}>
              {groupedPrograms[cat].map((course) => (
                <option key={course.id} value={course.id}>
                  {course.title}
                </option>
              ))}
            </optgroup>
          ))}
          <option value="other">Other (please specify)</option>
        </select>

        {selectedProgram === "other" && (
          <input
            type="text"
            className={styles.input}
            placeholder="Please describe your program of interest..."
            value={otherProgram}
            onChange={(e) => {
              setOtherProgram(e.target.value);
              updateValue("otherProgram", e.target.value);
            }}
            style={{ marginTop: "0.75rem" }}
            required
          />
        )}
      </div>

      <div className={styles.formGroup}>
        <label>Preferred Contact Method</label>
        <div className={styles.radioGroup}>
          <label className={styles.radioOption}>
            <input
              className={styles.radioInput}
              type="radio"
              name="contactMethod"
              value="email"
              checked={values.contactMethod === "email"}
              onChange={(event) => updateValue("contactMethod", event.target.value)}
            /> Email
          </label>
          <label className={styles.radioOption}>
            <input
              className={styles.radioInput}
              type="radio"
              name="contactMethod"
              value="phone"
              checked={values.contactMethod === "phone"}
              onChange={(event) => updateValue("contactMethod", event.target.value)}
            /> Phone
          </label>
          <label className={styles.radioOption}>
            <input
              className={styles.radioInput}
              type="radio"
              name="contactMethod"
              value="whatsapp"
              checked={values.contactMethod === "whatsapp"}
              onChange={(event) => updateValue("contactMethod", event.target.value)}
            /> WhatsApp
          </label>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label>Subject</label>
        <input
          name="subject"
          type="text"
          className={styles.input}
          placeholder="Application enquiry"
          value={values.subject}
          onChange={(event) => updateValue("subject", event.target.value)}
        />
      </div>

      <div className={styles.formGroup}>
        <label>Additional Message / Questions</label>
        <textarea
          name="message"
          className={styles.textarea}
          rows={5}
          placeholder="Tell us more about your background or any questions you have..."
          value={values.message}
          onChange={(event) => updateValue("message", event.target.value)}
        ></textarea>
      </div>

      {message && (
        <p className={status === "success" ? styles.successMessage : styles.errorMessage}>
          {message}
        </p>
      )}

      <button type="submit" className={styles.submitBtn} disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}
