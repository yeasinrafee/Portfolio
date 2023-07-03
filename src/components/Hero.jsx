import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { textVariant } from "../utilities/motion";

import resume from "/md_yeasin_rafi_resume.pdf";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto mt-28 mb-5">
      <div className="relative w-full h-screen mx-auto">
        <div
          className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <motion.div variants={textVariant()}>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hey, I&apos;m <span className="text-[#dd3232]">Yeasin Rafee</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              MERN stack Developer. I develop web applications{" "}
              <br className="sm:block hidden" /> using MERN technologies.
            </p>
          </motion.div>
        </div>
        <ComputersCanvas />
      </div>
      <div className="absolute xs:bottom-10 bottom-36 w-full flex justify-center items-center">
        <div className="w-[78px] h-[48px] rounded-2xl border-4 border-3 flex justify-center items-start px-16 py-2 cursor-pointer hover:bg-[#dd3232] hover:border-black font-bold">
          <a href={resume} download>
            ⬇️Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
