"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { ReactNode, useState } from "react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { tab } from "../animation/motion";

export const Tab = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="border-t-[1px] border-gray-400 py-4 md:py-7">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setActive(!active)}
      >
        <h2 className="text-md md:text-3xl text-gray-100">{title}</h2>
        <button>
          {active ? (
            <IoMdRemove className="text-md md:text-3xl" />
          ) : (
            <IoMdAdd className="text-md md:text-3xl" />
          )}
        </button>
      </div>
      <AnimatePresence>
        {active && (
          <motion.p
            className="text-md md:text-3xl text-gray-400 hover:text-gray-200 transition duration-200 font-light mt-3"
            variants={tab}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {children}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};
