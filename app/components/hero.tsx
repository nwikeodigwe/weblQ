import React from "react";
import styles from "./style.module.css";
import { FaCheckCircle } from "react-icons/fa";

export const Hero = () => {
  return (
    <section className={`${styles.background} h-screen`}>
      <div className="absolute inset-0 bg-green-900/50 backdrop-blur-sm"></div>
      <div className="relative container h-full mx-auto max-w-screen-md flex flex-col justify-center">
        <div className="flex flex-col gap-4 z-10">
          <h1 className="text-6xl font-sans text-yellow-400">
            World-class product team for early-stage startups.
          </h1>
          <h2 className="text-5xl font-semibold underline">
            Bi-weekly subscription.
          </h2>
          <h2 className="text-5xl">Cancel anytime</h2>
          <div className="flex items-center justify-between rounded-2xl border-[2px] border-white w-[500px] mt-2 p-3">
            <h2>WeblQ.dev</h2>
            <p>Let&apos;s get started</p>
            <button>Get Quote</button>
            <button className="p-2 rounded-md bg-zinc-100 text-gray-900">
              Book a call
            </button>
          </div>
          <div className="absolute bottom-10 left-0 w-full">
            <ul className="flex items-center justify-between text-xl">
              <li className="flex gap-2 items-center">
                <FaCheckCircle className="text-yellow-400" />
                Strategy
              </li>
              <li className="flex gap-2 items-center">
                <FaCheckCircle className="text-yellow-400" />
                Design
              </li>
              <li className="flex gap-2 items-center">
                <FaCheckCircle className="text-yellow-400" />
                Prototype
              </li>
              <li className="flex gap-2 items-center">
                <FaCheckCircle className="text-yellow-400" />
                Code
              </li>
              <li className="flex gap-2 items-center">
                <FaCheckCircle className="text-yellow-400" />
                Deployment
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
