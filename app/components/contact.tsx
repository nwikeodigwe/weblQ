"use client";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { button, easing, element } from "../animation/motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export const Contact = () => {
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
    <section
      className="mt-72 mb-48 flex flex-col justify-center"
      id="contact"
      ref={ref}
    >
      <motion.div
        className="container max-w-screen-md mx-auto"
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
        <motion.h2
          className="text-4xl text-yellow-400 text-center underline"
          variants={element}
        >
          Get in touch
        </motion.h2>
        <motion.p className="text-3xl text-center mt-28" variants={element}>
          We help you build your MVP in 14 days and grow it with a bi-weekly
          subscription.
        </motion.p>
        <div className="flex items-center justify-center mt-28">
          <Link href="mailto:hey@weblq.dev">
            <motion.button
              className="flex items-center text-3xl gap-4 py-3 px-4 rounded-full border-[2px] border-white"
              variants={button}
              initial="hidden"
              animate="visible"
              whileHover={"hover"}
            >
              Say hello
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};
