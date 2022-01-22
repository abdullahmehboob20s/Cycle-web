import RoadmapCard from "components/Cards/RoadmapCard/RoadmapCard";
import Title from "components/Title/Title";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Roadmap.module.css";

function Roadmap() {
  const roadmap = useRef();
  const roadmapLine = useRef();
  const [value, setValue] = useState(null);
  const lastRef = useRef(null);

  useEffect(() => {
    const handler = () => {
      let a = window.scrollY - roadmap.current.offsetTop;
      let value = a + window.innerHeight / 2;

      // roadmapLine.current.style.height = value + "px";
      setValue(value);
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  });

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
        <div className={styles.roadmap} ref={roadmap}>
          <div
            className={styles.roadmapLine}
            style={{
              height: `calc(100% - ${lastRef?.current?.scrollHeight || 0}px)`,
            }}
          >
            <div
              className={styles.roadmapLineInner}
              style={{ height: value + "px" }}
              ref={roadmapLine}
            ></div>
          </div>
          <RoadmapCard
            roadmapLine={roadmapLine}
            value={value}
            phase="1"
            title="Staking"
            isActive={true}
            points={[
              "Staking pool will be created.  Users will be able to stake their NFTs and get rewarded with our ERC 20 Token (EKS)",
              "EKS stands for Experience, Knowledge and Skills",
            ]}
          />
          <RoadmapCard
            roadmapLine={roadmapLine}
            value={value}
            phase="2"
            isActive={false}
            title="New drops to start our 3D Collection Drop"
            points={["3D Avatars", "Mind blowing special 3D collection"]}
            show={true}
          />
          <RoadmapCard
            roadmapLine={roadmapLine}
            value={value}
            phase="3"
            isActive={false}
            title="Launch pre-orders on EKS collection clothing line"
            points={["Clothing collabs", "Rich Cycle Couture"]}
          />
          <RoadmapCard
            roadmapLine={roadmapLine}
            value={value}
            phase="4"
            isActive={false}
            title="Short Animation video Launch for the avatas created"
            points={[]}
          />
          <RoadmapCard
            roadmapLine={roadmapLine}
            value={value}
            phase="5"
            isActive={false}
            title="Create Rich Cycle NFT & Fashion academy"
            points={[
              "This will be the first NFT Academy worldwide; DON'T MISS IT",
            ]}
          />

          <RoadmapCard
            roadmapLine={roadmapLine}
            value={value}
            phase="6"
            isActive={false}
            title="Create a MMORPG ( Massive Multi Online Role Player Game) game with all avatars combined"
            lastRef={lastRef}
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
