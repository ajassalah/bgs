"use client";

import { useState } from "react";
import styles from "./BlogDetail.module.css";

export default function CommentSection() {
  const [formData, setFormData] = useState({
    comment: "",
    name: "",
    email: "",
    website: "",
    saveInfo: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your comment! It is awaiting moderation.");
    setFormData({ comment: "", name: "", email: "", website: "", saveInfo: false });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  return (
    <div className={styles.commentSection}>
      <h3 className={styles.commentTitle}>Leave a Reply</h3>
      <p className={styles.commentNote}>Your email address will not be published. Required fields are marked *</p>
      
      <form onSubmit={handleSubmit} className={styles.commentForm}>
        <div className={styles.formGroup}>
          <label htmlFor="comment">Comment *</label>
          <textarea 
            id="comment" 
            name="comment" 
            required 
            value={formData.comment}
            onChange={handleChange}
            rows={8}
          ></textarea>
        </div>
        
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name *</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email *</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="website">Website</label>
          <input 
            type="url" 
            id="website" 
            name="website" 
            value={formData.website}
            onChange={handleChange}
          />
        </div>
        
        <div className={styles.formGroupCheckbox}>
          <input 
            type="checkbox" 
            id="saveInfo" 
            name="saveInfo" 
            checked={formData.saveInfo}
            onChange={handleChange}
          />
          <label htmlFor="saveInfo">Save my name, email, and website in this browser for the next time I comment.</label>
        </div>
        
        <button type="submit" className={styles.commentBtn}>Post Comment</button>
      </form>
    </div>
  );
}
