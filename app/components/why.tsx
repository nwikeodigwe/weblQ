"use client";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { easing, element } from "../animation/motion";
import { useInView } from "react-intersection-observer";

export const Why = () => {
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
      className="my-28 md:my-48 flex flex-col justify-center p-10"
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
          className="text-3xl md:text-4xl text-yellow-400 underline"
          variants={element}
        >
          Why choose us?
        </motion.h2>
        <motion.p
          className="text-md md:text-3xl mt-5 md:mt-16"
          variants={element}
        >
          <span className="underline font-medium">Affordable:</span> access a
          dedicated product team for just 25% of the cost of an in-house team.
        </motion.p>
        <motion.p
          className="text-md md:text-3xl mt-5 md:mt-16"
          variants={element}
        >
          <span className="underline font-medium">Flexible:</span> bi-weekly
          subscribtion with the freedom to cancel anytime.
        </motion.p>
        <motion.p
          className="text-md md:text-3xl mt-5 md:mt-16"
          variants={element}
        >
          <span className="underline font-medium">Experience:</span> with 8+
          years of experience in building startups, we specialize in turning
          ideas into high-quality web apps.
        </motion.p>
        <motion.p
          className="text-md md:text-3xl mt-5 md:mt-16"
          variants={element}
        >
          <span className="underline font-medium">Technology:</span> we use{" "}
          <span className="underline">Node JS</span>,{" "}
          <span className="underline">React</span>,{" "}
          <span className="underline">Next.js</span>,{" "}
          <span className="underline">Supabase</span>,{" "}
          <span className="underline">MySQL</span>,{" "}
          <span className="underline">MongoDB</span> and{" "}
          <span className="underline">Sanity CMS</span> to build scalable,
          maintainable apps that integrate seamlessly with your existing tools.
        </motion.p>
      </motion.div>
    </section>
  );
};
