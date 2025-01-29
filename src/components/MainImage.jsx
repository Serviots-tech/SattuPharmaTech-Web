"use client";
import React from "react";
import "./index.css";

const MainImage = () => {
  return (
    <>
        <div className="main-image relative flex flex-col items-center justify-center w-full">
          <div className="pt-10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-32 w-full ">
              <div className="text-center md:text-left">
                <div
                  className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold font-poppins"
                  style={{
                    wordWrap: "break-word",
                    whiteSpace: "normal",
                  }}
                >
                  <p className="mt-4 sm:mt-10 text-black">
                    Bridging Continents,
                  </p>
                  <p className="mt-2 text-black">
                    Empowering Industries
                  </p>
                </div>

                <p className="mt-4 text-lg text-black font-light max-w-lg mx-auto md:mx-0">
                  Unlock new opportunities in Pharmaceuticals & IT with our
                  strategic solutions connecting India & Africa.
                </p>

                <div className="mt-8 flex justify-center md:justify-start">
                  <button className="w-full sm:w-auto bg-custom-bg font-medium font-poppins text-lg text-white py-2 px-6 rounded hover:bg-[#44ABB6]">
                  Explore Our Services
                  </button>
                </div>
              </div>
          </div>
        </div>
      <div className="flex justify-center">
        <div className=" z-20 w-[84vw] max-w-screen-xl mx-auto grid justify-center -mt-16 lg:py-10 bg-[#FFF7E3] rounded-lg shadow-lg p-4 space-x-4 md:space-x-8">
        <div class="bg-[#FFF7E3]">
            <div class="container mx-auto px-4">
              <div class="flex flex-wrap justify-center items-center text-center gap-6 md:gap-10 lg:gap-32">
                <h3 class="text-lg md:text-xl font-poppins font-light"><i> Expand Markets </i></h3>
                <span class="hidden md:block text-xl text-gray font-thin">|</span>
                <h3 class="text-lg md:text-xl font-poppins font-light"> <i>Navigate Regulations</i></h3>
                <span class="hidden md:block text-xl text-gray font-thin">|</span>
                <h3 class="text-lg md:text-xl font-poppins font-light"><i> Drive Innovation</i></h3>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default MainImage;
