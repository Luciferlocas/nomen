import React from "react";

const SpecialButton = () => {
  return (
    <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-sm font-semibold leading-6 text-white inline-block mt-6">
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
      </span>
      <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-1 px-6 ring-1 ring-white/10 ">
        <span className="p-1 text-sm">Explore</span>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-blue-400/0 via-emerald-400/90 to-blue-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
    </button>
  );
};

export default SpecialButton;
