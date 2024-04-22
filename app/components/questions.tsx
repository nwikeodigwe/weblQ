import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { element } from "./motion";

export const Questions = () => {
  return (
    <section className="my-72 flex flex-col justify-center">
      <div className="container max-w-screen-md mx-auto">
        <Link href={"/faq"}>
          <motion.h2
            className="text-4xl text-yellow-400 underline"
            variants={element}
            initial="hidden"
            animate="show"
          >
            Have questions?
          </motion.h2>
        </Link>
      </div>
    </section>
  );
};
