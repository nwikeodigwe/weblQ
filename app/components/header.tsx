"use client";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { easing, element } from "../animation/motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const Header = () => {
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
    <nav className="fixed top-0 left-0 w-full z-10" id="header" ref={ref}>
      <motion.div
        className="container max-w-screen-xl mx-auto flex items-center justify-between py-5 px-8"
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
        <div>
          <motion.h2
            className="text-xl font-semibold md:text-2xl"
            variants={element}
          >
            <Link href={"/"}>WeblQ.dev</Link>
          </motion.h2>
        </div>
        <Link href="https://tally.so/r/mRzD5l" target="_blank">
          <motion.button
            className="md:px-4 md:py-2 px-2 py-1 rounded-3xl border-[2px] border-yellow-400 text-yellow-400 text-sm md:text-md"
            variants={element}
            whileHover={{
              scale: 1.1,
              transition: {
                type: "spring",
                mass: 0.4,
                stiffness: 400,
                damping: 10,
              },
            }}
          >
            Get free quote
          </motion.button>
        </Link>
      </motion.div>
    </nav>
  );
};
