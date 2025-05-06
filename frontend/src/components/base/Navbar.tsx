"use client";

import useIsActiveLink from "@/hooks/useIsActiveLink";
import { m, useMotionValueEvent, useScroll } from "@/lib/motion/motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
export default function Navbar() {

  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const links = [
    { name: "Home", href: "/" },
    {
      name: "Collections",
      href: "/#collections",
    },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = useIsActiveLink();

  // Effect to check if the user has scrolled passed the specified height
  useMotionValueEvent(scrollY, "change", (current) => {
    setIsScrolled(current > 80);
  });

  return (
    <m.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: 1,
        y: 0,
        // mixBlendMode: isScrolled ? "normal" : "difference",
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed left-0 top-0 z-50 flex w-full items-center mix-blend-difference transi",
        isScrolled && "backdrop-blur",
      )}
    >
      <ul className="flex h-[48px] w-full items-center justify-center gap-4 md:justify-end">
        {links.map((link, index) => {
          return (
            <m.li key={index} whileHover={{ scale: 1.1 }}>
              <Link href={link.href}>
                <span
                  className={cn(
                    `cursor-pointer text-white mix-blend-difference transition-all duration-200 hover:text-blue-300`,
                    isActive(link.href) && "border-b-4 font-bold",
                  )}
                >
                  {link.name}
                </span>
              </Link>
            </m.li>
          );
        })}
      </ul>
    </m.nav>
  );
}
