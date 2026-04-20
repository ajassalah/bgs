"use client";

import { useMemo, useState } from "react";
import styles from "./Career.module.css";

export type CareerJob = {
  _id: string;
  title: string;
  slug?: { current?: string };
  summary?: string;
  description?: any[];
  department?: string;
  location?: string;
  jobType?: string;
  workMode?: string;
  skills?: string[];
  requirements?: string[];
  benefits?: string[];
  experienceLevel?: string;
  salaryMin?: number;
  salaryMax?: number;
  salaryCurrency?: string;
  postedAt?: string;
  closingDate?: string;
  image?: any;
};

const labelMap: Record<string, string> = {
  academic: "Academic",
  admissions: "Admissions",
  administration: "Administration",
  marketing: "Marketing",
  "student-support": "Student Support",
  technology: "Technology",
  finance: "Finance",
  hr: "Human Resources",
  "full-time": "Full-time",
  "part-time": "Part-time",
  contract: "Contract",
  internship: "Internship",
  "on-site": "On-site",
  hybrid: "Hybrid",
  remote: "Remote",
  entry: "Entry Level",
  mid: "Mid Level",
  senior: "Senior",
  lead: "Lead",
};

function formatLabel(value?: string) {
  if (!value) return "Not specified";
  return labelMap[value] || value;
}

function formatSalary(job: CareerJob) {
  if (!job.salaryMin && !job.salaryMax) return null;
  const currency = job.salaryCurrency || "GBP";
  const min = job.salaryMin ? `${currency} ${job.salaryMin.toLocaleString()}` : "";
  const max = job.salaryMax ? `${currency} ${job.salaryMax.toLocaleString()}` : "";
  return [min, max].filter(Boolean).join(" - ");
}

export default function CareerBoard({ jobs }: { jobs: CareerJob[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedJob, setSelectedJob] = useState<CareerJob | null>(null);

  const departments = useMemo(() => {
    const values = new Set(jobs.map((job) => job.department).filter(Boolean));
    return ["all", ...Array.from(values)] as string[];
  }, [jobs]);

  const jobTypes = useMemo(() => {
    const values = new Set(jobs.map((job) => job.jobType).filter(Boolean));
    return ["all", ...Array.from(values)] as string[];
  }, [jobs]);

  const filteredJobs = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    return jobs.filter((job) => {
      const matchesSearch =
        !term ||
        job.title.toLowerCase().includes(term) ||
        job.summary?.toLowerCase().includes(term) ||
        job.department?.toLowerCase().includes(term);
      const matchesDepartment =
        selectedDepartment === "all" || job.department === selectedDepartment;
      const matchesType = selectedType === "all" || job.jobType === selectedType;
      return matchesSearch && matchesDepartment && matchesType;
    });
  }, [jobs, searchTerm, selectedDepartment, selectedType]);

  return (
    <section className={styles.boardSection}>
      <div className="container">
        <div className={styles.boardIntro}>
          <p className={styles.kicker}>Open Positions</p>
          <h2>Find Your Next Role</h2>
          <p>
            Browse current opportunities and apply directly. Our team reviews
            every application and will contact shortlisted candidates.
          </p>
        </div>

        <div className={styles.filterBar}>
          <input
            type="search"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className={styles.searchInput}
          />
          <select
            value={selectedDepartment}
            onChange={(event) => setSelectedDepartment(event.target.value)}
            className={styles.select}
          >
            {departments.map((department) => (
              <option key={department} value={department}>
                {department === "all" ? "All Departments" : formatLabel(department)}
              </option>
            ))}
          </select>
          <select
            value={selectedType}
            onChange={(event) => setSelectedType(event.target.value)}
            className={styles.select}
          >
            {jobTypes.map((type) => (
              <option key={type} value={type}>
                {type === "all" ? "All Job Types" : formatLabel(type)}
              </option>
            ))}
          </select>
        </div>

        <p className={styles.resultsCount}>
          Showing {filteredJobs.length} of {jobs.length} openings
        </p>

        <div className={styles.jobsGrid}>
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <article key={job._id} className={styles.jobCard}>
                <div className={styles.jobCardHeader}>
                  <div>
                    <h3>{job.title}</h3>
                    <div className={styles.metaRow}>
                      <span>{formatLabel(job.department)}</span>
                      <span>{job.location || "Location TBC"}</span>
                      <span>{formatLabel(job.jobType)}</span>
                    </div>
                  </div>
                  {job.postedAt && (
                    <span className={styles.newBadge}>Open</span>
                  )}
                </div>

                <p className={styles.jobSummary}>
                  {job.summary ||
                    "Explore this role and apply to join British Graduate School."}
                </p>

                <div className={styles.skillList}>
                  {(job.skills || []).slice(0, 4).map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>

                <div className={styles.cardFooter}>
                  <span>{formatLabel(job.workMode)}</span>
                  <button type="button" onClick={() => setSelectedJob(job)}>
                    View & Apply
                  </button>
                </div>
              </article>
            ))
          ) : (
            <div className={styles.noResults}>
              <h3>No openings match your filters.</h3>
              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedDepartment("all");
                  setSelectedType("all");
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>

      {selectedJob && (
        <ApplicationModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </section>
  );
}

function ApplicationModal({
  job,
  onClose,
}: {
  job: CareerJob;
  onClose: () => void;
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");
    setMessage("");

    const formData = new FormData(form);
    formData.set("jobId", job._id);
    formData.set("jobTitle", job.title);

    try {
      const response = await fetch("/api/career/applications", {
        method: "POST",
        body: formData,
      });
      const responseText = await response.text();
      const result = responseText ? JSON.parse(responseText) : {};

      if (!response.ok) {
        throw new Error(result?.error || "Unable to submit application.");
      }

      setStatus("success");
      setMessage("Application submitted successfully. Our team will review it shortly.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to submit application.");
    }
  }

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(event) => event.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div>
            <p className={styles.kicker}>Apply Now</p>
            <h2>{job.title}</h2>
          </div>
          <button type="button" onClick={onClose} aria-label="Close application form">
            x
          </button>
        </div>

        <div className={styles.jobDetailGrid}>
          <div>
            <h3>Role Overview</h3>
            <p>{job.summary || "Submit your details for this opportunity."}</p>
            {job.requirements && job.requirements.length > 0 && (
              <>
                <h4>Requirements</h4>
                <ul>
                  {job.requirements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            )}
            {job.benefits && job.benefits.length > 0 && (
              <>
                <h4>Benefits</h4>
                <ul>
                  {job.benefits.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <div className={styles.jobFacts}>
            <p><strong>Department</strong>{formatLabel(job.department)}</p>
            <p><strong>Location</strong>{job.location || "Location TBC"}</p>
            <p><strong>Type</strong>{formatLabel(job.jobType)}</p>
            <p><strong>Work Mode</strong>{formatLabel(job.workMode)}</p>
            {formatSalary(job) && <p><strong>Salary</strong>{formatSalary(job)}</p>}
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.applicationForm}>
          <div className={styles.inputGrid}>
            <label>
              Full Name <span>*</span>
              <input name="fullName" type="text" required />
            </label>
            <label>
              Email Address <span>*</span>
              <input name="email" type="email" required />
            </label>
          </div>
          <div className={styles.inputGrid}>
            <label>
              Phone Number
              <input name="phone" type="tel" />
            </label>
            <label>
              Resume / CV
              <input name="resume" type="file" accept=".pdf,.doc,.docx" />
            </label>
          </div>
          <div className={styles.inputGrid}>
            <label>
              LinkedIn Profile
              <input name="linkedinProfile" type="text" placeholder="www.linkedin.com/in/your-profile" />
            </label>
            <label>
              Portfolio URL
              <input name="portfolioUrl" type="text" placeholder="your-portfolio.com" />
            </label>
          </div>
          <label>
            Cover Letter
            <textarea name="coverLetter" rows={5} />
          </label>

          {message && (
            <p className={status === "success" ? styles.successMessage : styles.errorMessage}>
              {message}
            </p>
          )}

          <button type="submit" disabled={status === "submitting"} className={styles.submitBtn}>
            {status === "submitting" ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
}
