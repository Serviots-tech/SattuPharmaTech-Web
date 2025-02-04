"use client";
import React from "react";
import MainImage from "src/components/MainImage";
import SoftwareNetworkDevelopment from "src/components/SoftwareDevelopmentNetwork";
import docImg from "../../../public/assets/SoftwareDevWhoWeAre.png";
import { cardWithThirdImgValue } from '../constants/constValues';
import { CardWithImage } from "src/components/Cards";
import Link from "next/link";
import { AgileSoftwareDevelopmentServicesIcon, QualityAssuranceIcon, ExpertDevelopmentTeamIcon, TransparencyIcon } from "../helpers/svg";

const Service = () => {

  return (
    <>
      <MainImage backgroundImageClass={'softwareservice-image'} title1={"Software Development & "} title2={"Consulting Services "} description={"Helping startups, entrepreneurs, and enterprises stay at the forefront of their industries with high-performing web and mobile applications and custom software solutions. We are offering cost effective services with uncompromised quality services."} ctaText={"Contact Us, Now"} />
      <SoftwareNetworkDevelopment />
      <div className="pt-10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-10 w-full  mx-auto">
        <h1 className={`text-3xl mb-5 font-semibold font-poppins text-right`}>Who We Are </h1>
      </div>
      <CardWithImage cardImg={docImg?.src} cardValue={cardWithThirdImgValue} isReversed={true} />


      <div className="pt-10 pb-10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-10 w-full  mx-auto">
        <h2 className={`text-3xl font-semibold text-left mb-8 font-poppins`}>Why Partner with Satu PhamTech?</h2>
        <div className="grid gap-6 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div className="p-6 border rounded-lg  bg-[#FFF7E3] border-[#FFD059]">
              <div className="flex items-center mb-4">
                <div className="inline-block p-4 rounded-2xl border-2 border-[#FFD059]  bg-white"><span className="text-2xl "><QualityAssuranceIcon /></span></div>
              </div>
              <h3 className="text-xl font-semibold">Quality assurance</h3>
              <p className="pt-4">
                We have export developers and hence deliver the best solutions following the process and using the right project management tools.</p>
            </div>

            <div className="p-6 border rounded-lg  bg-[#FFF7E3] border-[#FFD059]">
              <div className="flex items-center mb-4">
                <div className="inline-block p-4 rounded-2xl border-2 border-[#FFD059]  bg-white"><span className="text-2xl "><AgileSoftwareDevelopmentServicesIcon /></span></div>
              </div>
              <h3 className="text-xl font-semibold">Agile software development services</h3>
              <p className="pt-4">
                Being a top-rated software development company, be understand how important it is to deliver quality projects on time; hence, agile remains in our process.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border rounded-lg  bg-[#FFF7E3] border-[#FFD059]">
              <div className="flex items-center mb-4">
                <div className="inline-block p-4 rounded-2xl border-2 border-[#FFD059]  bg-white"><span className="text-2xl "><ExpertDevelopmentTeamIcon /></span></div>
              </div>
              <h3 className="text-xl font-semibold">Expert development team</h3>
              <p className="pt-4">
                Whether you want to develop a wave application, mobile application, custom software, or product, we have an expert team to handle your project.</p>
            </div>

            <div className="p-6 border rounded-lg  bg-[#FFF7E3] border-[#FFD059]">
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
        <h2 className="text-2xl md:text-3xl font-semibold text-[#5ABFC3]">
          Want to Start a New Pharma Business or Build Hospitals?
        </h2>
        <p className="text-gray-800 mt-3 text-base md:text-lg max-w-2xl">
          Connect with Africa and India’s Best team to help you explore, examine, &
          establish yourself as a reputed pharmaceutical company.
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
