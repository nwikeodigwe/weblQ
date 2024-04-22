import React from "react";
import { Tab } from "../components/tab";

export default function Page() {
  return (
    <main>
      <section className="my-48">
        <div className="container max-w-screen-md mx-auto">
          <h1 className="text-3xl text-yellow-400 underline">
            Frequently asked questions
          </h1>
          <div className="mt-16">
            <Tab title="Why not just hire a freelancer?">
              <p>
                Freelancers are great for small projects, but they can be
                unreliable and slow.
              </p>
              <p>
                Our team is made up of experienced professionals who can deliver
                your project on time and budget.
              </p>
            </Tab>
            <Tab title="Where are you based?">
              <p>
                We are a remote team based in Europe and Central America. We
                work with clients from all over the world.
              </p>
            </Tab>
            <Tab title="What technology do we use?">
              <p>
                we use <span className="underline">Node JS</span>,{" "}
                <span className="underline">React</span>,{" "}
                <span className="underline">Next.js</span>,{" "}
                <span className="underline">Supabase</span>,{" "}
                <span className="underline">MySQL</span>,{" "}
                <span className="underline">MongoDB</span> and{" "}
                <span className="underline">Sanity CMS</span> to build scalable,
                maintainable apps that integrate seamlessly with your existing
                tools.
              </p>
            </Tab>
            <Tab title="What is your process?">
              <p>
                We start with a discovery call to understand your project and
                goals. Then we create a proposal with a fixed price and
                timeline. Once approved, we start working on your project.
              </p>
              <p>
                We provide regular updates and feedback sessions to make sure we
                are on the right track.
              </p>
            </Tab>
            <Tab title="How long does it take?">
              <p>
                Initial version of projects typically take 2-4 weeks to
                complete. Some projects may take longer depending on the scope
                and complexity.
              </p>
            </Tab>
            <Tab title="What if I don't like the final product?">
              <p>
                We offer a 100% satisfaction guarantee. If the project does not
                match the agreed scope, we will keep working on it until it
                does.
              </p>
            </Tab>
          </div>
        </div>
      </section>
    </main>
  );
}
