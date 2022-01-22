import React, { useEffect, useRef, useState } from "react";
import styles from "./RoadmapCard.module.css";
import { useInView } from "react-intersection-observer";

function RoadmapCard({
  isActive,
  phase,
  title,
  points,
  roadmapLine,
  value,
  show = false,
  lastRef = false,
}) {
  const circleRef = useRef();
  // const { ref, inView } = useInView({
  //   threshold: 1,
  //   rootMargin: "100% 0px 0px 0px",
  // });
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (show) {
        // let lineHeight = roadmapLine.current.clientHeight;
        // let windowHieght = window.innerHeight / 2;
        // let b = circleRef.current.clientHeight / 2;
        // let circleTop = circleRef.current.offsetTop + b;
        // if (lineHeight > windowHieght - circleTop) {
        //   setInView(true);
        // } else {
        //   setInView(false);
        // }
        // console.log(roadmapLine.current.getBoundingClientRect());
      }
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  });

  return (
    <div
      className={`${styles.cardWrapper} ${isActive ? styles.active : ""}`}
      ref={lastRef ? lastRef : null}
    >
      <div className={styles.cardLeft}>
        <p className="fs-56px yellow uppercase font-anybody-bold">
          PHASE {phase}
        </p>
      </div>

      <div className={`${styles.cardRight} ${styles.isVisible}`}>
        <div className={styles.cardRightCircle} ref={circleRef}></div>

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
