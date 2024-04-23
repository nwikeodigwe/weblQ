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
    <section className={`${styles.background} h-screen p-10`} ref={ref}>
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
            className="text-4xl text-center md:text-6xl md:text-left font-sans text-yellow-400"
            variants={element}
          >
            World-class product team for early-stage startups.
          </motion.h1>
          <motion.h2
            className="text-2xl text-center md:text-left md:text-5xl font-semibold underline"
            variants={element}
          >
            Bi-weekly subscription.
          </motion.h2>
          <motion.h2
            className="text-2xl text-center md:text-left md:text-5xl"
            variants={element}
          >
            Cancel anytime
          </motion.h2>
          <motion.div
            className="flex items-center justify-between rounded-2xl border-[1px] md:border-[2px] border-white md:w-[500px] mt-2 p-2 md:p-3"
            variants={element}
          >
            <motion.h2 variants={element} className="text-sm md:text-normal">
              WeblQ.dev
            </motion.h2>
            <motion.p
              className="text-sm md:text-normal hidden md:inline-block"
              variants={element}
            >
              Let&apos;s get started
            </motion.p>
            <Link href="https://tally.so/r/mRzD5l" target="_blank">
              <motion.button
                className="text-sm md:text-normal"
                variants={element}
              >
                Get Quote
              </motion.button>
            </Link>

            <Link href="https://calendly.com/weblq-pkzh" target="_blank">
              <motion.button
                className="p-1 rounded-md bg-zinc-100 text-gray-900 text-sm md:text-normal"
                variants={button}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                Book a call
              </motion.button>
            </Link>
          </motion.div>
          <div className="absolute bottom-10 left-0 w-full">
            <motion.ul
              className="hidden md:flex items-center justify-between text-xl"
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
