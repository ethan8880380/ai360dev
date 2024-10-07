"use client";

import { motion } from "framer-motion";
import { Icons } from "@/components/icons";
import HeroVideoDialog from "@/components/magicui/hero-video";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from 'next/image';
import heroImg from '@/public/hero-img.jpg';

const ease = [0.16, 1, 0.3, 1];

function HeroTitles() {
  return (
    <div className="flex flex-col space-y-4 overflow-hidden">
      <p className="font-semibold text-6xl">Join the HMP Community of Practice</p>
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
        — Our Community of Practice aims to connect professionals passionate about measurement, analytics, and data-driven decision-making.

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
          Join the Community
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

export default function community() {
  return (
    <section id="hero">
      <div className="relative flex flex-row items-center justify-left px-4 py-32 sm:px-6 sm:pt-24 md:pt-32 lg:px-8 mw-6xl">
        <div className="flex flex-col space-y-8 items-left w-1/3 pr-10">
          <HeroTitles />
          <HeroCTA />
        </div>
        <div className="w-2/3">
          <div className="w-[75vw]">
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
}
