import { BackgroundLines } from "@/components/ui/background-lines";
import SpecialButton from "@/components/ui/special-button";
import Link from "next/link";

export default function Home() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col">
      <h2 className="text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight text-neutral-500 text-center">
        Welcome to <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-600 to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          NomeN
        </span>
      </h2>
      <p className="max-w-5xl mx-auto text-sm md:text-lg text-neutral-400 text-center">
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
