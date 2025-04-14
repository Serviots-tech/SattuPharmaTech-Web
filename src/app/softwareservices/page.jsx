"use client";
import React from "react";
import MainImage from "src/components/MainImage";
import SoftwareNetworkDevelopment from "src/components/SoftwareDevelopmentNetwork";
import docImg from "../../../public/assets/SoftwareDevWhoWeAre.png";
import { cardWithFifthImgValue } from '../constants/constValues';
import { CardWithImage } from "src/components/Cards";
import Link from "next/link";
import { AgileSoftwareDevelopmentServicesIcon, QualityAssuranceIcon, ExpertDevelopmentTeamIcon, TransparencyIcon } from "../helpers/svg";

const Service = () => {

  return (
    <>
      <MainImage backgroundImageClass={'softwareservice-image'} title1={"Software Development & "} title2={"Consulting Services "} description={"Helping startups, entrepreneurs, and enterprises stay at the forefront of their industries with high-performing web and mobile applications and custom software solutions. We are offering cost effective services with uncompromised quality services."} ctaText={"Contact Us, Now"} mobileDescription={"Helping startups, entrepreneurs, and enterprises stay at the forefront of their industries with high-performing web and mobile applications and custom software solutions. We are offering cost effective services with uncompromised quality services. "} />

      <div className="hidden md:flex justify-center">
            <div className="z-20 w-[90vw] mx-auto xl:-mt-10 lg:-mt-10 md:-mt-10  lg:py-10 bg-[#FEEDC6] rounded-[16px] shadow-lg p-4">
              <div className="bg-[#FEEDC6]">
                <div className="container mx-auto px-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 items-center text-center gap-4 md:gap-0 relative">

                    {/* Left Text */}
                    <div className="px-2">
                      <h3 className="text-lg md:text-xl font-poppins font-light">
                        <i>
                        Expand Markets
                        </i>
                      </h3>
                    </div>

                    {/* Center Text */}
                    <div className="px-2 md:border-x md:border-gray-400">
                      <h3 className="text-lg md:text-xl font-poppins font-light">
                        <i>
                        Navigate Regulations
                        </i>
                      </h3>
                    </div>
                    {/* Right Text */}
                    <div className="px-2">
                      <h3 className="text-lg md:text-xl font-poppins font-light">
                        <i>
                        Drive Innovation
                        </i>
                      </h3>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

      <SoftwareNetworkDevelopment />
      <div className="pt-10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-20 w-full  mx-auto">
        <h1 className={` text-[24px] md:text-4xl text-center mb-5 font-semibold font-poppins md:text-right`}>Who We Are </h1>
      </div>
      <CardWithImage cardImg={docImg?.src} cardValue={cardWithFifthImgValue} isReversed={true} isUnderlineForTitle={false} />
      

      <div className="pt-10 pb-10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-20 w-full  mx-auto text-center lg:text-left ">
        <h2 className={`text-[24px] md:text-4xl font-semibold text-left mb-8 font-poppins`}>Why Partner with Satu PharmTech?</h2>
        <div className="grid gap-6 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div className="p-6 border rounded-lg flex flex-col items-center bg-[#FEEDC6] border-[#FDC446] lg:block">
              <div className="flex items-center mb-4">
                <div className="inline-block p-4 rounded-2xl border-2 border-[#FFD059]  bg-white"><span className="text-2xl "><QualityAssuranceIcon /></span></div>
              </div>
              <h3 className="text-xl font-semibold">Quality assurance</h3>
              <p className="pt-4 ">
              We have expert developers and deliver the best solutions following the process and using the right project management tools.</p>
            </div>

            <div className="p-6 border rounded-lg flex flex-col items-center bg-[#FEEDC6] border-[#FDC446] lg:block">
              <div className="flex items-center mb-4">
                <div className="inline-block p-4 rounded-2xl border-2 border-[#FFD059]  bg-white"><span className="text-2xl "><AgileSoftwareDevelopmentServicesIcon /></span></div>
              </div>
              <h3 className="text-xl font-semibold">Agile software development services</h3>
              <p className="pt-4">
                Being a top-rated software development company, We understand how important it is to deliver quality projects on time; hence, agile remains in our process.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border rounded-lg  bg-[#FEEDC6] border-[#FDC446] flex flex-col items-center lg:block">
              <div className="flex items-center mb-4">
                <div className="inline-block p-4 rounded-2xl border-2 border-[#FFD059]  bg-white"><span className="text-2xl "><ExpertDevelopmentTeamIcon /></span></div>
              </div>
              <h3 className="text-xl font-semibold">Expert development team</h3>
              <p className="pt-4">
              Whether you want to develop a web application, mobile application, custom software, or product, we have an expert team to handle your project.</p>
            </div>

            <div className="p-6 border rounded-lg bg-[#FEEDC6] border-[#FDC446] flex flex-col items-center lg:block">
              <div className="flex items-center mb-4">
                <div className="inline-block p-4 rounded-2xl border-2 border-[#FFD059]  bg-white"><span className="text-2xl "><TransparencyIcon /></span></div>
              </div>
              <h3 className="text-xl font-semibold">Transparency</h3>
              <p className="pt-4">
                We set clear communications from the start. It begins with signing an NDA and keeping everything on paper, from scope to deliverables.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#EBFCFC] mb-10 md:mb-20 border-t border-b  border-[#4FB5B9] py-10 px-6 md:px-16 flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-4xl font-semibold text-[#5ABFC3]">
        Want to Build a Scalable Software for Web & Mobile?
        </h2>
        <p className="text-gray-800 mt-3 text-base md:text-lg max-w-2xl md:text-[20px]">
        Connect with Satu PhamTech and actualize your dream projects powered by the industry’s #1% developers.
        </p>
        <Link href="/contact">
          <button className="mt-6 bg-[#4FB5B9] px-20 text-white py-3 rounded-xl text-lg font-medium transition hover:bg-[#48A5A8]">
            Let’s Connect
          </button>
        </Link>
      </div>
    </>
  );
};

export default Service;
