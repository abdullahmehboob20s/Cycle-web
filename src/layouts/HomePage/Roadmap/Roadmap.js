import RoadmapCard from "components/Cards/RoadmapCard/RoadmapCard";
import Title from "components/Title/Title";
import React from "react";
import styles from "./Roadmap.module.css";

function Roadmap() {
  return (
    <>
      <div className="container-wrapper">
        <div className="mb-30px">
          <Title title="ROADMAP" />
        </div>

        <p className="fs-24px lh-1_4 mb-30px font-anybody-medium uppercase white text-center">
          RICH CYCLE REBELS NFT was created to be the highest rewarding NFT
          collection for the community. With continued giveaways, games,
          announcements and more…
        </p>
        <p className="fs-24px lh-1_4 font-anybody-medium uppercase white text-center mb-100px">
          RICH CYCLE REBELS is an NFT for the people. Here are our Phases:
        </p>
      </div>
      <div className="container-wrapper">
        <div className={styles.roadmap}>
          <RoadmapCard
            phase="1"
            title="Staking"
            isActive={true}
            points={[
              "Staking pool will be created.  Users will be able to stake their NFTs and get rewarded with our ERC 20 Token (EKS)",
              "EKS stands for Experience, Knowledge and Skills",
            ]}
          />
          <RoadmapCard
            phase="2"
            isActive={false}
            title="New drops to start our 3D Collection Drop"
            points={["3D Avatars", "Mind blowing special 3D collection"]}
          />
          <RoadmapCard
            phase="3"
            isActive={false}
            title="Launch pre-orders on EKS collection clothing line"
            points={["Clothing collabs", "Rich Cycle Couture"]}
          />
          <RoadmapCard
            phase="4"
            isActive={false}
            title="Short Animation video Launch for the avatas created"
            points={[]}
          />
          <RoadmapCard
            phase="5"
            isActive={false}
            title="Create Rich Cycle NFT & Fashion academy"
            points={[
              "This will be the first NFT Academy worldwide; DON'T MISS IT",
            ]}
          />
          <RoadmapCard
            phase="6"
            isActive={false}
            title="Create a MMORPG ( Massive Multi Online Role Player Game) game with all avatars combined"
            points={[
              "This will be the first NFT Academy worldwide; DON'T MISS IT",
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default Roadmap;
