"use client";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { easing, element } from "../animation/motion";
import { useInView } from "react-intersection-observer";

export const Plan = () => {
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
      className="my-28 md:my-72 flex flex-col justify-center p-10"
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
        <motion.p className="text-md md:text-3xl" variants={element}>
          Strategy, design, prototype, code and deployment.
        </motion.p>
      </motion.div>
    </section>
  );
};
