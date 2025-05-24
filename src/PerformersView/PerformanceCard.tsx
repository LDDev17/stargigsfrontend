import React from "react";
import styles from "./PerformanceCard.module.css";

interface PerformanceCardProps {
  image: string;
  tags: string[];
  location: string;
  title: string;
  performer: string;
  price: string;
  description: string;
}

const PerformanceCard: React.FC<PerformanceCardProps> = ({
  image,
  tags,
  location,
  title,
  performer,
  price,
  description,
}) => {
  return (
    <article className={styles.card}>
      <img src={image} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <div className={styles.tagContainer}>
            {tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
          <p className={styles.location}>{location}</p>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.performerInfo}>
          <p className={styles.performer}>{performer}</p>
          <div className={styles.priceContainer}>
            <p className={styles.price}>{price}</p>
            <img src="CalendarBlank.png" alt="Price info" className={styles.priceIcon} />
          </div>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
};

export default PerformanceCard;
