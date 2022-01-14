import CrossIconButton from "components/Buttons/CrossIconButton/CrossIconButton";
import React, { useEffect, useRef, useState } from "react";
import styles from "./MintPage.module.css";
import { useNavigate } from "react-router-dom";
import Rights from "components/Rights/Rights";
import plusIcon from "assets/images/plus-icon.png";
import minusIcon from "assets/images/minus-icon.png";
import useMediaQuery from "utils/hooks/useMediaQuery ";

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
      <p
        className={`${styles.timerCountBottomTitle} text-center fs-26px white font-anybody-light uppercase`}
      >
        {title}
      </p>
    </div>
  );
};

function MintPage() {
  const navigate = useNavigate();
  const isBellow = useMediaQuery("(max-width: 500px)");
  const [counter, setCounter] = useState(1);

  const [deadline, setDeadline] = useState("Jan 30, 2022 00:00:00");

  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date(deadline).getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        // stop our timer
        clearInterval(interval.current);
      } else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className={styles.wrapper}>
      <CrossIconButton onClick={() => navigate(-1)} />

      <div className={styles.body}>
        <div className="container-wrapper py-70px">
          <h1
            className={`${styles.timerHeaderTitle} text-center white fs-46px font-anybody-bold mb-50px`}
          >
            JANUARY 21ST 1PM EST
          </h1>

          <div className={`${styles.timer} mb-50px`}>
            <TimerBox count={timerDays} title={"Days"} />
            <TimerBox count={timerHours} title={isBellow ? "Hrs" : "Hours"} />
            <TimerBox
              count={timerMinutes}
              title={isBellow ? "Min" : "Minutes"}
            />
            <TimerBox
              count={timerSeconds}
              title={isBellow ? "Sec" : "Seconds"}
            />
          </div>

          <div className="mb-25px">
            <div
              className={`${styles.mintCount} fs-40px text-center font-anybody-regular white `}
            >
              211 / 777
            </div>
          </div>
          <div className={`${styles.counter} mb-60px`}>
            <button
              className="pointer"
              onClick={() => setCounter(counter <= 1 ? 1 : counter - 1)}
            >
              <img src={minusIcon} alt="" />
            </button>
            <div
              className={`${styles.count} text-body fs-40px white font-anybody-bold`}
            >
              {counter < 10 && counter >= 0 ? "0" : ""}
              {counter}
            </div>
            <button className="pointer" onClick={() => setCounter(counter + 1)}>
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
