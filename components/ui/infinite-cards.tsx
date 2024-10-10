"use client";

import { cn } from "@/lib/utils";
import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Info } from "@/lib/types";

export const InfiniteMovingCards = ({
  data,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
}: {
  data: Info[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  const getDirection = useCallback(() => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  }, [speed]);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed]);
  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  const url =
    "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRhcmt8ZW58MHx8MHx8fDA%3D";

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-[800] w-11/12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {data.map((item, i) => (
          <li key={i} className="max-w-xs w-full group/card max-h-32">
            <Link href={`/resume/${item.slug}`}>
              <div
                className={cn(
                  "cursor-pointer overflow-hidden relative card min-h-36 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4"
                )}
                style={{
                  backgroundImage: `url(${item.background || url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-40"></div>
                <div className="flex justify-between">
                  <div className="flex flex-row items-center space-x-4 z-10">
                    <Image
                      height="100"
                      width="100"
                      alt="Avatar"
                      src={item.avatar || "/avatar.png"}
                      className="h-10 w-10 rounded-full border-2 object-cover"
                    />
                    <div className="flex flex-col">
                      <p className="font-normal text-base text-gray-50 relative z-10">
                        {item.name}
                      </p>
                      <p className="text-sm capitalize">{item.domain}</p>
                    </div>
                  </div>
                </div>
                <p className="font-normal text-sm text-gray-50 relative mt-4 truncate">
                  {item.description}
                </p>
                <span className="absolute left-0 bottom-0 group-hover/card:bottom-auto group-hover/card:top-0 w-px h-[calc(100%-2.25rem)] bg-gradient-to-b from-transparent via-blue-400/90 to-transparent transition-all duration-1000"></span>
                <span className="absolute right-0 top-0 group-hover/card:top-auto group-hover/card:bottom-0 w-px h-[calc(100%-2.25rem)] bg-gradient-to-b from-transparent via-blue-400/90 to-transparent transition-all duration-1000"></span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
