import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

import resume from "/md_yeasin_rafi_resume.pdf";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto mt-32 lg:mt-20">
      <div className="relative w-full h-screen mx-auto">
        <div
          className={`${styles.paddingX} absolute inset-0 bottom-[250px]  max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-[20px]`}
        >
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hey, I&apos;m <span className="text-[#dd3232]">Yeasin Rafee</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              MERN stack Developer. I develop web applications using{" "}
              <br className="sm:block hidden" /> MERN technologies.
            </p>
          </div>
          <ComputersCanvas />
        </div>
        <div className="absolute bottom-48 w-full flex justify-center items-center">
          <div className="w-[78px] h-[48px] rounded-2xl border-4 border-3 flex justify-center items-start px-16 py-2 cursor-pointer hover:bg-[#dd3232] hover:border-black font-bold">
            <a href={resume} download>
              ⬇️Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
