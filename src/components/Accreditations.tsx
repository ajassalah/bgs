import styles from "./Accreditations.module.css";

export default function Accreditations({ data }: { data?: any }) {
  const benefitItems = (data?.benefitItems && data.benefitItems.length > 0) ? data.benefitItems : [
    { name: "Global", label: "Recognition" },
    { name: "Job-Relevant", label: "Modules" },
    { name: "Fast-Track Programs", label: "with Flexible Schedules" },
    { name: "Affordable Tuition Plans", label: "& Scholarships" }
  ];

  const icons = [
    (
      <svg key="icon-0" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#a0142d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
      </svg>
    ),
    (
      <svg key="icon-1" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#a0142d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        <line x1="8" y1="6" x2="16" y2="6"></line>
        <line x1="8" y1="10" x2="16" y2="10"></line>
        <line x1="8" y1="14" x2="16" y2="14"></line>
      </svg>
    ),
    (
      <svg key="icon-2" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#a0142d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <rect x="9" y="13" width="6" height="4" rx="1"></rect>
        <circle cx="12" cy="11" r="2"></circle>
      </svg>
    ),
    (
      <svg key="icon-3" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#a0142d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
        <path d="M2 17l10 5 10-5"></path>
        <path d="M2 12l10 5 10-5"></path>
      </svg>
    )
  ];

  const items = benefitItems.map((item: any, idx: number) => ({
    ...item,
    icon: icons[idx % icons.length]
  }));

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {items.map((partner: any, index: number) => (
            <div key={index} className={styles.item}>
              <div className={styles.iconWrapper}>
                {partner.icon}
              </div>
              <div className={styles.textWrapper}>
                <h4 className={styles.itemName}>{partner.name}</h4>
                <p className={styles.label}>{partner.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
