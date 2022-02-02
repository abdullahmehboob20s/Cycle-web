import Rights from "components/Rights/Rights";
import React from "react";
import styles from "./Footer.module.css";
import RICH_CYCLE from "assets/images/RICH-CYCLE.png";
import useMediaQuery from "utils/hooks/useMediaQuery ";
import { Link } from "react-router-dom";

function Footer({ links }) {
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
            {links.map((data, index) => (
              <Link
                to={data.link}
                target={data.target}
                className={`fs-50px ${
                  isBellow ? "yellow" : "white"
                }  font-anybody-bold uppercase`}
              >
                {data.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Rights />
    </div>
  );
}

export default Footer;
