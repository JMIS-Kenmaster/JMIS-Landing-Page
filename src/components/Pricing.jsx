import React, { useState } from "react";
import happyImage from "../images/happy.png";
import sadImage from "../images/sad.png";
import { motion } from "framer-motion";
import { fadeIn } from "../shared/Variants";

function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const packages = [
    {
      name: "Basic",
      monthlyPrice: 99,
      yearlyPrice: 800,
      description: "Basic service for the everyone",
      happy: happyImage,
      sad: sadImage,
    },
    {
      name: "Advance",
      monthlyPrice: 150,
      yearlyPrice: 1500,
      description: "Advance service for the demanding savy",
      happy: happyImage,
      sad: sadImage,
    },
    {
      name: "Premium",
      monthlyPrice: 200,
      yearlyPrice: 2500,
      description: "premium service for the tech guru",
      happy: happyImage,
      sad: sadImage,
    },
  ];
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto p-y-10" id="pricing">
      <div className="text-center">
        <h2 className="md:text-5xl text-3xl font-extrabold mb-2">
          Basic prices and Services
        </h2>
        <p className="md:w-1/3 mx-auto px-4 mt-10 ">
          Great service does not have to be expensive
        </p>

        {/*Toogle Price Section*/}
        <div className="mt-16">
          <label
            htmlFor="toggle"
            className="inline-flex items-center cursor-pointer"
          >
            <span className="mr-8 text-2xl font-semibold">Monthly</span>
            <div className="w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out">
              <div
                className={`w-6 h-6 rounded-full ${
                  isYearly ? "ml-8 bg-black" : "bg-gray-500"
                }`}
              ></div>
            </div>
            <span className="ml-8 text-2xl font-semibold">Yearly</span>
          </label>
          <input
            type="checkbox"
            id="toggle"
            className="hidden "
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
        </div>
      </div>
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto"
      >
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="border py-10 md:px-6 px-4 rounded-lg shadow-2xl"
          >
            <h3 className="text-3xl font-bold text-center text-[#0D83AF]">
              {pkg.name}
            </h3>
            <p className="text-center my-5">{pkg.description}</p>
            <p className="text-center text-[#34B002] mt-5 text-4xl font-bold">
              {isYearly ? `$${pkg.yearlyPrice}` : `$${pkg.monthlyPrice}`}{" "}
              <span className="text-base text-[#0D83AF] font-medium">
                /{isYearly ? "year" : "month"}
              </span>
            </p>
            <ul className="mt-4 space-y-2 px-4 ">
              <li className="flex gap-3 items-center">
                <img className="h-[20px] w-5" src={pkg.happy} alt="happy"></img>
                Hardware Check-up
              </li>
              <li className="flex gap-3 items-center">
                <img className="h-[20px] w-5" src={pkg.happy} alt="happy"></img>
                Software check-up
              </li>
              <li className="flex gap-3 items-center">
                <img className="h-[20px] w-5" src={pkg.happy} alt="happy"></img>
                Report
              </li>
              <li className="flex gap-3 items-center">
                <img
                  className="h-[20px] w-5"
                  src={
                    pkg.name === "Basic"
                      ? sadImage
                      : pkg.name === "Advance"
                      ? happyImage
                      : pkg.happy
                  }
                  alt="happy"
                ></img>
                Network Check-up
              </li>
              <li className="flex gap-3 items-center">
                <img
                  className="h-[20px] w-5"
                  src={
                    pkg.name === "Basic"
                      ? sadImage
                      : pkg.name === "Advance"
                      ? sadImage
                      : pkg.happy
                  }
                  alt="happy"
                ></img>
                Network Secuirty Check-up
              </li>
              <li className="flex gap-3 items-center">
                <img
                  className="h-[20px] w-5"
                  src={
                    pkg.name === "Basic"
                      ? sadImage
                      : pkg.name === "Advance"
                      ? sadImage
                      : pkg.happy
                  }
                  alt="happy"
                ></img>
                CyberSec Implementation Report
              </li>
            </ul>
            <div className="w-full mx-auto mt-8  flex items-center justify-center">
              <button className="py-2 px-8 font-semibold bg-black text-white rounded hover:bg-[#34B002] transition duration-300;">
                Get this service
              </button>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Pricing;
