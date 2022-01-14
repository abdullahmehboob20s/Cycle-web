import React from "react";
import styles from "./MilestoneCard.module.css";

function MilestoneCard({ text, title, isActive = false }) {
  return (
    <div className={`${styles.card} ${isActive ? styles.active : ""}`}>
      <div className={`${styles.card_left} fs-40px font-anybody-black lh-1`}>
        {title}
      </div>
      <div className={styles.card_right}>
        <p className="fs-20px white font-anybody-medium lh-1_6">{text}</p>
      </div>
    </div>
  );
}

export default MilestoneCard;
