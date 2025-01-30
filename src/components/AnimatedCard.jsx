import React, { useState } from "react";
import { Card } from "./ui/card";

const AnimatedCard = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={`border-2 border-gray-300 rounded-lg overflow-hidden  
        ${isHovered ? "border-2 border-[#4FB5B9] bg-[#EBFCFC] " : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Black bar */}
      <div
        className={`h-12 p-6 flex items-center ${isHovered ? "border-1 border-white " : ""
          }`}
      >
        <div className="h-1 w-14 bg-[#4FB5B9]" />
      </div>

      {/* Wrapper to control both title and description smoothly */}
      <div className="relative h-36 sm:44 overflow-hidden">
        <div
          className={`absolute w-full p-3 pt-6 ps-8 font-semibold text-2xl font-poppins transition-transform duration-500 ${isHovered ? "-translate-y-full " : "translate-y-0 "
            }`}
        >
          {title}
        </div>

        <div
          className={`absolute w-full p-3 pt-6 ps-8 transition-transform duration-500 ${isHovered ? "translate-y-0 " : "translate-y-full "
            }`}
        >
          <ul className="list-disc list-inside">
            {Array.isArray(description) ? (
              description.map((item, index) => <li key={index}>{item}</li>)
            ) : (
              <li className="font-poppins font-normal">{description}</li>
            )}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className=" p-4 flex items-center">
        {/* <p className={`h-4 ${
            isHovered ? " text-[#4FB5B9]" : ""
          } `}>Learn More </p>
        <div
          className={`ms-2 mt-[0.7rem] transition-transform duration-300 ease-in-out transform origin-left ${
            isHovered ? "scale-x-[1.75] " : "scale-x-100"
          }`}
        >
          <ArrowIcon className={` ${ isHovered ? "text-[#4FB5B9] " : "" }`} />
        </div> */}
      </div>
    </Card>
  );
};

export default AnimatedCard;
