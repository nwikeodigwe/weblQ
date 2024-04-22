import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FiGithub } from "react-icons/fi";

import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { SlSocialFacebook, SlSocialTwitter } from "react-icons/sl";
import { container, element, item } from "./motion";

export const Footer = () => {
  return (
    <section id="footer">
      <div className="container max-w-screen-sm mx-auto flex flex-col items-center justify-center gap-3">
        <motion.ul
          className="flex items-center justify-between gap-10"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.li className="text-2xl" variants={item}>
            <Link href={"/work"}>Latest work</Link>
          </motion.li>
          <motion.li className="text-2xl" variants={item}>
            <Link href={"/#pricing"}>Pricing</Link>
          </motion.li>
          <motion.li className="text-2xl" variants={item}>
            <Link href={"/#contact"}>Contact</Link>
          </motion.li>
        </motion.ul>
        <motion.p className="text-sm" variants={element}>
          All rights reserved, 2024
        </motion.p>
      </div>
      <div className="fixed bottom-0 left-10">
        <motion.ul className="flex flex-col gap-6 items-center justify-center text-gray-200">
          <motion.li variants={item}>
            <Link
              href={"https://facebook.com"}
              target="_blank"
              className="hover:text-yellow-400 transition duration-150 group"
            >
              <SlSocialFacebook className="text-xl group-hover:scale-125 transition duration-150" />
            </Link>
          </motion.li>
          <motion.li variants={item}>
            <Link
              href={"https://instagram.com"}
              target="_blank"
              className="hover:text-yellow-400 hover:scale-105 transition duration-150 group"
            >
              <IoLogoInstagram className="text-xl group-hover:scale-125 transition duration-150" />
            </Link>
          </motion.li>

          <motion.li variants={item}>
            <Link
              href={"https://twitter.com"}
              target="_blank"
              className="hover:text-yellow-400 hover:scale-105 transition duration-150 group"
            >
              <RiTwitterXLine className="text-xl group-hover:scale-125 transition duration-150" />
            </Link>
          </motion.li>
          <motion.li variants={item}>
            <Link
              href={"https://github.com"}
              target="_blank"
              className="hover:text-yellow-400 hover:scale-105 transition duration-150 group"
            >
              <FiGithub className="text-xl group-hover:scale-125 transition duration-150" />
            </Link>
          </motion.li>
          <li className="h-20 border-[1px] border-gray-200"></li>
        </motion.ul>
      </div>
    </section>
  );
};
