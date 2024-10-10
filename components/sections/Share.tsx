import React from "react";
import { CiShare2 } from "react-icons/ci";
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
    <button onClick={handleShare} title="Share this resume">
      <CiShare2 size={30} className="hover:text-blue-500" />
    </button>
  );
};

export default Share;
