import Rights from "components/Rights/Rights";
import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={`${styles.footerWrapper} `}>
      <div className="container-wrapper">
        <div className={`py-100px`}>
          <h1 className="fs-168px text-center yellow font-anybody-black mb-70px">
            RICH CYCLE
          </h1>

          <div className={styles.socialLink}>
            <a href="#" className="fs-50px yellow font-anybody-bold uppercase">
              OPENSEA
            </a>
            <a href="#" className="fs-50px yellow font-anybody-bold uppercase">
              TWITTER
            </a>
            <a href="#" className="fs-50px yellow font-anybody-bold uppercase">
              DISCORD
            </a>
          </div>
        </div>
      </div>
      <Rights />
    </div>
  );
}

export default Footer;
