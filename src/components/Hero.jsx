import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto mt-28 mb-5">
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
      <div className="absolute xs:bottom-10 bottom-36 w-full flex justify-center items-center">
        <div className="w-[78px] h-[48px] rounded-2xl border-4 border-secondary flex justify-center items-start px-16 py-2 cursor-pointer hover:bg-[#dd3232] hover:border-black">
          ⬇️Resume
        </div>
      </div>
    </section>
  );
};

export default Hero;
