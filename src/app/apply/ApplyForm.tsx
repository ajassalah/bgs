"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import styles from "./Apply.module.css";

type Course = {
  id: string;
  title: string;
  category: string;
  awardingBody?: string;
};

export default function ApplyForm({ courses }: { courses: Course[] }) {
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

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
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
          message: formData.get("message"),
        }),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result?.error || "Unable to submit your application.");
      }

      setStatus("success");
      setMessage("Thank you. Your enquiry has been submitted successfully.");
      form.reset();
      setSelectedAwardingBody("");
      setSelectedProgram("");
      setOtherProgram("");
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
            <input name="firstName" type="text" className={styles.input} placeholder="Enter your first name" required />
          </div>
          <div className={styles.formGroup}>
            <label>Last Name<span className={styles.required}>*</span></label>
            <input name="lastName" type="text" className={styles.input} placeholder="Enter your last name" required />
          </div>
        </div>
      </div>

      <div className={styles.inputGrid}>
        <div className={styles.formGroup}>
          <label>Email Address<span className={styles.required}>*</span></label>
          <input name="email" type="email" className={styles.input} placeholder="Enter your email" required />
        </div>
        <div className={styles.formGroup}>
          <label>Phone Number<span className={styles.required}>*</span></label>
          <input name="phone" type="tel" className={styles.input} placeholder="Enter your phone number" required />
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
            onChange={(e) => setOtherProgram(e.target.value)}
            style={{ marginTop: "0.75rem" }}
            required
          />
        )}
      </div>

      <div className={styles.formGroup}>
        <label>Preferred Contact Method</label>
        <div className={styles.radioGroup}>
          <label className={styles.radioOption}>
            <input className={styles.radioInput} type="radio" name="contactMethod" value="email" /> Email
          </label>
          <label className={styles.radioOption}>
            <input className={styles.radioInput} type="radio" name="contactMethod" value="phone" /> Phone
          </label>
          <label className={styles.radioOption}>
            <input className={styles.radioInput} type="radio" name="contactMethod" value="whatsapp" /> WhatsApp
          </label>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label>Additional Message / Questions</label>
        <textarea
          name="message"
          className={styles.textarea}
          rows={5}
          placeholder="Tell us more about your background or any questions you have..."
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
