import React from "react";
import styles from "./FeaturedCard.module.css";

function FeaturedCard({ img, title, subtitle, titleFontSize = "fs-88px" }) {
  return (
    <div>
      <div className={`${styles.card} ${title && "mb-30px"}`}>
        <img src={img} className={`${styles.featuredCardImg} w-full`} alt="" />
      </div>

      {title && (
        <h1
          className={`${titleFontSize} white font-anybody bold text-center ${
            subtitle && "mb-10px"
          }`}
        >
          {title}
        </h1>
      )}
      {subtitle && (
        <h4 className="fs-38px white font-anybody-light text-center">
          {subtitle}
        </h4>
      )}
    </div>
  );
}

export default FeaturedCard;
