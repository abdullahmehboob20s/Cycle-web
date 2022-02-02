import Rebels from "layouts/HomePage/Rebels/Rebels";
import Hero from "layouts/HomePage/Hero/Hero";
import React from "react";
import videImg from "assets/images/videoImg.png";
import styles from "./HomePage.module.css";
import About from "layouts/HomePage/About/About";
import Featured from "layouts/HomePage/Featured/Featured";
import Milestones from "layouts/HomePage/Milestones/Milestones";
import Roadmap from "layouts/HomePage/Roadmap/Roadmap";
import JoinDiscordBar from "layouts/JoinDiscordBar/JoinDiscordBar";
import Crew from "layouts/HomePage/Crew/Crew";
import FAQ from "layouts/HomePage/FAQ/FAQ";
import Footer from "layouts/Footer/Footer";
import Menu from "layouts/Menu/Menu";
import video from "assets/videos/video.mp4";

function HomePage() {
  return (
    <div>
      <Menu />
      <div>
        <Hero />
      </div>
      <div id="rebels">
        <Rebels />
      </div>
      <div className={`${styles.videContainer} mb-100px`}>
        <video src={video} className={styles.video} controls></video>
      </div>
      <div className="mb-100px" id="about">
        <About />
      </div>
      <div className="mb-100px">
        <Featured />
      </div>
      <div className="mb-100px">
        <Milestones />
      </div>
      <div className="mb-100px">
        <JoinDiscordBar />
      </div>
      <div className="mb-100px" id="roadmap">
        <Roadmap />
      </div>
      <div className="mb-150px" id="crew">
        <Crew />
      </div>
      <div className="mb-100px" id="faq">
        <FAQ />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
