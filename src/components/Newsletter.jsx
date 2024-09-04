import React, { useState } from "react";
import Modal from "../shared/Modal"; // Import the updated Modal component
import { motion } from "framer-motion";
import { fadeIn } from "../shared/Variants";
import ITguy from "../images/ITguy.svg";

function Newsletter() {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="md:px-14 max-w-screen-2xl mx-auto my-12">
      <div className="gradientBG rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
          {/* Banner Image */}
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img className="lg:h-[400px]" src={ITguy} alt="no pic" />
          </motion.div>
          {/* Banner Content */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="md:w3/5"
          >
            <h2 className=" md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed">
              Need another services?
            </h2>
            <p className="text-white text-2xl mb-8">
              We provide specific services based in our customer needs here a
              list service labors
            </p>
            <p className="text-white text-sm mb-8">
              PD. this list does not include the part cost is only the service.{" "}
              <br></br>
              if any require labor or service is not listed here, please feel
              free to call.
            </p>
            <div className="space-x-5 space-y-4">
              {isModalVisible && (
                <Modal isVisible={isModalVisible} onClose={handleCloseModal} />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
