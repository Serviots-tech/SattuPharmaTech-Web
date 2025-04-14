"use client";
import React from "react";
import MainImage from "src/components/MainImage";
import PharmaNetworkDevelopment from "src/components/PharmaNetworkDevelopment";
import docImg from "../../../public/assets/DocWithLaptop.png";
import { cardWithThirdImgValue } from '../constants/constValues';
import { CardWithImage } from "src/components/Cards";
import Link from "next/link";
import {  UnderstandingTheAfricanMarketLandscapeIcon, RegulatoryAffairsConsultingIcon, LocalDistributorsAndRepresentativeIcon } from "../helpers/svg";

const Service = () => {

  return (
    <>
      <MainImage isService={true} backgroundImageClass={'pharmaservice-image'} title1={"Pharma Growth Consultant & "} title2={"Network Development Company"} description={"With $3.01 trillion in nominal terms and $8.74 trillion in purchasing power parity (PPP) terms, Africa brings you a lucrative opportunity to start a pharmaceutical business. Wondering how? Satu PharmTech helps you establish a pharmaceutical company, including business and molecule registration, factory registration, setting distribution channels and even marketing your products. We provide end-to-end business consulting services. "} ctaText={"Contact Us, Now"} mobileDescription={"Satu PhamTech helps bulk buyers, importers, and distributors establish a pharmaceutical company, including molecule/factory registration, setting distribution channels and even marketing your products."} />

      <div className="hidden md:flex justify-center">
            <div className="z-20 w-[90vw] mx-auto xl:-mt-10 lg:-mt-10 md:-mt-10  lg:py-10 bg-[#FEEDC6] rounded-[16px] shadow-lg p-4">
              <div className="bg-[#FEEDC6]">
                <div className="container mx-auto px-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 items-center text-center gap-4 md:gap-0 relative">

                    {/* Left Text */}
                    <div className="px-2">
                      <h3 className="text-lg md:text-xl font-poppins font-light">
                        <i>
                        Hospital set up
                        </i>
                      </h3>
                    </div>

                    {/* Center Text */}
                    <div className="px-2 md:border-x md:border-gray-400">
                      <h3 className="text-lg md:text-xl font-poppins font-light">
                        <i>
                        Research and development
                        </i>
                      </h3>
                    </div>
                    {/* Right Text */}
                    <div className="px-2">
                      <h3 className="text-lg md:text-xl font-poppins font-light">
                        <i>
                        Distribution Channel
                        </i>
                      </h3>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

      <PharmaNetworkDevelopment />
      <div className="pt-10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-20 w-full  mx-auto">
        <h1 className={` text-[24px] md:text-4xl mb-5 font-semibold font-poppins text-right`}>Who We Are </h1>
      </div>
      <CardWithImage cardImg={docImg?.src} cardValue={cardWithThirdImgValue} isReversed={true} />


      <div className="pt-10 pb-20 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-20 w-full  mx-auto">
        <h2 className={`text-[24px] md:text-4xl font-semibold text-left mb-8 font-poppins`}>Why Use a Pharma Network Development Company?</h2>
        <div className="grid gap-6 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border rounded-lg bg-[#FEEDC6] border-[#FDC446]">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <div className="inline-block p-4 rounded-2xl border-2 border-[#FDC446] bg-white">
                  <span className="text-2xl"><UnderstandingTheAfricanMarketLandscapeIcon /></span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center lg:text-left">Understanding the African market landscape</h3>
              <p className="pt-4 text-center lg:text-left">
                A pharma network development company helps you with experts who understand the local market, its needs, and challenges.
              </p>
            </div>
            <div className="p-6 border rounded-lg bg-[#FEEDC6] border-[#FDC446]">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <div className="inline-block p-4 rounded-2xl border-2 border-[#FDC446] bg-white">
                  <span className="text-2xl"><LocalDistributorsAndRepresentativeIcon /></span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center lg:text-left">Local distributors and representatives</h3>
              <p className="pt-4 text-center lg:text-left">
                Starting a business needs networking. That means you need distributors and representatives who will represent your business in the local market.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 border rounded-lg bg-[#FEEDC6] border-[#FDC446] mx-auto max-w-2xl">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <div className="inline-block p-4 rounded-2xl border-2 border-[#FDC446] bg-white">
                  <span className="text-2xl"><RegulatoryAffairsConsultingIcon /></span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center lg:text-left">Regulatory affairs consulting</h3>
              <p className="pt-4 text-center lg:text-left">
                You cannot expect a company unless you meet the local and state regulatory norms; a pharma network development company helps you fulfill the compliance.
              </p>
            </div>
          </div>
        </div>


      </div>



      <div className="bg-[#EBFCFC] mb-10 md:mb-20 border-t border-b  border-[#4FB5B9] py-10 px-6 md:px-16 flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-4xl font-semibold text-[#5ABFC3]">
          Want to Start a New Pharma Business or Build Hospitals?
        </h2>
        <p className="text-gray-800 mt-3 text-base md:text-lg max-w-2xl">
        Connect with Africa’s and India’s best team to help you explore, examine, &
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
