import Title from "components/Title/Title";
import React from "react";
import styles from "./Crew.module.css";

import crew1 from "assets/images/crew-1.png";
import crew2 from "assets/images/crew-2.png";
import crew3 from "assets/images/crew-3.png";
import crew4 from "assets/images/crew-4.png";
import crew5 from "assets/images/crew-5.png";
import FeaturedCard from "components/Cards/FeaturedCard/FeaturedCard";
import useMediaQuery from "utils/hooks/useMediaQuery ";

import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Crew() {
  const isBellow = useMediaQuery("(max-width: 1000px)");
  const isBellow500px = useMediaQuery("(max-width: 500px)");

  return (
    <div className="container-wrapper">
      <div className="mb-50px">
        <Title title="CREW" />
      </div>

      <div className={styles.crews}>
        <div className={`${styles.featuredCrews} mb-50px`}>
          <FeaturedCard
            socialIcons={[
              { icon: <FaTwitter size={isBellow500px ? 16 : 30} />, link: "" },
              {
                icon: <FaInstagram size={isBellow500px ? 16 : 30} />,
                link: "",
              },
              { icon: <FaLinkedin size={isBellow500px ? 16 : 30} />, link: "" },
            ]}
            img={crew1}
            title="TAREK"
            subtitle="CO-FOUNDER"
          />
          <FeaturedCard
            socialIcons={[
              { icon: <FaTwitter size={isBellow500px ? 16 : 30} />, link: "" },
              {
                icon: <FaInstagram size={isBellow500px ? 16 : 30} />,
                link: "",
              },
              { icon: <FaLinkedin size={isBellow500px ? 16 : 30} />, link: "" },
            ]}
            img={crew2}
            title="MG"
            subtitle="CO-FOUNDER"
          />
        </div>

        <div className={styles.CrewsCards}>
          <FeaturedCard
            socialIcons={[
              { icon: <FaTwitter size={isBellow500px ? 16 : 30} />, link: "" },
              {
                icon: <FaInstagram size={isBellow500px ? 16 : 30} />,
                link: "",
              },
              { icon: <FaLinkedin size={isBellow500px ? 16 : 30} />, link: "" },
            ]}
            img={crew3}
            title="ALEX"
            subtitle="MOD"
            titleFontSize="fs-34px"
          />
          <FeaturedCard
            socialIcons={[
              { icon: <FaTwitter size={isBellow500px ? 16 : 30} />, link: "" },
              {
                icon: <FaInstagram size={isBellow500px ? 16 : 30} />,
                link: "",
              },
              { icon: <FaLinkedin size={isBellow500px ? 16 : 30} />, link: "" },
            ]}
            img={crew4}
            title={isBellow ? "NTRM" : "NOTORIOM"}
            subtitle="UXKNOWN"
            titleFontSize="fs-34px"
          />
          <FeaturedCard
            socialIcons={[
              { icon: <FaTwitter size={isBellow500px ? 16 : 30} />, link: "" },
              {
                icon: <FaInstagram size={isBellow500px ? 16 : 30} />,
                link: "",
              },
              { icon: <FaLinkedin size={isBellow500px ? 16 : 30} />, link: "" },
            ]}
            img={crew5}
            title="MACH"
            subtitle="ROBOT"
            titleFontSize="fs-34px"
          />
        </div>
      </div>
    </div>
  );
}

export default Crew;
