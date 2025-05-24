import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PerformanceSection.module.css";
import PerformanceCard from "./PerformanceCard";

export const PerformanceSection: React.FC = () => {
  const navigate = useNavigate();

  const performances = [
    {
      image: "TC1.png",
      location: "New York, NY",
      title: "Electric Sunset Show",
      price: "$1500/HR",
      description:
        "Live band performances and unique acts that go beyond the usual — ideal for unforgettable events and custom...",
      tags: ["BAND", "MISC"],
    },
    {
      image: "TC2.png",
      location: "New York, NY",
      title: "Acoustic Dream Sessions",
      price: "$2000/HR",
      description:
        "Solo and unique performances perfect for private events, intimate settings, or one-of-a-kind experiences.",
      tags: ["SOLO", "MISC"],
    },
  ];

  return (
    <section className={styles.performanceSection}>
      <div className={styles.header}>
        <h1 className={styles.title}>Performances</h1>
        <p className={styles.subtitle}>
          – Highlight your talent with performances that get you gig bookings.!
        </p>
        <button
          className={styles.addButton}
          onClick={() => navigate("/add-performer")}
        >
          Add Performance
        </button>
      </div>

      <div className={styles.cardGrid}>
        {performances.map((performance, index) => (
          <PerformanceCard performer={""} key={index} {...performance} />
        ))}
      </div>
    </section>
  );
};
