import React, { useContext } from "react";
import styles from "./Hero.module.css";
import heroImg from "assets/images/hero-img.png";
import hamburger from "assets/images/hamburger.png";
import AppContext from "context/AppContext";

function Hero() {
  const { isMenuOpen, setIsMenuOpen } = useContext(AppContext);

  return (
    <div className={styles.hero}>
      <img
        src={hamburger}
        onClick={() => setIsMenuOpen(true)}
        className={styles.hamburger}
        alt=""
      />
      <div className="container-wrapper">
        <div className={styles.heroTitles}>
          <h1 className="fs-172px text-center font-anybody-black yellow mb-35px">
            RICH CYCLE
          </h1>
        </div>
      </div>
      <img src={heroImg} className={`${styles.heroImg} w-full`} alt="" />
    </div>
  );
}

export default Hero;
