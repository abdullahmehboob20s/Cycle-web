import React from "react";
import styles from "./Accordion.module.css";

function Accordion({ question, answer }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const accordionBody = React.useRef(null);

  const handler = () => {
    if (accordionBody.current.clientHeight === 0) {
      accordionBody.current.style.height =
        accordionBody.current.scrollHeight + "px";
      setIsOpen(true);
    } else {
      accordionBody.current.style.height = 0;
      setIsOpen(false);
    }
  };

  return (
    <div className={styles.accordionWrapper}>
      <div
        onClick={handler}
        className={`${styles.accordionBtn} ${isOpen ? styles.open : ""}`}
      >
        <p className="fs-26px white uppercsae font-anybody-bold">{question}</p>

        <div className={styles.btnIcon}></div>
      </div>

      <div className={`${styles.accoridonBody} `} ref={accordionBody}>
        <div className={styles.accordionContent}>
          <p className="fs-30px font-anybody-light lh-1_5 white">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
