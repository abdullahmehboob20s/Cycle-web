import CrossIconButton from "components/Buttons/CrossIconButton/CrossIconButton";
import React from "react";
import styles from "./MintPage.module.css";
import { useNavigate } from "react-router-dom";
import Rights from "components/Rights/Rights";
import plusIcon from "assets/images/plus-icon.png";
import minusIcon from "assets/images/minus-icon.png";

const TimerBox = ({ count, title }) => {
  return (
    <div className={styles.timerBox}>
      <div className={`${styles.timerCountWrapper} mb-15px`}>
        <div
          className={`${styles.timerCount} fs-50px white font-anybody-black `}
        >
          {count}
        </div>
      </div>
      <p className="text-center fs-26px white font-anybody-light uppercase">
        {title}
      </p>
    </div>
  );
};

function MintPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <CrossIconButton onClick={() => navigate(-1)} />

      <div className={styles.body}>
        <div className="container-wrapper py-70px">
          <h1 className="text-center white fs-46px font-anybody-bold mb-50px">
            JANUARY 21ST 1PM EST
          </h1>

          <div className={`${styles.timer} mb-50px`}>
            <TimerBox count="11" title={"Days"} />
            <TimerBox count="23" title={"Hours"} />
            <TimerBox count="02" title={"Minutes"} />
            <TimerBox count="39" title={"Seconds"} />
          </div>

          <div className="mb-25px">
            <div
              className={`${styles.mintCount} fs-40px text-center font-anybody-regular white `}
            >
              211 / 777
            </div>
          </div>
          <div className={`${styles.counter} mb-60px`}>
            <button className="pointer">
              <img src={minusIcon} alt="" />
            </button>
            <div
              className={`${styles.count} text-body fs-40px white font-anybody-bold`}
            >
              01
            </div>
            <button className="pointer">
              <img src={plusIcon} alt="" />
            </button>
          </div>
          <div className={styles.pageButtons}>
            <button
              className={`${styles.mintButton} fs-46px block pointer font-anybody-black uppercase mb-20px`}
            >
              MINT
            </button>
            <button
              className={`${styles.mintButton} ${styles.reverse} fs-46px block pointer font-anybody-black uppercase mb-20px`}
            >
              CONNECT
            </button>
          </div>
        </div>
      </div>

      <Rights />
    </div>
  );
}

export default MintPage;
