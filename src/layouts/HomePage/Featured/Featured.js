import FeaturedCard from "components/Cards/FeaturedCard/FeaturedCard";
import Title from "components/Title/Title";
import React from "react";
import styles from "./Featured.module.css";
import featuredImg1 from "assets/images/featured-img-1.png";
import featuredImg2 from "assets/images/featured-img-2.png";
import featuredImg3 from "assets/images/featured-img-3.png";
import featuredImg4 from "assets/images/featured-img-4.png";
import featuredImg5 from "assets/images/featured-img-5.png";
import featuredImg6 from "assets/images/featured-img-6.png";

function Featured() {
  return (
    <div className="container-wrapper">
      <div className="mb-55px">
        <Title title="FEATURED" />
      </div>

      <div className={styles.cards}>
        <FeaturedCard img={featuredImg1} />
        <FeaturedCard img={featuredImg2} />
        <FeaturedCard img={featuredImg3} />
        <FeaturedCard img={featuredImg4} />
        <FeaturedCard img={featuredImg5} />
        <FeaturedCard img={featuredImg6} />
      </div>
    </div>
  );
}

export default Featured;
