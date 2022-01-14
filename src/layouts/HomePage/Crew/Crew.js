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

function Crew() {
  const isBellow = useMediaQuery("(max-width: 1000px)");

  return (
    <div className="container-wrapper">
      <div className="mb-50px">
        <Title title="CREW" />
      </div>

      <div className={`${styles.featuredCrews} mb-100px`}>
        <FeaturedCard img={crew1} title="TAREK" subtitle="CO-FOUNDER" />
        <FeaturedCard img={crew2} title="MG" subtitle="CO-FOUNDER" />
      </div>

      <div className={styles.CrewsCards}>
        <FeaturedCard
          img={crew3}
          title="ALEX"
          subtitle="MOD"
          titleFontSize="fs-60px"
        />
        <FeaturedCard
          img={crew4}
          title={isBellow ? "NTRM" : "NOTORIOM"}
          subtitle="UXKNOWN"
          titleFontSize="fs-60px"
        />
        <FeaturedCard
          img={crew5}
          title="MACH"
          subtitle="ROBOT"
          titleFontSize="fs-60px"
        />
      </div>
    </div>
  );
}

export default Crew;
