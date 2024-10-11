import { info } from "@/app/_content/CardInfo";
import BackArrow from "@/components/icons/BackArrow";
import Profile from "@/components/sections/Profile";
import Resume from "@/components/sections/Resume";
import SpecialButton from "@/components/ui/special-button";
import Link from "next/link";
import React from "react";

const page = ({ params }: { params: { name: string } }) => {
  const user = info.find((item) => item.slug === params.name);

  if (!user) return;

  return (
    <>
      <Link href="/resume" className="fixed left-4 top-4 z-[9999] ">
        <SpecialButton className="p-[6px]" classButton="mt-0" icon={<BackArrow/>}/>
      </Link>
      <div className="w-screen sm:flex items-start justify-center">
        <Profile data={user} />
        <div className="w-[98vw]  md:w-2/3 flex justify-center py-8">
          <Resume user={params.name} />
        </div>
      </div>
    </>
  );
};

export default page;
