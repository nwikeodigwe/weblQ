import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Plan } from "./components/plan";
import { How } from "./components/how";
import { Why } from "./components/why";
import { Pricing } from "./components/pricing";
import { Questions } from "./components/questions";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Plan />
      <How />
      <Why />
      <Pricing />
      <Questions />
    </main>
  );
}
