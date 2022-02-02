import React from "react";
import { Link } from "react-router-dom";
import styles from "./Rights.module.css";

function Rights({ style }) {
  return (
    <div style={style} className={`${styles.footerBottom}  `}>
      <p className="fs-20px text-body font-anybody-regular text-center">
        ©2022 RICH CYCLE REBELS . ALL RIGHTS RESERVED
      </p>
      <p>|</p>
      <Link
        to="/terms-and-conditions"
        className="fs-20px font-anybody-regular hover-underline black"
      >
        Terms and Conditions
      </Link>
    </div>
  );
}

export default Rights;
