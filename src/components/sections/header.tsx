"use client";

import Drawer from "@/components/drawer";
import { Icons } from "@/components/icons";
import Menu from "@/components/menu";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [addBorder, setAddBorder] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setAddBorder(true);
      } else {
        setAddBorder(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={
        "sticky top-0 z-50 py-4 bg-background/70 backdrop-blur"
      }
    >
      <div className="flex justify-between px-8">
        <Link
          href="/"
          title="brand-logo"
          className="relative mr-6 flex items-center space-x-2"
        >
          <img src="/logo.png" alt="Brand Logo" className="w-auto h-[32px]" />
        </Link>

        <div className="hidden lg:block">
          <div className="flex items-center ">
            <nav className="mr-10">
              <Menu />
            </nav>

            <div className="gap-2 flex">
              <Link
                href="/login"
                className={buttonVariants({ variant: "outline" })}
              >
                Contact Us
              </Link>
              <Link
                href="/signup"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "w-full sm:w-auto text-background flex gap-2"
                )}
              >
                
                Request Access
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-2 cursor-pointer block lg:hidden">
          <Drawer />
        </div>
      </div>
      <hr
        className={cn(
          "absolute w-full bottom-0 transition-opacity duration-300 ease-in-out",
          addBorder ? "opacity-100" : "opacity-0"
        )}
      />
    </header>
  );
}
