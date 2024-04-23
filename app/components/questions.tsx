"use client";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import React, { useEffect } from "react";
import { easing, element } from "../animation/motion";
import { useInView } from "react-intersection-observer";
import { IoIosLink } from "react-icons/io";

export const Questions = () => {
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
        <motion.div variants={element}>
          <Link href={"/faq"} className="flex items-center gap-3">
            <h2 className="text-3xl md:text-4xl text-yellow-400 underline">
              Have questions?
            </h2>

            <span>
              <IoIosLink className="text-md md:text-3xl" />
            </span>
          </Link>
        </motion.div>

        <motion.p
          className="flex gap-2 mt-2 md:mt-5 text-sm md:text-2xl"
          variants={element}
        >
          See our frequently asked questions.
        </motion.p>
      </motion.div>
    </section>
  );
};
