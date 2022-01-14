import MilestoneCard from "components/Cards/MilestoneCard/MilestoneCard";
import Title from "components/Title/Title";
import React from "react";
import styles from "./Milestones.module.css";

function Milestones() {
  return (
    <>
      <div className="mb-70px">
        <div className="container-wrapper">
          <div className="mb-30px">
            <Title title="MILESTONES" />
          </div>
          <h1 className="text-center fs-46px white font-anybody-black uppercase">
            SALES AND REWARDS
          </h1>
        </div>
      </div>

      <div className="container-wrapper-2">
        <div className={styles.cards}>
          <MilestoneCard
            title="10%"
            isActive={true}
            text="10 RICH CYCLE REBELS NFTs will be airdropped to our early adopters .Listing on rarity tools ."
          />
          <MilestoneCard
            title="20%"
            isActive={false}
            text="20 RICH CYCLE REBELS NFTs Holders Giveaway $10000 Eth Giveaway for 2 NFT Holders ($10000 in ETH)"
          />
          <MilestoneCard
            title="30%"
            isActive={false}
            text="Donating 1 Meal with each NFT Sold (30% from 7777), Meals will be distributed across the Network of NYC Fridges"
          />
          <MilestoneCard
            title="40%"
            isActive={false}
            text="A winner (1st place) of a rich cycle design contest will be picked by the community to create a rebel NFT collection in collaboration with Rich Cycle"
          />
          <MilestoneCard
            title="60%"
            isActive={false}
            text="$20000 Eth giveaway for the most active 4 users in Discord 
            ($20000 in ETH)"
          />
          <MilestoneCard
            title="80%"
            isActive={false}
            text="10% of all transactions will go back to holders to reward them for holding Rich Cycle"
          />
          <MilestoneCard
            title="100%"
            isActive={false}
            text="After we sell out, every NFT holder will get a Metaverse Wearable airdropped to their Wallet , Donating 7777* Meals to NYC community fridges . After 30 days* of the main launch all holders will receive a special invite to buy the Upcoming 3D collection. This invite will allow you to purchase the 3D collection on mint day for 25% less than the public mint price .
            After 100% sold, roadmap milestone PHASE 1 begins ."
          />
        </div>
      </div>
    </>
  );
}

export default Milestones;
