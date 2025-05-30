"use client";
import { CardWithImage } from "src/components/Cards";
import docImg from "../../../public/assets/TeamAbout.png";
import { cardWithFourthImgValue } from "../constants/constValues";
import youngConfident from "../../../public/assets/youngConfident.png";
import Maskgroup from "../../../public/assets/Maskgroup.png";
import VisionMission from "src/components/VisionMission";
import {
  CustomSoftwareDevelopmentIcon,
  PharmaNetworkDevelopmentServicesIcon,
} from "../helpers/svg";
import Link from "next/link";
import { TeamMembers } from "src/components/TeamMembers";
import { LowerQuote, Quote } from "../constants/svg";

const About = () => {
  return (
    <>
      <div className="pt-10 lg:pt-12 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-20 w-full  mx-auto">
        <p className="text-3xl mb-10 font-bold lg:font-semibold text-[26px] lg:text-[52px] leading-[1.1] font-poppins text-center">
          About SatuPharmTech
        </p>
      </div>

      <CardWithImage
        cardImg={docImg?.src}
        cardValue={cardWithFourthImgValue}
        isReversed={false}
      />

      {/* <div className="pt-10 lg:pt-28 w-full mx-auto">
        <p className="text-2xl md:text-4xl mb-10 font-semibold font-poppins text-center lg:text-left px-6 sm:px-10 md:px-16 lg:px-20 xl:px-20">
          Our Mission & Vision
        <VisionMission youngConfident={youngConfident} Maskgroup={Maskgroup} />
        </p>
      </div> */}

      <div className="pt-10 lg:pt-28 w-full mx-auto">
        <p className="text-2xl md:text-4xl mb-10 font-semibold font-poppins text-center lg:text-left px-6 sm:px-10 md:px-16 lg:px-20 xl:px-20">
          Our Mission & Vision
        </p>
        <VisionMission youngConfident={youngConfident} Maskgroup={Maskgroup} />
      </div>

      <div className="pt-10 lg:pt-20 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-20 w-full  mx-auto">
        <p className="text-2xl leading-[1.2] mb-10 font-bold font-poppins text-center md:text-left">
          Our Thought Leadership
        </p>
      </div>
      <TeamMembers />

      <div className="relative mt-20 bg-[#4FB5B9] mb-10 sm:mb-10 md:mb-16 lg:mb-10 xl:mb-10 text-white flex justify-center items-center text-center min-h-[250px]">
        <span className="absolute left-32 top-5">
          <Quote />
        </span>
        <div className="w-full md:h-60 lg:pt-10 mx-auto">
          <div className="px-0 sm:px-10 md:px-16 lg:px-20 xl:px-20 w-full max-w-[80%] mx-auto font-poppins text-xl md:text-xl xl:text-2xl p-10">
            Satu PharmTech stands tall as a leading platform that provides
            comprehensive support, from crop to cup —help establish businesses,
            connect with buyers, conduct research and market products and build
            software for digital transformation.
          </div>
        </div>
        <span className="absolute right-32 bottom-5">
          <LowerQuote />
        </span>
      </div>


      <div className="lg:pt-16 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-20 w-full  mx-auto">
        <p className="text-3xl mb-10 font-semibold font-poppins text-center md:text-right">
          What We Offer{" "}
        </p>
      </div>
      <div className="px-6 pb-10 sm:px-10 md:px-16 lg:px-20 xl:px-20 w-full  mx-auto">
        <div className="grid gap-6 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div className="p-6 border rounded-lg  bg-[#FEEDC6] border-[#FDC446]">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <div className="inline-block p-4 rounded-2xl border-2 border-[#FDC446]  bg-white">
                  <span className="text-2xl ">
                    <PharmaNetworkDevelopmentServicesIcon />
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-center lg:text-left">
                Pharma Network Development Services{" "}
              </h3>
            </div>

            <div className="p-6 border rounded-lg  bg-[#FEEDC6] border-[#FDC446]">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <div className="inline-block p-4 rounded-2xl border-2 border-[#FDC446]  bg-white">
                  <span className="text-2xl ">
                    <CustomSoftwareDevelopmentIcon />
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-center lg:text-left">
                Custom Software Development{" "}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#4FB5B9] text-white p-8 mt-10 md:mt-12 xl:mt-15">
        <div className="sm:px-10 md:px-16 lg:px-20 xl:px-20 w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-5">
              <h2 className="text-5xl font-bold">2</h2>
              <p className="text-lg">
                Decades of
                <br />
                Industry Experience
              </p>
            </div>

            <div className="space-y-5 border-t border-b md:border-t-0 md:border-b-0 py-6 md:border-l md:border-r px-6">
              <h2 className="text-5xl font-bold">78+</h2>
              <p className="text-lg">
                Dedicated
                <br />
                Professionals
              </p>
            </div>

            <div className="space-y-5">
              <h2 className="text-5xl font-bold">223</h2>
              <p className="text-lg">
                Supported
                <br />
                Business Establish
              </p>
            </div>
          </div>
        </div>
      </div>




      <div className="bg-[#EBFCFC] mt-20 mb-10 md:mb-20 border-t border-b  border-[#4FB5B9] py-10 px-6 md:px-16 flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#5ABFC3] max-w-6xl mx-auto">
          Whether you want to register a new Pharma company in India/Africa,
          start a new venture, or build a custom software solution on top of
          cutting-edge technologies, we can be at your service.
        </h2>
        <Link href="/contact">
          <button className="mt-6 bg-[#4FB5B9] px-20 text-white py-3 rounded-xl text-lg font-medium transition hover:bg-[#48A5A8]">
            Let&apos;s Connect
          </button>
        </Link>
      </div>
    </>
  );
};

export default About;
