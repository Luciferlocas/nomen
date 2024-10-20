import React from "react";
import Github from "../icons/Github";
import Instagram from "../icons/Instagram";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-screen bg-black z-[9999] flex justify-between p-4 h-12 items-center">
      <div className="relative group">
        <Link href="/" className="font-black">
          N
          <div className="absolute bottom-full mb-2 w-24 bg-black text-white text-xs p-1 rounded invisible group-hover:visible transition-opacity left-0 transform -translate-x-2">
            Home
          </div>
        </Link>
      </div>
      <div className="flex space-x-2">
        <div className="relative group">
          <Link target="_blank" href="https://github.com/luciferlocas/nomen">
            <Github />
          </Link>
          <div className="absolute bottom-full mb-2 w-24 bg-black text-white text-xs p-1 rounded invisible group-hover:visible transition-opacity left-0 transform -translate-x-2">
            GitHub
          </div>
        </div>
        <div className="relative group">
          <Link target="_blank" href="https://instagram.com/brl_akgec">
            <Instagram />
          </Link>
          <div className="absolute bottom-full mb-2 w-24 bg-black text-white text-xs p-1 rounded invisible group-hover:visible transition-opacity right-0 transform translate-x-2">
            Instagram
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
