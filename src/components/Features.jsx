import onthebudget from "../images/onthebudget.svg";
import remote from "../images/remote.svg";
import trust from "../images/trust.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../shared/Variants";

const Features = () => {
  return (
    <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto" id="about_us">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="lg:w-1/4"
        >
          <h3 className="text-3xl font-bold lg:w-1/2 mb-3">
            Why us better than others
          </h3>
          <p className="text-base">
            We provide the best services focusing in costumer care and quick
            response and on the budget solutions
          </p>
        </motion.div>

        {/*Div for the cards component */}
        <div className="w-full lg:w-3/4">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8"
          >
            <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-2xl p-8 items-center flex flex-col justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
              <img className="h-[200px]" src={onthebudget} alt="no pic"></img>
              <h5 className="text-2xl font-semibold px-5 text-center">
                On the budget solutions
              </h5>
            </div>
            <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-2xl p-8 items-center flex flex-col justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-20">
              <img className="h-[200px]" src={remote} alt="no pic"></img>
              <h5 className="text-2xl font-semibold px-5 text-center">
                Remote assistance
              </h5>
            </div>
            <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-2xl p-8 items-center flex flex-col justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
              <img className="h-[200px]" src={trust} alt="no pic"></img>
              <h5 className="text-2xl font-semibold px-5 text-center">
                Trust and Confidence
              </h5>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Features;
