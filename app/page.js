import Image from "next/image";
import Hero from "./component/hero";

import Tokenomics from "./component/tokenomics";
import Footer from "./component/footer";
import Step from "./component/step";
import Tag from "./component/tag";
import About from "./component/about";

export default function Home() {
  return (
    <div className="bg-[#EDC261]">
      <Hero />
      <Tag />
      <Step />

      <Tokenomics />
      <About />
      <Footer />
    </div>
  );
}
