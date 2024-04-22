"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { button, element } from "./motion";

export const Header = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-10" id="header">
      <div className="container max-w-screen-xl mx-auto flex items-center justify-between py-5 px-8">
        <div>
          <motion.h2
            className="text-2xl"
            variants={element}
            initial="hidden"
            animate="show"
          >
            <Link href={"/"}>WeblQ.dev</Link>
          </motion.h2>
        </div>
        <div>
          <motion.button
            className="px-4 py-2 rounded-3xl border-[2px] border-yellow-400 text-yellow-400"
            variants={button}
            initial="hidden"
            animate="show"
            whileHover="hover"
          >
            Get free quote
          </motion.button>
        </div>
      </div>
    </nav>
  );
};
