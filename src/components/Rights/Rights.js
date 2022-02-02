import React from "react";
import { Link } from "react-router-dom";
import styles from "./Rights.module.css";

function Rights({ style }) {
  return (
    <div style={style} className={`${styles.footerBottom}  `}>
      <p className="fs-20px text-body font-anybody-regular text-center lh-1">
        ©2022 RICH CYCLE REBELS . ALL RIGHTS RESERVED
      </p>
      <Link
        to="/terms-and-conditions"
        className={`${styles.privacyPolicy} fs-20px font-anybody-regular hover-underline black`}
      >
        Privacy Policy
      </Link>
    </div>
  );
}

export default Rights;
