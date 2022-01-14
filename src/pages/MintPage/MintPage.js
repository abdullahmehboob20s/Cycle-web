import CrossIconButton from "components/Buttons/CrossIconButton/CrossIconButton";
import React from "react";
import styles from "./MintPage.module.css";
import { useNavigate } from "react-router-dom";
import Rights from "components/Rights/Rights";

function MintPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <CrossIconButton onClick={() => navigate(-1)} />

      <div className={styles.body}>
        <div className="container-wrapper py-70px">
          <h1 className="text-center white fs-46px font-anybody-bold">
            JANUARY 21ST 1PM EST
          </h1>
        </div>
      </div>

      <Rights />
    </div>
  );
}

export default MintPage;
