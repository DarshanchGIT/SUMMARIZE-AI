import { Button } from "@/components/ui/button";
import { Sparkle } from "lucide-react";
import Link from "next/link";
import { BorderBeam } from "../ui/border-beam";
import demoImg from "@/assets/demoImg.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-16 sm:py-20 lg:py-24 font-sans">
      <div className="relative max-w-3xl text-center px-6">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-full font-pj bg-white shadow-md">
          <span>Summarize PDFs with ease</span>
          <div className="relative ml-2 group">
            <div className="absolute transition-all duration-1000 opacity-80 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <Sparkle className="relative text-gray-900" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl font-pj">
          Get concise summaries of your PDFs instantly
        </h1>
        <p className="max-w-md mx-auto mt-4 text-lg leading-5 text-gray-600 font-inter">
          Upload your PDFs and receive clear, accurate summaries to save time
          and boost productivity.
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <Link href="/upload">
            <Button className="relative px-7 py-4 text-lg font-bold text-white bg-gray-900 rounded-xl font-pj hover:bg-gray-800 focus:ring-2 focus:ring-gray-900 cursor-pointer">
              Upload your PDF
            </Button>
          </Link>
        </div>
      </div>

      {/* Image + Border Beam */}
      <div className="relative flex items-center justify-center w-full max-w-5xl py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 left-1/2 top-1/2 -z-10 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 blur-[10rem] bg-gradient-to-r from-blue-400 via-pink-400 to-red-400 opacity-40"></div>

        <div className="relative rounded-xl bg-white shadow-xl ring ring-gray-300 p-4 lg:p-6">
          <Image
            src={demoImg}
            alt="Dashboard preview"
            width={1050}
            height={1050}
            quality={100}
            className="rounded-lg shadow-lg ring ring-gray-300"
          />
          <BorderBeam
            size={300}
            duration={10}
            delay={6}
            colorFrom="#ff6a00"
            colorTo="#9c40ff"
            className="opacity-[0.9] z-[10]" // Ensure visibility
          />
        </div>
      </div>
    </section>
  );
};
