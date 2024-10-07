"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from 'next/image';


const ease = [0.16, 1, 0.3, 1];

function HeroTitles() {
  return (
    <div className="flex flex-col space-y-4 overflow-hidden">
      <motion.h1
        className="text-left text-4xl font-medium leading-tight text-foreground sm:text-5xl md:text-6xl"
        initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease,
        }}
      >
        Powering <span className="relative">Data-Driven
          <motion.svg
            className="absolute bottom-[-0.5rem] left-0 w-full text-primary"
            width="382"
            height="24"
            viewBox="0 0 382 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ zIndex: -1 }}
          >
            <motion.path
              d="M8 8H285.07L87.5458 16H374"
              stroke="currentColor"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ delay: .5, duration: 2, ease: "easeInOut" }}
            />
          </motion.svg>
        </span> Decisions
      </motion.h1>
      <motion.p
        className="max-w-4xl text-left text-lg leading-7 text-muted-foreground sm:text-xl sm:leading-9 text-balance"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: .5,
          duration: .5,
          ease,
        }}
      >
        — Empowering every decision maker with a holistic measurement capability to drive brand growth, deliver value to our consumers and customers swiftly through actionable insights.
      </motion.p>
    </div>
  );
}

function HeroCTA() {
  return (
    <>
      <motion.div
        className="mt-6 mb-12 flex w-full max-w-2xl flex-col items-left justify-left space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .5, duration: 2, ease }}
      >
        <Link
          href="/signup"
          className={cn(
            buttonVariants({ variant: "default", size: "lg" }),
            "w-full sm:w-auto text-background flex gap-2"
          )}
        >
          View Reports
        </Link>
        <Link
          href="/signup"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "w-full sm:w-auto flex gap-2"
          )}
        >
          New Users Start Here
        </Link>
      </motion.div>
    </>
  );
}

function HeroImage() {
  return (
    <motion.div
      className="relative flex w-full justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: .5, duration: 2, ease }}
    >
      <Image
        src="/hero-img.png"
        alt="Hero image"
        height={750}
        width={1200}
        className="rounded-lg w-full"
        priority
      />
    </motion.div>
  );
}

export default function Hero2() {
  return (
    <section id="hero">
      <div className="relative flex flex-row items-center justify-left px-4 py-32 sm:px-6 sm:pt-24 md:pt-32 lg:px-8 mw-6xl">
        <div className="flex flex-col space-y-8 items-left w-1/2 pr-10">
          <HeroTitles />
          <HeroCTA />
        </div>
        <div className="w-3/5">
          <div className="w-[75vw]">
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
}
