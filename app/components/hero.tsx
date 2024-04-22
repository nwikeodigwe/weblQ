"use client";
import styles from "./style.module.css";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { button, container, element, item } from "./motion";

const list = [
  { name: "Strategy" },
  { name: "Design" },
  { name: "Prototype" },
  { name: "Code" },
  { name: "deployment" },
];

export const Hero = () => {
  return (
    <section className={`${styles.background} h-screen`}>
      <div className="absolute inset-0 bg-green-900/50 backdrop-blur-sm"></div>
      <div className="relative container h-full mx-auto max-w-screen-md flex flex-col justify-center">
        <div className="flex flex-col gap-4 z-10">
          <motion.h1
            className="text-6xl font-sans text-yellow-400"
            variants={element}
            initial="hidden"
            animate="show"
          >
            World-class product team for early-stage startups.
          </motion.h1>
          <motion.h2
            className="text-5xl font-semibold underline"
            variants={element}
            initial="hidden"
            animate="show"
          >
            Bi-weekly subscription.
          </motion.h2>
          <motion.h2
            className="text-5xl"
            variants={element}
            initial="hidden"
            animate="show"
          >
            Cancel anytime
          </motion.h2>
          <motion.div
            className="flex items-center justify-between rounded-2xl border-[2px] border-white w-[500px] mt-2 p-3"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.h2 variants={item}>WeblQ.dev</motion.h2>
            <motion.p variants={item}>Let&apos;s get started</motion.p>
            <motion.button variants={item}>Get Quote</motion.button>
            <motion.button
              className="p-2 rounded-md bg-zinc-100 text-gray-900"
              variants={button}
              initial="hidden"
              animate="show"
              whileHover="whileHover"
            >
              Book a call
            </motion.button>
          </motion.div>
          <div className="absolute bottom-10 left-0 w-full">
            <motion.ul
              className="flex items-center justify-between text-xl"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {list.map((li) => (
                <motion.li
                  key={li.name}
                  className="flex gap-2 items-center"
                  variants={item}
                >
                  <FaCheckCircle className="text-yellow-400" />
                  {li.name}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
};
