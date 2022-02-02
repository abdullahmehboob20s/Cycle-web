import React from "react";
import styles from "./Title.module.css";

function Title({ title, className = "fs-144px text-center " }) {
  return (
    <h1
      className={`${styles.title} ${className} text-transparent font-anybody-black`}
    >
      {title}
    </h1>
  );
}

export default Title;
