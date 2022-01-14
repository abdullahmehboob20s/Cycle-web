import React from "react";
import styles from "./CrossIconButton.module.css";
import YellowIcon from "assets/images/cross-yellow.png";
import BlackIcon from "assets/images/close-icon.png";

function CrossIconButton({ onClick, style, variant = "yellow" }) {
  return (
    <img
      style={style}
      src={variant === "black" ? BlackIcon : YellowIcon}
      className={styles.closeIcon}
      onClick={onClick}
      alt=""
    />
  );
}

export default CrossIconButton;
