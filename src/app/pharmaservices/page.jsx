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
      <MainImage isService={true} backgroundImageClass={'pharmaservice-image'} title1={"Pharma Growth Consultant & "} title2={"Network Development Company"} description={"With $3.01 trillion in nominal terms and $8.74 trillion in purchasing power parity (PPP) terms, Africa brings you a lucrative opportunity to start a pharmaceutical business. Wondering how? Satu PharmTech helps you establish a pharmaceutical company, including business and molecule registration, factory registration, setting distribution channels and even marketing your products. We provide end-to-end business consulting services. "} ctaText={"Contact Us, Now"} />
      <PharmaNetworkDevelopment />
      <div className="pt-10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-20 w-full  mx-auto">
        <h1 className={`text-3xl mb-5 font-semibold font-poppins text-right`}>Who We Are </h1>
      </div>
      <CardWithImage cardImg={docImg?.src} cardValue={cardWithThirdImgValue} isReversed={true} />


      <div className="pt-10 pb-20 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-20 w-full  mx-auto">
        <h2 className={`text-3xl font-semibold text-left mb-8 font-poppins`}>Why Use a Pharma Network Development Company</h2>
        <div className="grid gap-6 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border rounded-lg bg-[#FFF7E3] border-[#FFD059]">
              <div className="flex items-center mb-4">
                <div className="inline-block p-4 rounded-2xl border-2 border-[#FFD059] bg-white">
                  <span className="text-2xl"><UnderstandingTheAfricanMarketLandscapeIcon /></span>
                </div>
              </div>
              <h3 className="text-xl font-semibold">Understanding the African market landscape</h3>
              <p className="pt-4">
                A pharma network development company helps you with experts who understand the local market, its needs, and challenges.
              </p>
            </div>
            <div className="p-6 border rounded-lg bg-[#FFF7E3] border-[#FFD059]">
              <div className="flex items-center mb-4">
                <div className="inline-block p-4 rounded-2xl border-2 border-[#FFD059] bg-white">
                  <span className="text-2xl"><LocalDistributorsAndRepresentativeIcon /></span>
                </div>
              </div>
              <h3 className="text-xl font-semibold">Local distributors and representatives</h3>
              <p className="pt-4">
                Starting a business needs networking. That means you need distributors and representatives who will represent your business in the local market.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 border rounded-lg bg-[#FFF7E3] border-[#FFD059] mx-auto max-w-2xl">
              <div className="flex items-center mb-4">
                <div className="inline-block p-4 rounded-2xl border-2 border-[#FFD059] bg-white">
                  <span className="text-2xl"><RegulatoryAffairsConsultingIcon /></span>
                </div>
              </div>
              <h3 className="text-xl font-semibold">Regulatory affairs consulting</h3>
              <p className="pt-4">
                You cannot expect a company unless you meet the local and state regulatory norms; a pharma network development company helps you fulfill the compliance.
              </p>
            </div>
          </div>
        </div>


      </div>



      <div className="bg-[#EBFCFC] mb-10 md:mb-20 border-t border-b  border-[#4FB5B9] py-10 px-6 md:px-16 flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#5ABFC3]">
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
