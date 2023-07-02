import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto mt-28">
      <div className="relative w-full h-screen mx-auto">
        <div
          className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hey, I&apos;m <span className="text-[#bb1515]">Yeasin Rafee</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              MERN stack Developer. I develop web applications{" "}
              <br className="sm:block hidden" /> using MERN technologies.
            </p>
          </div>
        </div>
        <ComputersCanvas />
      </div>
    </section>
  );
};

export default Hero;
