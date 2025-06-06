"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Container } from "../global/container";

const items = [
  {
    quote:
      "This AI-powered summarizer saved me hours of reading! I can now extract key insights from lengthy PDFs in seconds.",
    name: "Aarav Mehta",
    title: "Data Analyst",
  },
  {
    quote:
      "I love how intuitive and fast the summarization process is. The summaries are concise and accurate, making research much easier.",
    name: "Priya Sharma",
    title: "University Professor",
  },
  {
    quote:
      "As a lawyer, I deal with complex legal documents daily. This tool has made reviewing case files effortless and efficient!",
    name: "Rohan Kapoor",
    title: "Corporate Lawyer",
  },
  {
    quote:
      "The AI does an amazing job of summarizing technical papers! It helps me stay updated with research without spending hours reading.",
    name: "Neha Verma",
    title: "PhD Researcher",
  },
  {
    quote:
      "Perfect for summarizing long reports! Now I get key takeaways instantly instead of scanning through pages of data.",
    name: "Vikram Singh",
    title: "Project Manager",
  },
];

export const Testimonials = ({
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
      getSpeed();
      setStart(true);
    }
  }

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <Container>
      <div className="w-full px-4 md:px-16 lg:px-32 py-24">
        <h2 className="text-center  mb-6 text-3xl font-bold leading-tight text-black sm:text-4xl">
          What Users Say
        </h2>
        <div
          ref={containerRef}
          className={cn(
            "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
            className
          )}
        >
          <ul
            ref={scrollerRef}
            className={cn(
              "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4",
              start && "animate-scroll",
              pauseOnHover && "hover:[animation-play-state:paused]"
            )}
          >
            {items.map((item) => (
              <li
                className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
                key={item.name}
              >
                <blockquote>
                  <span className="relative z-20 text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100">
                    {item.quote}
                  </span>
                  <div className="relative z-20 mt-6 flex flex-row items-center">
                    <span className="flex flex-col gap-1">
                      <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                        {item.name}
                      </span>
                      <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                        {item.title}
                      </span>
                    </span>
                  </div>
                </blockquote>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};
