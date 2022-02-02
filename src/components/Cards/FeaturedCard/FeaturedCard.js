import React from "react";
import styles from "./FeaturedCard.module.css";

function FeaturedCard({
  img,
  title,
  subtitle,
  titleFontSize = "fs-88px",
  socialIcons,
}) {
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
        <>
          <h4 className="fs-38px white font-anybody-light text-center">
            {subtitle}
          </h4>
        </>
      )}

      {socialIcons ? (
        <div className={styles.socialIcons}>
          {socialIcons.map((data, index) => (
            <a href={data.link} key={index} className="white pointer">
              {data.icon}
            </a>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default FeaturedCard;
