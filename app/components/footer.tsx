"use client";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import React, { useEffect } from "react";
import { FiGithub } from "react-icons/fi";

import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { SlSocialFacebook } from "react-icons/sl";
import { easing, element } from "../animation/motion";
import { useInView } from "react-intersection-observer";

export const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section id="footer" ref={ref}>
      <div className="container max-w-screen-sm mx-auto flex flex-col items-center justify-center gap-3">
        <motion.ul
          className="flex items-center justify-between gap-10"
          initial="hidden"
          animate={controls}
          variants={{
            visible: {
              transition: {
                delayChildren: 0.5,
                staggerChildren: 0.5,
                easing,
              },
            },
          }}
        >
          <motion.li className="text-2xl" variants={element}>
            <Link href={"/work"}>Latest work</Link>
          </motion.li>
          <motion.li className="text-2xl" variants={element}>
            <Link href={"/#pricing"}>Pricing</Link>
          </motion.li>
          <motion.li className="text-2xl" variants={element}>
            <Link href={"/#contact"}>Contact</Link>
          </motion.li>
        </motion.ul>
        <motion.p
          className="text-sm"
          variants={element}
          initial="hidden"
          animate="visible"
        >
          All rights reserved, 2024
        </motion.p>
      </div>
      <div className="fixed bottom-0 left-10">
        <motion.ul
          className="flex flex-col gap-6 items-center justify-center text-gray-200"
          initial="hidden"
          animate={controls}
          variants={{
            visible: {
              transition: {
                delayChildren: 0.5,
                staggerChildren: 0.5,
                easing,
              },
            },
          }}
        >
          <motion.li variants={element}>
            <Link
              href={"https://facebook.com"}
              target="_blank"
              className="hover:text-yellow-400 transition duration-150 group"
            >
              <SlSocialFacebook className="text-xl group-hover:scale-125 transition duration-150" />
            </Link>
          </motion.li>
          <motion.li variants={element}>
            <Link
              href={"https://instagram.com"}
              target="_blank"
              className="hover:text-yellow-400 hover:scale-105 transition duration-150 group"
            >
              <IoLogoInstagram className="text-xl group-hover:scale-125 transition duration-150" />
            </Link>
          </motion.li>

          <motion.li variants={element}>
            <Link
              href={"https://twitter.com"}
              target="_blank"
              className="hover:text-yellow-400 hover:scale-105 transition duration-150 group"
            >
              <RiTwitterXLine className="text-xl group-hover:scale-125 transition duration-150" />
            </Link>
          </motion.li>
          <motion.li variants={element}>
            <Link
              href={"https://github.com"}
              target="_blank"
              className="hover:text-yellow-400 hover:scale-105 transition duration-150 group"
            >
              <FiGithub className="text-xl group-hover:scale-125 transition duration-150" />
            </Link>
          </motion.li>
          <motion.li
            className="h-20 border-[1px] border-gray-200"
            variants={element}
          ></motion.li>
        </motion.ul>
      </div>
    </section>
  );
};
