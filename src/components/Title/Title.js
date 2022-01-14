import React from "react";
import styles from "./Title.module.css";

function Title({ title }) {
  return (
    <h1
      className={`${styles.title} fs-144px font-anybody-black text-center text-transparent`}
    >
      {title}
    </h1>
  );
}

export default Title;
