import Image from "next/image";
import React from "react";

const VisionMission = ({youngConfident,Maskgroup}) => {
  return (
    <>
      <div className=" sm:w-[65%] border-b-2 border-[#FDC446] relative items-center h-48 p-4 bg-[#FFF7E3] font-poppins">
        <Image
          src={youngConfident}
          className="absolute -right-14 -top-8 w-60 h-60 bg-red-500 rounded-[100%] md:hidden hidden lg:flex"
        />
        <p className="absolute lg:top-10 md:top-5 sm:top-6 lg:right-60 md:right-[32%] top-5 right-[25%]  text-4xl font-semibold font-poppins">
          Mission
        </p>
        <p className="absolute lg:ps-[6.4%] lg:top-[48%] md:top-[35%] md:ps-[18.4%] lg:right-60 md:right-[12%] top-[35%] text-lg font-poppins ">
          To help startups explore new opportunities in new markets and stay
          thriving!
        </p>
      </div>

      <div className=" sm:w-[65%] border-b-2 border-[#4FB5B9]  mt-10 sm:mt-20 relative items-center sm:h-44 h-52 p-4 bg-[#EBFCFC]  sm:ml-auto">
        <Image
          src={Maskgroup}
          className="absolute -left-14 -top-8 w-60 h-60 bg-red-500 rounded-[100%]  md:hidden hidden lg:flex"
        />
        <p className="absolute top-5 lg:left-[36%] md:left-[36%] sm:left-60 left-[25%] text-4xl font-semibold font-poppins">
          Vision
        </p>
        <p className="absolute pe-[6.4%] top-[35%] sm:left-60 lg:left-[36%] md:left-[20%] text-lg font-poppins ">
          To become a leader that defines a new way to help businesses with 100%
          success surety.
        </p>
      </div>
    </>
  );
};

export default VisionMission;
