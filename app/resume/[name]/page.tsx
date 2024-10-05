import { info } from "@/app/_content/CardInfo";
import Profile from "@/components/sections/Profile";
import Resume from "@/components/sections/Resume";
import React from "react";

const page = ({ params }: { params: { name: string } }) => {
  const user = info.find((item) => item.slug === params.name);

  if (!user) return;

  return (
    <div className="w-screen flex items-start justify-center">
      <Profile data={user} />
      <div className="w-2/3 flex justify-center py-8">
        <Resume user={params.name} />
      </div>
    </div>
  );
};

export default page;
