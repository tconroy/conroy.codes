"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import sticker from "../app/me-sticker.png";
import Image from "next/image";

const navItems = {
  "/about": {
    name: "about",
    x: 5,
    y: 0,
    w: "60px",
  },
  "/work": {
    name: "work",
    x: 72,
    y: 0,
    w: "55px",
  },
  "/blog": {
    name: "blog",
    x: 130,
    y: 0,
    w: "50px",
  },
};

function Logo() {
  let pathname = usePathname() || "/";
  const isCurrentRoute = (usePathname() || "/") === "/";

  return (
    <Link key={"/"} href={"/"} className="ml-[5px]">
      <Image
        alt="Home"
        className={clsx("rounded-full dark:opacity-75 dark:hover:opacity-100", {
          "opacity-100": isCurrentRoute,
        })}
        src={sticker}
        width={48}
      />
    </Link>
  );
}

export default function Navbar() {
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }

  return (
    <nav
      className="flex flex-row items-start relative pb-0 fade m-auto w-full max-w-[700px]"
      id="nav"
    >
      <div className="flex flex-row items-center space-x-0 mb-2 mt-2">
        <Logo />
        {navItems[pathname] ? (
          <div className="block">
            <motion.div
              className="absolute top-4 bg-neutral-100 dark:bg-neutral-800 h-[34px] rounded-md z-[-1]"
              layoutId="test"
              initial={{ opacity: 0, x: navItems[pathname].x }}
              animate={{
                opacity: 1,
                x: navItems[pathname].x,
                width: navItems[pathname].w,
              }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 30,
              }}
            />
          </div>
        ) : null}

        {Object.entries(navItems).map(([path, { name }]) => {
          const isActive = path === pathname;

          return (
            <Link
              key={path}
              href={path}
              className={clsx(
                "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px]",
                {
                  "text-neutral-500": !isActive,
                  "font-bold": isActive,
                }
              )}
            >
              {name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
