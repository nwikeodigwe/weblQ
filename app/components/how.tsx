import { motion } from "framer-motion";
import React from "react";
import { element } from "./motion";

export const How = () => {
  return (
    <section className="my-72 flex flex-col justify-center">
      <div className="container max-w-screen-md mx-auto">
        <motion.h2
          className="text-4xl text-yellow-400 underline"
          variants={element}
          initial="hidden"
          animate="show"
        >
          How it works?
        </motion.h2>
        <motion.p
          className="text-3xl mt-72"
          variants={element}
          initial="hidden"
          animate="show"
        >
          First, we plan the product roadmap together.
        </motion.p>
        <motion.p
          className="text-3xl mt-72"
          variants={element}
          initial="hidden"
          animate="show"
        >
          Next, we build and launch the first version of the product in 2-4
          weeks.
        </motion.p>
        <motion.p
          className="text-3xl mt-72"
          variants={element}
          initial="hidden"
          animate="show"
        >
          Then, we improve your product every two weeks based on user feedback.
        </motion.p>
        <motion.p
          className="text-3xl mt-72"
          variants={element}
          initial="hidden"
          animate="show"
        >
          Get your web app idea prototyped, built and launched without losing
          equity or hiring a big team.
        </motion.p>
        <motion.p
          className="text-3xl mt-72"
          variants={element}
          initial="hidden"
          animate="show"
        >
          We do it all so you can focus on growing your business.
        </motion.p>
      </div>
    </section>
  );
};
