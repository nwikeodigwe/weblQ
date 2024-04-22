import React from "react";
import { FcConferenceCall } from "react-icons/fc";
import { LuPhoneCall } from "react-icons/lu";

export const Pricing = () => {
  return (
    <section className="my-72 flex flex-col justify-center" id="pricing">
      <div className="container max-w-screen-md mx-auto">
        <h2 className="text-4xl text-yellow-400 underline">Pricing</h2>
        <p className="text-3xl mt-72">
          Get a dedicated product team for 20% of the price of hiring a
          full-time team.
        </p>
        <p className="text-3xl mt-72">
          $2,000 <span className="text-sm font-light">bi-weekly</span>
        </p>
        <p className="text-3xl mt-20">
          Senior full-stack developer, QA tester and product manager.
        </p>
        <p className="text-3xl mt-72">
          $4,000 <span className="text-sm font-light">bi-weekly</span>
        </p>
        <p className="text-3xl mt-20">Full product team.</p>
        <p className="text-3xl mt-1">
          Technical product manager,UI/UX designer,
        </p>
        <p className="text-3xl mt-1">full-stack developer and QA tester.</p>

        <p className="text-3xl mt-72">Pay every two weeks, cancel anytime.</p>

        <p className="text-3xl mt-72">
          Pitch us your idea and we&apos;ll get back to you with a{" "}
          <span className="underline">proposal in 24 hours</span>. If you worry
          about your idea being stolen, we&apos;ll sign a custom NDA before you
          share it with us.
        </p>
        <div className="mt-72">
          <button className="flex items-center text-3xl gap-4 py-3 px-4 rounded-full border-[2px] border-white">
            <span className="p-1 rounded-full border-[2px] border-white">
              <FcConferenceCall />
            </span>
            Book a call <LuPhoneCall />{" "}
          </button>
        </div>
      </div>
    </section>
  );
};
