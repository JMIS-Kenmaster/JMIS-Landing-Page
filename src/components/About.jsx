import React from "react";
import aboutus from "../images/aboutus.svg";
import solutions from "../images/solutions.png";
import { motion } from "framer-motion";
import { fadeIn } from "../shared/Variants";

function About() {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto space-y-10" id="about_us">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2"
        >
          <img className="h-[500px]" src={aboutus} alt=""></img>
        </motion.div>

        {/* content component below*/}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-2/5"
        >
          <h2 className="md:text-5xl text-3xl font-bold mb-8 leading-normal">
            It all begins with an idea
          </h2>
          <p className="text-lg mb-7 font-semibold">
            JM Innovations Services LLC was founded with a vision: to
            revolutionize IT consulting and solutions. We recognized the need
            for a more dependable, budget-friendly service, and we're here to
            meet that demand with unwavering commitment.
          </p>
          <button className="py-2 px-8 font-semibold bg-black text-white rounded hover:bg-[#34B002] transition duration-300;">
            Get a Qoute
          </button>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        <div className="md:w-1/2">
          <img
            className="h-[500px] md:float-right"
            src={solutions}
            alt=""
          ></img>
        </div>

        {/* content 2 component below*/}
        <div className="md:w-2/5">
          <h2 className="md:text-5xl text-3xl font-bold mb-8 leading-normal">
            And then ideas become{" "}
            <span className="hover:text-[#34B002] transition duration-300;">
              solutions
            </span>
          </h2>
          <p className="text-lg mb-7 font-semibold">
            At JM Innovations Services LLC, our mission is clear: to provide
            unparalleled quality of service while remaining mindful of your
            budgetary constraints. We understand the importance of reliable IT
            solutions, and we're dedicated to delivering excellence in every
            aspect of our work.
          </p>
          <button className="py-2 px-8 font-semibold bg-black text-white rounded hover:bg-[#34B002] transition duration-300;">
            Get a Qoute
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
