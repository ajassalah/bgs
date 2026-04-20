"use client";

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

  return (
    <form className={styles.applyForm}>
      <div className={styles.formSection}>
        <div className={styles.inputGrid}>
          <div className={styles.formGroup}>
            <label>First Name<span className={styles.required}>*</span></label>
            <input type="text" className={styles.input} placeholder="Enter your first name" required />
          </div>
          <div className={styles.formGroup}>
            <label>Last Name<span className={styles.required}>*</span></label>
            <input type="text" className={styles.input} placeholder="Enter your last name" required />
          </div>
        </div>
      </div>

      <div className={styles.inputGrid}>
        <div className={styles.formGroup}>
          <label>Email Address<span className={styles.required}>*</span></label>
          <input type="email" className={styles.input} placeholder="Enter your email" required />
        </div>
        <div className={styles.formGroup}>
          <label>Phone Number<span className={styles.required}>*</span></label>
          <input type="tel" className={styles.input} placeholder="Enter your phone number" required />
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

        {/* Manual input when "Other" is selected */}
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
        <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem", flexWrap: "wrap" }}>
          <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: "400" }}>
            <input type="radio" name="contact" value="email" /> Email
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: "400" }}>
            <input type="radio" name="contact" value="phone" /> Phone
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: "400" }}>
            <input type="radio" name="contact" value="whatsapp" /> WhatsApp
          </label>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label>Additional Message / Questions</label>
        <textarea
          className={styles.textarea}
          rows={5}
          placeholder="Tell us more about your background or any questions you have..."
        ></textarea>
      </div>

      <button type="submit" className={styles.submitBtn}>Submit Application</button>
    </form>
  );
}
