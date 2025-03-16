"use client";

import { m } from "@/lib/motion/motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const links = [
    { name: "Home", href: "/" },
    {
      name: "Collections",
      href: "/#collections",
    },
    { name: "Contact", href: "/contact" },
  ];

  // Effect to check if the user has scrolled passed the specified height
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 48);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <m.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: 1,
        y: 0,
        mixBlendMode: isScrolled ? "normal" : "difference",
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full  mix-blend-difference z-50">
      <m.div
        animate={{
          backgroundColor: isScrolled
            ? "rgba(25, 25, 25, 0.1)"
            : "rgba(0, 0, 0, 0)",
          backdropFilter: isScrolled ? "blur(5px)" : "blur(0px)",
          boxShadow: isScrolled ? "0px 4px 12px rgba(0, 0, 0, 0.1)" : "none",
          height: isScrolled ? "60px" : "48px",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex items-center px-4 md:px-12 transition-all w-full">
        <ul className="flex justify-center md:justify-end items-center w-full gap-4">
          {links.map((link, index) => {
            const isActive =
              link.href === pathname ||
              link.href === `/${window.location.hash}`;

            return (
              <m.li
                key={index}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}>
                <Link href={link.href}>
                  <span
                    className={`cursor-pointer mix-blend-difference text-white transition-all duration-200 ${
                      isActive ? "border-b-4 font-bold" : ""
                    } hover:text-blue-300`}>
                    {link.name}
                  </span>
                </Link>
              </m.li>
            );
          })}
        </ul>
      </m.div>
    </m.nav>
  );
}
