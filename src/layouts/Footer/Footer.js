import Rights from "components/Rights/Rights";
import React from "react";
import styles from "./Footer.module.css";
import RICH_CYCLE from "assets/images/RICH-CYCLE.png";
import useMediaQuery from "utils/hooks/useMediaQuery ";

function Footer() {
  const isBellow = useMediaQuery("(max-width: 500px)");

  return (
    <div className={`${styles.footerWrapper} `}>
      <div className="container-wrapper">
        <div className={`py-100px`}>
          {/* <h1 className="fs-168px text-center yellow font-anybody-black mb-70px">
            RICH CYCLE
          </h1> */}

          <img
            src={RICH_CYCLE}
            className={`${styles.titleImg}  w-full ${
              isBellow ? "mb-30px" : "mb-60px"
            }`}
            alt=""
          />

          <div className={styles.socialLink}>
            <a
              href="#"
              className={`fs-50px ${
                isBellow ? "yellow" : "white"
              }  font-anybody-bold uppercase`}
            >
              OPENSEA
            </a>
            <a
              href="#"
              className={`fs-50px ${
                isBellow ? "yellow" : "white"
              }  font-anybody-bold uppercase`}
            >
              TWITTER
            </a>
            <a
              href="#"
              className={`fs-50px ${
                isBellow ? "yellow" : "white"
              }  font-anybody-bold uppercase`}
            >
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
