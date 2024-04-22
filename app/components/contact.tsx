import { motion } from "framer-motion";
import React from "react";
import { button, element } from "./motion";

export const Contact = () => {
  return (
    <section className="mt-72 mb-48 flex flex-col justify-center" id="contact">
      <div className="container max-w-screen-md mx-auto">
        <motion.h2
          className="text-4xl text-yellow-400 text-center underline"
          variants={element}
          initial="hidden"
          animate="show"
        >
          Get in touch
        </motion.h2>
        <motion.p
          className="text-3xl text-center mt-28"
          variants={element}
          initial="hidden"
          animate="show"
        >
          We help you build your MVP in 14 days and grow it with a bi-weekly
          subscription.
        </motion.p>
        <div className="flex items-center justify-center mt-28">
          <motion.button
            className="flex items-center text-3xl gap-4 py-3 px-4 rounded-full border-[2px] border-white"
            variants={button}
            initial="hidden"
            animate="show"
          >
            Say hello
          </motion.button>
        </div>
      </div>
    </section>
  );
};
