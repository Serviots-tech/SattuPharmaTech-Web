import React, { useState } from "react";
import { Card } from "./ui/card";
import { motion } from "framer-motion";

const AnimatedCard = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={`relative border-2 border-gray-300 rounded-lg overflow-hidden  
        ${
          isHovered ? "border-2 border-[#378992] bg-[#378992] " : "bg-[#ECF7F8]"
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      <div
        className={`h-8 p-0 flex items-center ${
          isHovered ? "border-1 border-white " : ""
        }`}
      ></div>

      <motion.div className="absolute right-12 w-6 h-6 flex items-center justify-center">
        <motion.div
          className={`absolute w-7 h-[3px] bg-[#378992] ${
            isHovered ? "bg-[#ECF7F8] " : " bg-[#378992]"
          }`}
        />
        <motion.div
          className={`absolute w-[3px] h-7 bg-[#378992] ${
            isHovered ? "bg-[#ECF7F8] " : " bg-[#378992]"
          }`}
          animate={{
            rotate: isHovered ? -90 : 0,
            opacity: isHovered ? 0 : 1,
          }} // Rotates & hides when open
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      {/* Wrapper to control both title and description smoothly */}
      <div className="relative h-40  pl-10 overflow-hidden">
        <div
          className={`absolute w-72  pt-0 ps-6 font-semibold text-xl font-poppins transition-transform duration-500 ${
            isHovered ? "-translate-y-full " : "translate-y-0 "
          }`}
        >
          {title}
        </div>

        <div
          className={`absolute w-full p-3 pt-6 ps-6 transition-transform duration-500 ${
            isHovered ? "translate-y-0 " : "translate-y-full "
          }`}
        >
          <ul
            className={`list-disc list-inside text-sm ${
              isHovered ? "text-white" : "text-black"
            }`}
          >
            {Array.isArray(description) ? (
              description.map((item, index) => <li key={index}>{item}</li>)
            ) : (
              <li className="font-poppins text-sm font-normal">{description}</li>
            )}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className=" p-1 flex items-center "></div>
    </Card>
  );
};

export default AnimatedCard;
