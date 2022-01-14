import React from "react";
import styles from "./JoinDiscordBar.module.css";
import logoBlack from "assets/images/logo-black.png";
import discordIcon from "assets/images/discord-icon.png";

function JoinDiscordBar() {
  return (
    <div className={styles.wrapper}>
      <div className="container-wrapper py-70px">
        <div className={styles.content}>
          <div>
            <img src={logoBlack} className={styles.logo} alt="" />
          </div>
          <div className={styles.contentCenter}>
            <h1 className="fs-68px text-body font-anybody-black lh-1 text-center mb-30px">
              JOIN OUR <br /> DISCORD
            </h1>
            <button className="fs-44px white font-anybody-bold uppercase pointer lh-1">
              JOIN
            </button>
          </div>
          <div>
            <img src={discordIcon} className={styles.discord} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinDiscordBar;
