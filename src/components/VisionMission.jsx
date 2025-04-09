import Image from "next/image";
import React from "react";

const VisionMission = ({ youngConfident, Maskgroup }) => {
  return (
    <>
      <div className=" sm:w-[65%] border-b-2 border-[#FDC446] relative items-center h-60 lg:h-48 p-4 bg-[#FFF7E3] font-poppins mt-[120px] mb-[120px]">
        <Image
          src={youngConfident}
          // className="absolute -right-14 -top-8 w-60 h-60 bg-red-500 rounded-[100%] md:hidden hidden lg:flex"
          className="
          absolute 
          -top-20 left-1/2 transform -translate-x-1/2 
          w-40 h-40 rounded-full
          md:w-48 md:h-48
          lg:w-60 lg:h-60
          lg:top-[-2rem] lg:right-[-3.5rem] lg:left-auto lg:translate-x-0
        "
        />
        <p className="absolute sm:top-18 md:top-[50%] lg:top-10 lg:right-60 md:right-[32%] top-20 right-[25%]  text-4xl font-semibold font-poppins">
          Mission
        </p>
        <p className="absolute  lg:text-right lg:ps-[6.4%] lg:top-[48%] md:top-[65%] md:ps-[18.4%] lg:right-60 md:right-[12%] top-[60%] text-lg font-poppins text-center">
          To help startups explore new opportunities in new markets and stay
          thriving!
        </p>
      </div>

      <div className=" sm:w-[65%] border-b-2 border-[#4FB5B9]  mt-10 sm:mt-20 relative items-center h-72 sm:h-64 md:h-64 lg:h-48 p-4 bg-[#EBFCFC]  sm:ml-auto">
        <Image
          src={Maskgroup}
          // className="absolute -left-14 -top-8 w-60 h-60 bg-red-500 rounded-[100%]  md:hidden hidden lg:flex"
          className="
               absolute 
               -top-20 left-1/2 transform -translate-x-1/2 
               w-40 h-40 rounded-full
               md:w-48 md:h-48
               lg:w-60 lg:h-60
               lg:top-[-2rem] lg:left-[-3.5rem] lg:translate-x-0
               "
        />
        <p className="absolute top-[30%] sm:top-18 sm:top-[45%] lg:top-[25%] md:top-[45%] lg:left-[36%] md:left-[36%] left-[25%] text-4xl font-semibold font-poppins">
          Vision
        </p>
        <p className="absolute text-center lg:text-left pe-[6.4%] top-[50%] sm:top-[60%] md:top-[60%] lg:top-[50%] lg:left-[36%] md:left-[20%] text-lg font-poppins ">
          To become a leader that defines a new way to help businesses with 100%
          success surety.
        </p>
      </div>
    </>
  );
};

export default VisionMission;
