import { BackgroundLines } from "@/components/ui/background-lines";
import SpecialButton from "@/components/ui/special-button";
import Link from "next/link";

export default function Home() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col">
      <h2 className="text-3xl md:text-5xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight text-center text-gray-300">
        Welcome to <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#323238] via-gray-500 to-[#323238]">
          NomeN
        </span>
      </h2>
      <p className="max-w-4xl mx-auto text-sm md:text-lg lg:text-xl text-neutral-400 text-center mt-4 lg:mt-6 leading-relaxed">
        {
          "It doesn't merely build your resume, but rather crafts a legendary professional legacy that transforms your career into a mesmerizing narrative that demands to be read and remembered."
        }
      </p>
      <Link href="/resume">
        <SpecialButton />
      </Link>
    </BackgroundLines>
  );
}
