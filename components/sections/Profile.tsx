import Image from "next/image";
import React from "react";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { Info } from "@/lib/types";

const Profile = ({ data }: { data: Info }) => {
  return (
    <BackgroundBeamsWithCollision className="w-1/3 flex flex-col gap-4 items-start px-8 relative min-h-screen">
      <div className="flex gap-2 items-end">
        <Image
          height="100"
          width="100"
          alt="Avatar"
          src={data.avatar || "/avatar.png"}
          className="h-24 w-24 rounded-full border-2 object-cover"
        />
        <div className="flex flex-col items-start">
          <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent md:text-4xl">
            {data.name}
          </h1>
          <p className="text-white/40 tracking-wider">
            {data.domain} developer at Ghaziabad
          </p>
        </div>
      </div>

      <div className="w-full mx-auto bg-gray-800/50 rounded-xl min-h-12 text-white/60 p-4 relative">
        <span className="absolute -top-3 left-[2.5rem] w-0 h-0 border-l-[8px] border-l-transparent border-b-[12px] border-b-gray-800/50 border-r-[8px] border-r-transparent"></span>
        {data.quote}
      </div>
      <div className="flex flex-col gap-2 items-start">
        <h1 className="font-semibold">About</h1>
        <p className="text-white/40">
         {data.about}
        </p>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default Profile;
