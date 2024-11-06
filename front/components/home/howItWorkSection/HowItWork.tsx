import React from "react";
import SectionTitle from "@/components/home/SectionTitle";
import HowWorkItem from "@/components/home/howItWorkSection/HowWorkItem";
const howItWorkArray = [
    {
        image: "/assets/images/SetupWalletIcon.png",
        title: "Setup Your wallet",
        description: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
    },
    {
        image: "/assets/images/CreateCollectionIcon.png",
        title: "Create Collection",
        description: "Upload your work and setup your collection. Add a description, social links and floor price.",
    },
    {
        image: "/assets/images/StartEarningIcon.png",
        title: "Start Earning",
        description: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
    }
];
export default function HowItWork() {
  return (
    <div className="min-h-screen container mx-auto p-12">
      <SectionTitle
        title="How it works"
        description="Find out how to get started"
        sectionStyle="withoutBtn"
      />
        <div className="grid w-full grid-cols-1 md:grid-cols-3 justify-items-stretch gap-9 mt-8">
        {howItWorkArray.map((howItWork, index) => (
          <div key={index}>
            <HowWorkItem
              image={howItWork.image}
              title={howItWork.title}
              description={howItWork.description}
            />
          </div>
        ))}
        </div>
    </div>
  );
}
