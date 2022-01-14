import Accordion from "components/Accordion/Accordion";
import Title from "components/Title/Title";
import React from "react";
import styles from "./FAQ.module.css";

function FAQ() {
  return (
    <div className="container-wrapper">
      <div className="mb-50px">
        <Title title="FAQS" />
      </div>

      <div className={styles.accordions}>
        <Accordion
          question="I'VE NEVER PURCHASED AN NFT BEFORE, TELL ME WHERE TO START?"
          answer="The first thing you should do is download MetaMask, a browser plugin that will act as your interface to the Ethereum Network. You'll also want some ETH, which can be purchased via a fiat on-ramp such as Coinbase or PayPal. From there, you'll send the ETH to your MetaMask address and will be able to use any DeFi service that connects to MetaMask!"
        />
        <Accordion
          question="HOW MANY REBELS WILL THERE BE?"
          answer="The first thing you should do is download MetaMask, a browser plugin that will act as your interface to the Ethereum Network. You'll also want some ETH, which can be purchased via a fiat on-ramp such as Coinbase or PayPal. From there, you'll send the ETH to your MetaMask address and will be able to use any DeFi service that connects to MetaMask!"
        />
        <Accordion
          question="WHAT DO I GET ?"
          answer="The first thing you should do is download MetaMask, a browser plugin that will act as your interface to the Ethereum Network. You'll also want some ETH, which can be purchased via a fiat on-ramp such as Coinbase or PayPal. From there, you'll send the ETH to your MetaMask address and will be able to use any DeFi service that connects to MetaMask!"
        />
        <Accordion
          question="What’s  an NFT?"
          answer="The first thing you should do is download MetaMask, a browser plugin that will act as your interface to the Ethereum Network. You'll also want some ETH, which can be purchased via a fiat on-ramp such as Coinbase or PayPal. From there, you'll send the ETH to your MetaMask address and will be able to use any DeFi service that connects to MetaMask!"
        />
      </div>
    </div>
  );
}

export default FAQ;
