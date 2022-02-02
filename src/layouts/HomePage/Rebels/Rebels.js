import React from "react";
import styles from "./Rebels.module.css";
import logoWhite from "assets/images/logo-white.png";
import { Link } from "react-router-dom";

function Rebels() {
  return (
    <div className={styles.aboutWrapper}>
      <div className="container-wrapper ">
        <div className={`${styles.aboutParent} py-100px`}>
          <div className={styles.about}>
            <div className="mb-30px">
              <div className={styles.avatar}>
                <img className="w-full" src={logoWhite} alt="" />
              </div>
            </div>

            <div className={`${styles.aboutTitle} mb-25px`}>
              <h1 className="fs-168px white font-anybody-black text-center">
                WTF !
              </h1>
            </div>

            <div className={`${styles.aboutContent} mb-30px`}>
              <h2 className="fs-96px white mb-15px font-anybody-black text-center">
                IS <br /> RICH CYCLE <br /> REBELS ?
              </h2>

              <p className="fs-32px font-anybody-medium white text-center lh-1_4">
                A collection of 7,777 meta fashion avatars based on the Ethereum
                blockchain. Each unique RICH CYCLE REBEL is randomly generated
                from a combination of over 200 individually drawn elements,
                including over 100 different outfits.
              </p>
            </div>

            <Link
              to="/"
              className={`${styles.aboutButton} not-allowed mb-25px w-full fs-46px black text-center block pointer font-anybody-black lh-1`}
            >
              MINT REBELS
            </Link>

            <div className="text-center">
              <p className="fs-50px font-anybody-medium uppercase red">6916 </p>
              <p className="fs-50px font-anybody-medium white uppercase">
                AVAILABLE
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rebels;
