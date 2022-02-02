import React from "react";
import { Link } from "react-router-dom";
import styles from "./Rights.module.css";

function Rights({ style, linkStyle, textStyle }) {
  return (
    <div style={style} className={`${styles.footerBottom}  `}>
      <p
        className={` fs-20px text-body font-anybody-regular text-center lh-1`}
        style={textStyle}
      >
        ©2022 RICH CYCLE REBELS . ALL RIGHTS RESERVED
      </p>
      <Link
        to="/terms-and-conditions"
        target="_blank"
        className={`${styles.privacyPolicy}  fs-20px font-anybody-regular hover-underline black`}
        style={linkStyle}
      >
        Privacy Policy
      </Link>
    </div>
  );
}

export default Rights;
