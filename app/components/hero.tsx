"use client";
import styles from "./style.module.css";
import { FaCheckCircle } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { button, easing, element } from "../animation/motion";
import { useEffect } from "react";
import Link from "next/link";

const list = [
  { name: "Strategy" },
  { name: "Design" },
  { name: "Prototype" },
  { name: "Code" },
  { name: "deployment" },
];

export const Hero = () => {
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
    <section className={`${styles.background} h-screen`} ref={ref}>
      <div className="absolute inset-0 bg-green-900/50 backdrop-blur-sm"></div>
      <div className="relative container h-full mx-auto max-w-screen-md flex flex-col justify-center">
        <motion.div
          className="flex flex-col gap-4 z-10"
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
          <motion.h1
            className="text-6xl font-sans text-yellow-400"
            variants={element}
          >
            World-class product team for early-stage startups.
          </motion.h1>
          <motion.h2
            className="text-5xl font-semibold underline"
            variants={element}
          >
            Bi-weekly subscription.
          </motion.h2>
          <motion.h2 className="text-5xl" variants={element}>
            Cancel anytime
          </motion.h2>
          <motion.div
            className="flex items-center justify-between rounded-2xl border-[2px] border-white w-[500px] mt-2 p-3"
            variants={element}
          >
            <motion.h2 variants={element}>WeblQ.dev</motion.h2>
            <motion.p variants={element}>Let&apos;s get started</motion.p>
            <Link href="https://tally.so/r/mRzD5l" target="_blank">
              <motion.button variants={element}>Get Quote</motion.button>
            </Link>
            <motion.button
              className="p-2 rounded-md bg-zinc-100 text-gray-900"
              variants={button}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              Book a call
            </motion.button>
          </motion.div>
          <div className="absolute bottom-10 left-0 w-full">
            <motion.ul
              className="flex items-center justify-between text-xl"
              variants={element}
            >
              {list.map((li) => (
                <li key={li.name} className="flex gap-2 items-center">
                  <FaCheckCircle className="text-yellow-400" />
                  {li.name}
                </li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
