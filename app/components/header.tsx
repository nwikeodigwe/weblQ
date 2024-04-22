import React from "react";

export const Header = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-10">
      <div className="container max-w-screen-xl mx-auto flex items-center justify-between py-5 px-8">
        <div>
          <h2 className="text-2xl">WeblQ.dev</h2>
        </div>
        <div>
          <button className="px-4 py-2 rounded-3xl border-[2px] border-yellow-400 text-yellow-400">
            Get free quote
          </button>
        </div>
      </div>
    </nav>
  );
};
