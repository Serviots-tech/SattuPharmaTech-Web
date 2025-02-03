"use client";
import React from "react";
import "./index.css";
import Link from "next/link";

const MainImage = ({
  title1,
  title2,
  description,
  ctaText,
  backgroundImageClass
}) => {
  return (
    <>
      {/* <div
        className={`${
          // isService ? "pharmaservice-image" : "main-image" 
          backgroundImageClass
        } relative flex flex-col items-center justify-center w-full`}
      >
        {/* <div className="pt-10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-32 w-full "> */}
        <div className="pt-2 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-10 w-full  mx-auto">
          <div className="text-center md:text-left">
            <div
              className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold font-poppins"
              style={{
                wordWrap: "break-word",
                whiteSpace: "normal",
              }}
            >
              <p className="mt-4 sm:mt-10 text-black">
                {title1 ?? "Bridging Continents,"}
              </p>
              <p className="mt-2 text-black">
                {title2 ?? "Empowering Industries"}
              </p>
            </div>

            <div
              className={`h-12 mt-2 flex justify-center sm:justify-normal  items-center }`}
            >
              <div className="h-1 w-14  bg-[#4FB5B9]" />
            </div>

            <p className="mt-4 max-md:hidden text-lg text-black font-light max-w-screen-md mx-auto md:mx-0">
              {description ??
                "Unlock new opportunities in Pharmaceuticals & IT with our strategic solutions connecting India & Africa."}
            </p>

            <div className="mt-8 flex justify-center md:justify-start">
              <Link href="/contact">
                <button className=" sm:w-auto bg-custom-bg font-medium font-poppins text-lg text-white py-2 px-6 rounded hover:bg-[#44ABB6]">
                  {ctaText ?? "Explore Our Services"}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className=" z-20 w-[84vw]  mx-auto grid justify-center xl:-mt-8 lg:-mt-12 md:-mt-10 -mt-16 lg:py-10 bg-[#FFF7E3] rounded-lg shadow-lg p-4 space-x-4 md:space-x-8">
          <div className="bg-[#FFF7E3]">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center items-center text-center gap-6 md:gap-4 ">
                <h3 className="text-lg md:text-xl font-poppins font-light">
                  <i>{backgroundImageClass==="pharmaservice-image" ? 'Manufacturing set up' : backgroundImageClass==="softwareservice-image"?  'Custom Software Solutions': 'Expand Markets' }</i>
                </h3>
                <span className="hidden md:block text-xl text-gray font-thin">
                  |
                </span>
                <h3 className="text-lg md:text-xl font-poppins font-light">
                  {" "}
                  <i>{backgroundImageClass==="pharmaservice-image" ? 'Research and development' : backgroundImageClass==="softwareservice-image"?  'Native Mobile Applications' : 'Navigate Regulations'}</i>
                </h3>
                <span className="hidden md:block text-xl text-gray font-thin">
                  |
                </span>
                <h3 className="text-lg md:text-xl font-poppins font-light">
                  <i> {backgroundImageClass==="pharmaservice-image" ? 'Distribution' : backgroundImageClass==="softwareservice-image"?  'Web Applications' : 'Drive Innovation'}</i>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div> */}


      
    </>
  );
};

export default MainImage;
