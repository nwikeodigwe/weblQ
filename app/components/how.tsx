"use client";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { easing, element } from "../animation/motion";
import { useInView } from "react-intersection-observer";

export const How = () => {
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
      className="my-24 md:my-48 flex flex-col justify-center p-10"
      ref={ref}
    >
      <motion.div
        className="container max-w-screen-md mx-auto"
        initial="hidden"
        animate={controls}
        variants={{
          visible: {
            transition: {
              delayChildren: 1,
              staggerChildren: 0.5,
              easing,
            },
          },
        }}
      >
        <motion.h2
          className="text-3xl md:text-4xl text-yellow-400 underline"
          variants={element}
        >
          How it works?
        </motion.h2>
        <motion.p
          className="text-md md:text-3xl mt-5 md:mt-16"
          variants={element}
        >
          First, we plan the product roadmap together.
        </motion.p>
        <motion.p
          className="text-md md:text-3xl mt-5 md:mt-16"
          variants={element}
        >
          Next, we build and launch the first version of the product in 2-4
          weeks.
        </motion.p>
        <motion.p
          className="text-md md:text-3xl mt-5 md:mt-16"
          variants={element}
        >
          Then, we improve your product every two weeks based on user feedback.
        </motion.p>
        <motion.p
          className="text-md md:text-3xl mt-5 md:mt-16"
          variants={element}
        >
          Get your web app idea prototyped, built and launched without losing
          equity or hiring a big team.
        </motion.p>
        <motion.p
          className="text-md md:text-3xl mt-5 md:mt-16"
          variants={element}
        >
          We do it all so you can focus on growing your business.
        </motion.p>
      </motion.div>
    </section>
  );
};
