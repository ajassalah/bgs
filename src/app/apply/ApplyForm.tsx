"use client";

import { useState } from "react";
import styles from "./Apply.module.css";

type Course = {
  id: string;
  title: string;
  category: string;
};

export default function ApplyForm({ courses }: { courses: Course[] }) {
  const [selectedProgram, setSelectedProgram] = useState("");
  const [otherProgram, setOtherProgram] = useState("");

  // Group courses by category
  const grouped = courses.reduce<Record<string, Course[]>>((acc, course) => {
    const cat = course.category || "General";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(course);
    return acc;
  }, {});

  const categories = Object.keys(grouped).sort();

  return (
    <form className={styles.applyForm}>
      <div className={styles.formSection}>
        <div className={styles.inputGrid}>
          <div className={styles.formGroup}>
            <label>First Name*</label>
            <input type="text" className={styles.input} placeholder="Enter your first name" required />
          </div>
          <div className={styles.formGroup}>
            <label>Last Name*</label>
            <input type="text" className={styles.input} placeholder="Enter your last name" required />
          </div>
        </div>
      </div>

      <div className={styles.inputGrid}>
        <div className={styles.formGroup}>
          <label>Email Address*</label>
          <input type="email" className={styles.input} placeholder="Enter your email" required />
        </div>
        <div className={styles.formGroup}>
          <label>Phone Number*</label>
          <input type="tel" className={styles.input} placeholder="Enter your phone number" required />
        </div>
      </div>

      {/* Dynamic Program Dropdown */}
      <div className={styles.formGroup}>
        <label>Select Program of Interest*</label>
        <select
          className={styles.select}
          required
          value={selectedProgram}
          onChange={(e) => {
            setSelectedProgram(e.target.value);
            if (e.target.value !== "other") setOtherProgram("");
          }}
        >
          <option value="">Choose a program...</option>
          {categories.map((cat) => (
            <optgroup key={cat} label={cat}>
              {grouped[cat].map((course) => (
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
