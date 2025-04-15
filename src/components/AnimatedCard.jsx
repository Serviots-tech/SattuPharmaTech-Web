import React, { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { motion } from "framer-motion";

const AnimatedCard = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const isActive = isOpen || (!isMobile && isHovered);

  const toggleOpen = (e) => {
    if (isMobile === true) {
      e.stopPropagation();
      setIsOpen(!isOpen);
    }
  };
  return (
    <Card
      className={`relative border-2 border-gray-300 rounded-lg overflow-hidden ${
        isActive ? "border-2 border-[#378992] bg-[#378992]" : "bg-[#ECF7F8]"
      }`}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onClick={toggleOpen}
    >
      <div
        className={`h-8 p-0 flex items-center ${
          isActive ? "border-1 border-white " : ""
        }`}
      ></div>

      <motion.div
        className="absolute sm:right-12 right-6 w-6 h-6 flex items-center justify-center cursor-pointer pointer-events-auto z-10"
        onClick={toggleOpen}
        role="button"
        tabIndex={0}
      >
        <motion.div
          className={`absolute w-7 h-[3px] bg-[#378992] ${
            isActive ? "bg-[#ECF7F8] " : " bg-[#378992]"
          }`}
        />
        <motion.div
          className={`absolute w-[3px] h-7 bg-[#378992] ${
            isActive ? "bg-[#ECF7F8] " : " bg-[#378992]"
          }`}
          animate={{
            rotate: isActive ? -90 : 0,
            opacity: isActive ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Wrapper to control both title and description smoothly */}
      <div className="relative h-40  sm:pl-10 overflow-hidden">
        <div
          className={`absolute  sm:w-72 w-60 pt-0 ps-6 font-semibold text-xl font-poppins transition-transform duration-500 ${
            isActive ? "-translate-y-full " : "translate-y-0 "
          }`}
        >
          {title}
        </div>

        <div
          className={`absolute w-full p-3 pt-6 ps-6 transition-transform duration-500 ${
            isActive ? "translate-y-0 " : "translate-y-full "
          }`}
        >
          <ul
            className={`list-disc list-inside text-sm ${
              isActive ? "text-white" : "text-black"
            }`}
          >
            {Array.isArray(description) ? (
              description.map((item, index) => <li key={index}>{item}</li>)
            ) : (
              <li className="font-poppins text-sm font-normal">
                {description}
              </li>
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
