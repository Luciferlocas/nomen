import { BackgroundBeams } from "@/components/ui/background-beams";
import { InfiniteMovingCards } from "@/components/ui/infinite-cards";
import React from "react";
import { info } from "../_content/CardInfo";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import Link from "next/link";
import SpecialButton from "@/components/ui/special-button";
import BackArrow from "@/components/icons/BackArrow";

const page = () => {
  const halfLength = Math.ceil(info.length / 2);
  const firstHalf = info.slice(0, halfLength);
  const secondHalf = info.slice(halfLength);
  return (
    <div>
        <Link href="/" className="fixed left-4 top-4 z-[9999] ">
          <SpecialButton className="p-[6px]" classButton="mt-0" icon={<BackArrow/>}/>
        </Link>
      <div className="min-h-screen rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards data={firstHalf} direction="right" speed="fast" />
        <InfiniteMovingCards data={secondHalf} direction="left" speed="fast" />

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
