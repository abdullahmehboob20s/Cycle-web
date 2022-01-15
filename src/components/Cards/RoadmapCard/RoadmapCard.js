import React from "react";
import styles from "./RoadmapCard.module.css";
import { useInView } from "react-intersection-observer";

function RoadmapCard({ isActive, phase, title, points }) {
  const { ref, inView } = useInView({
    threshold: 1,
    rootMargin: "100% 0px 0px 0px",
  });

  return (
    <div
      ref={ref}
      className={`${styles.cardWrapper} ${isActive ? styles.active : ""}`}
    >
      <div className={styles.cardLeft}>
        <p className="fs-56px yellow uppercase font-anybody-bold">
          PHASE {phase}
        </p>
      </div>
      <div className={`${styles.cardRight} ${inView ? styles.isVisible : ""}`}>
        <div className={styles.cardContent}>
          <h4
            className={`fs-28px yellow font-anybody-bold lh-1_3 ${
              points.length !== 0 ? "mb-25px" : ""
            } `}
          >
            {title}
          </h4>

          <ul className={styles.cardList}>
            {points &&
              points.map((point, index) => (
                <li
                  key={index}
                  className="fs-26px white lh-1_5 font-anybody-regular mb-25px"
                >
                  {point}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RoadmapCard;
