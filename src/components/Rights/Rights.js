import React from "react";
import styles from "./Rights.module.css";

function Rights({ style }) {
  return (
    <div
      style={style}
      className={`${styles.footerBottom} fs-20px text-body font-anybody-regular text-center `}
    >
      ©2022 RICH CYCLE REBELS . ALL RIGHTS RESERVED
    </div>
  );
}

export default Rights;
