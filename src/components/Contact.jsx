import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../HigherOrderComponent";
import { slideIn } from "../utilities/motion";
import { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef();
  const [from, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {};

  const handleSubmit = (e) => {};

  return (
    <div className="xl:mt-12 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText} text-red-500`}>Contact</p>
        <h2 className={styles.sectionHeadText}>Leave a Comment</h2>
        <from
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Name:</span>
            <input
              type="text"
              name="name"
              value={from.name}
              onChange={handleChange}
              placeholder="Your name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Email:</span>
            <input
              type="email"
              name="email"
              value={from.email}
              onChange={handleChange}
              placeholder="Your email"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Message:</span>
            <textarea
              rows="7"
              name="name"
              value={from.message}
              onChange={handleChange}
              placeholder="Your message"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 border border-[3px] outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:border-red-500 hover:bg-red-500"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </from>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
