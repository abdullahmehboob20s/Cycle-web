import React from "react";
import styles from "./ConnectWalletCard.module.css";

function ConnectWalletCard({ title, img }) {
  return (
    <div className={styles.card}>
      <img src={img} className="mb-30px" alt="" />
      <h1 className="font-anybody-black fs-32px white text-center uppercase mb-50px">
        {title}
      </h1>
      <button className="uppercase font-anybody-semibold text-body fs-30px pointer">
        Connect
      </button>
    </div>
  );
}

export default ConnectWalletCard;
