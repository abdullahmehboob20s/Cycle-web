import ConnectWalletCard from "components/Cards/ConnectWalletCard/ConnectWalletCard";
import Rights from "components/Rights/Rights";
import React, { useContext } from "react";
import styles from "./ConnectWalletPage.module.css";

import coinbaseImg from "assets/images/coinbase.png";
import metamaskImg from "assets/images/metamask.png";
import trustImg from "assets/images/trust.png";

import { useNavigate } from "react-router-dom";
import CrossIconButton from "components/Buttons/CrossIconButton/CrossIconButton";

function ConnectWalletPage() {
  const navigate = useNavigate();
  return (
    <div className={styles.connectWallet}>
      <CrossIconButton onClick={() => navigate(-1)} />

      <div className={`${styles.connectWalletBody} py-100px`}>
        <div className="container-wrapper">
          <div className="mb-70px">
            <h1 className="fs-74px white text-center font-anybody-black mb-30px">
              CONNECT
            </h1>
            <h1 className="fs-34px white text-center font-anybody-mediu,">
              CONNECT YOUR PREFERED WALLET
            </h1>
          </div>

          <div className={styles.cards}>
            <ConnectWalletCard title="coinbase" img={coinbaseImg} />
            <ConnectWalletCard title="metamask" img={metamaskImg} />
            <ConnectWalletCard title="trust" img={trustImg} />
          </div>
        </div>
      </div>
      <Rights />
    </div>
  );
}

export default ConnectWalletPage;
