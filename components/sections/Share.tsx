import React from "react";
import ShareIcon from "../icons/ShareIcon";
import { usePathname } from "next/navigation";

const Share = ({ name }: { name: string }) => {
    const route = usePathname();
    console.log(route);
    
  const shareUrl = window.location.href;
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${name}'s Resume`,
          text: `Check out ${name}'s resume!`,
          url: shareUrl,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      navigator.clipboard
        .writeText(shareUrl)
        .then(() => {
          alert("Link copied to clipboard!");
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    }
  };

  return (
    <button onClick={handleShare} title="Share resume" className="relative group cursor-pointer rounded-full p-px">
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
      </span>
      <div className="relative flex items-center justify-center z-10 rounded-full bg-zinc-950 py-2 px-4 ring-1 ring-white/10">
        <ShareIcon />
      </div>
      <span className="absolute -bottom-0 left-[0.75rem] h-px w-[calc(100%-1.5rem)] bg-gradient-to-r from-blue-400/0 via-emerald-400/90 to-blue-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
    </button>
  );
};

export default Share;