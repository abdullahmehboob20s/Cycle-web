import Title from "components/Title/Title";
import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <div className="container-wrapper">
      <div className="text-center">
        <div className="mb-30px">
          <Title title="ABOUT" />
        </div>

        <p className="fs-24px white font-anybody-medium lh-1_4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </div>
  );
}

export default About;
