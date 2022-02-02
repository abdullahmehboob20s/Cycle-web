import React, { useContext, useEffect } from "react";
import styles from "./Menu.module.css";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import AppContext from "context/AppContext";
import CrossIconButton from "components/Buttons/CrossIconButton/CrossIconButton";
import Rights from "components/Rights/Rights";

function Menu() {
  const { isMenuOpen, setIsMenuOpen } = useContext(AppContext);

  return (
    <div className={`${styles.menuWrapper} ${isMenuOpen ? styles.open : ""}`}>
      <CrossIconButton onClick={() => setIsMenuOpen(false)} variant="black" />

      <div className={`${styles.menu} `}>
        <div className={styles.menuTop}>
          <div className={styles.menuContent}>
            <ScrollLink
              to="about"
              offset={-100}
              className="fs-74px text-body font-anybody-black pointer mb-20px block w-fit-content"
              onClick={() => setIsMenuOpen(false)}
            >
              STORY
            </ScrollLink>
            <ScrollLink
              to="rebels"
              onClick={() => setIsMenuOpen(false)}
              className="fs-74px text-body font-anybody-black pointer mb-20px block w-fit-content"
            >
              FEATURED REBELS
            </ScrollLink>
            <ScrollLink
              to="roadmap"
              onClick={() => setIsMenuOpen(false)}
              className="fs-74px text-body font-anybody-black pointer mb-20px block w-fit-content"
            >
              ROADMAP
            </ScrollLink>
            <ScrollLink
              to="crew"
              onClick={() => setIsMenuOpen(false)}
              className="fs-74px text-body font-anybody-black pointer mb-20px block w-fit-content"
            >
              CREW
            </ScrollLink>
            <ScrollLink
              to="faq"
              onClick={() => setIsMenuOpen(false)}
              className="fs-74px text-body font-anybody-black pointer mb-30px block w-fit-content"
            >
              FAQS
            </ScrollLink>
          </div>
          <Link
            to="/"
            className={`${styles.connectWallet} not-allowed text-center block w-full fs-80px font-anybody-black white uppercase mb-40px`}
          >
            CONNECT WALLET
          </Link>
        </div>

        <div className={`container-wrapper`}>
          <div className={styles.socialLink}>
            <a
              href="#"
              className="fs-50px font-anybody-medium text-body uppercase"
            >
              OPENSEA
            </a>
            <a
              href="#"
              className="fs-50px font-anybody-medium text-body uppercase"
            >
              TWITTER
            </a>
            <a
              href="#"
              className="fs-50px font-anybody-medium text-body uppercase"
            >
              DISCORD
            </a>
          </div>
        </div>
      </div>
      <Rights
        style={{ background: "#1a1b1c", color: "white", padding: ".8rem 0" }}
        linkStyle={{ color: "white", right: "40px" }}
        textStyle={{ color: "white" }}
      />
    </div>
  );
}

export default Menu;
