import React from "react";
import Github from "../icons/Github";
import Instagram from "../icons/Instagram";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-screen bg-black z-[9999] flex justify-between p-4 h-12 items-center">
      <Link href="/" className="font-black">N</Link>
      <div className="flex space-x-2">
        <Link target="_blank" href="https://github.com/luciferlocas/nomen">
          <Github />
        </Link>
        <Link target="_blank" href="https://instagram.com/brl_akgec">
          <Instagram />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
