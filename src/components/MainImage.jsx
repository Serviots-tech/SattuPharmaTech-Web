"use client";
import React from "react";
import "./index.css";
import Link from "next/link";
import MainImgCarouselSlider from "./MainImgCarouselSlider";

const MainImage = ({
  title1,
  title2,
  description,
  ctaText,
  backgroundImageClass,
  images,
  mainImgData,
  landingPage,
  mobileDescription,
}) => {
  return (
    <>
      {!landingPage ? (
        <>
          <div
            className={`${backgroundImageClass} relative flex flex-col items-center justify-center w-full color`}
          >
            <div className="pt-2 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-20 w-full  mx-auto">
              <div className="text-center md:text-left">
                <div
                  className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold font-poppins"
                  style={{
                    wordWrap: "break-word",
                    whiteSpace: "normal",
                  }}
                >
                  <p className="mt-4 sm:mt-10 text-white">
                    {title1 ?? "Bridging Continents,"}
                  </p>
                  <p className="mt-2 text-white">
                    {title2 ?? "Empowering Industries"}
                  </p>
                </div>

                <div
                  className={`h-12 mt-2 flex justify-center sm:justify-normal  items-center }`}
                >
                  <div className="h-1 w-14  bg-[#4FB5B9]" />
                </div>

                <p className="text-white block md:hidden font-normal text-base">
                  {mobileDescription}
                </p>

                <p className="mt-4 max-md:hidden text-lg text-white font-light max-w-screen-md mx-auto md:mx-0">
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
        </>
      ) : (
        <>
          <MainImgCarouselSlider
            images={images}
            autoPlay={true}
            interval={4000}
            title1={title1}
            title2={title2}
            description={description}
            ctaText={ctaText}
            mainImgData={mainImgData}
          />
          
          <div className="hidden md:flex justify-center">
            <div className="z-20 w-[90vw] mx-auto xl:-mt-10 lg:-mt-10 md:-mt-10  lg:py-10 bg-[#FEEDC6] rounded-[16px] shadow-lg p-4">
              <div className="bg-[#FEEDC6]">
                <div className="container mx-auto px-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 items-center text-center gap-4 md:gap-0 relative">

                    {/* Left Text */}
                    <div className="px-2">
                      <h3 className="text-lg md:text-xl font-poppins font-light">
                        <i>
                          {backgroundImageClass === "pharmaservice-image"
                            ? "Hospital setup"
                            : backgroundImageClass === "softwareservice-image"
                              ? "Custom Software Solutions"
                              : "Expand Markets"}
                        </i>
                      </h3>
                    </div>

                    {/* Center Text */}
                    <div className="px-2 md:border-x md:border-gray-400">
                      <h3 className="text-lg md:text-xl font-poppins font-light">
                        <i>
                          {backgroundImageClass === "pharmaservice-image"
                            ? "Research and development"
                            : backgroundImageClass === "softwareservice-image"
                              ? "Native Mobile Applications"
                              : "Navigate Regulations"}
                        </i>
                      </h3>
                    </div>

                    {/* Right Text */}
                    <div className="px-2">
                      <h3 className="text-lg md:text-xl font-poppins font-light">
                        <i>
                          {backgroundImageClass === "pharmaservice-image"
                            ? "Distribution Channel"
                            : backgroundImageClass === "softwareservice-image"
                              ? "Web Applications"
                              : "Drive Innovation"}
                        </i>
                      </h3>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MainImage;
