import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./Variants";

const Banner = (props) => {
  const { banner, heading, subheading, btn1, btn2 } = props;

  return (
    <div className="gradientBG rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
        {/*Banner Image */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <img className="lg:w-[400px]" src={banner} alt="no pic"></img>
        </motion.div>
        {/*Banner Content */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w3/5"
        >
          <h2 className=" md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed">
            {heading}
          </h2>
          <p className="text-white text-2xl mb-8">{subheading}</p>

          <div className="space-x-5 space-y-4">
            <button className="py-2 px-8 font-semibold bg-black text-white rounded hover:bg-[#34B002] transition duration-300;">
              {btn1}
            </button>
            <button className="py-2 px-8 font-semibold bg-black text-white rounded hover:bg-[#34B002] transition duration-300;">
              {btn2}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
