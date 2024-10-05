import { BackgroundBeams } from "@/components/ui/background-beams";
import { InfiniteMovingCards } from "@/components/ui/infinite-cards";
import React from "react";
import { info } from "../_content/CardInfo";
import { TextRevealCard } from "@/components/ui/text-reveal-card";

const page = () => {
  return (
    <div>
      <div className="min-h-screen rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards data={info} direction="right" speed="fast" />
        <InfiniteMovingCards data={info} direction="left" speed="fast" />

        <TextRevealCard
          className="mt-8"
          text="Why settle for a paper resume when..."
          revealText="you can have a digital magnum opus?"
        ></TextRevealCard>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default page;
