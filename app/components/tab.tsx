"use client";
import React, { ReactNode, useState } from "react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";

export const Tab = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="border-t-[1px] border-gray-400 py-7">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setActive(!active)}
      >
        <h2 className="text-3xl text-gray-100">{title}</h2>
        <button>
          {active ? (
            <IoMdRemove className="text-3xl" />
          ) : (
            <IoMdAdd className="text-3xl" />
          )}
        </button>
      </div>
      <p
        className={`${
          !active
            ? "hidden"
            : "text-3xl text-gray-400 hover:text-gray-200 transition duration-200 font-light mt-3"
        }`}
      >
        {children}
      </p>
    </div>
  );
};
