import React from "react";
import { SpecialisedExpertsIcon } from '../app/helpers/svg'
import { FreshPerspectiveIcon } from '../app/helpers/svg'
import { StrategicGuidanceIcon } from '../app/helpers/svg'
import { ImplementationSupportIcon } from '../app/helpers/svg'

const WhyChooseUs = ({align}) => {
  return (
    <div className="pt-10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-20 w-full mx-auto">
        <h2 className={`text-2xl md:text-[36px] leading-[120%] text-[#000000] font-bold md:font-semibold text-center md:text-${align ?? 'left'} mb-8 font-poppins`}>Why Partner with Satu PharmTech</h2>
      <p className={`mt-4 md:max-w-[75%] text-lg md:text-[18px] text-center md:text-${align ?? 'left'} leading-[120%] tracking-[0.5%]`}>
      We offer strategic and comprehensive solutions to people from India who want to start a pharmaceutical business in Africa or vice versa. Satu PharmTech helps companies overcome internal blind spots and provides tailored solutions that assist in reaching goals.
          </p>
      <div className="grid gap-6 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div className="md:p-6 p-8 border rounded-2xl text-center md:text-left bg-[#FEEDC6] border-[#FDC446]">
            <div className="flex md:justify-start justify-center items-center mb-4">
              <div className="inline-block p-4 rounded-2xl border-2 border-[#FDC446]  bg-white"><span className="text-2xl "><SpecialisedExpertsIcon /></span></div>
            </div>
            <h3 className="text-xl font-semibold text-[#000000] font-poppins">Specialized Experts</h3>
            <p className="pt-4 text-md md:text-[16px] leading-[120%] font-normal text-[#000000]">
              Starting a pharmaceutical business in India or Africa requires expert help with industry knowledge, and we&apos;ve experts who follow the best practices.
            </p>
          </div>

          <div className="md:p-6 p-8 border rounded-2xl text-center md:text-left  bg-[#FEEDC6] border-[#FDC446]">
            <div className="flex md:justify-start justify-center items-center mb-4">
              <div className="inline-block p-4 rounded-2xl border-2 border-[#FDC446] bg-white"><span className="text-2xl "><FreshPerspectiveIcon /></span></div>
            </div>
            <h3 className="text-xl font-semibold text-[#000000] font-poppins">Fresh Perspective</h3>
            <p className="pt-4 text-[16px] leading-[120%] font-normal text-[#000000]">
              We conduct SWOT analysis to understand strengths, weaknesses, opportunities, and threats and provide an unbiased view of your business.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:p-6 p-8 border rounded-2xl text-center md:text-left bg-[#FEEDC6] border-[#FDC446]">
            <div className="flex md:justify-start justify-center items-center mb-4">
              <div className="inline-block p-4 rounded-2xl border-2 border-[#FDC446]  bg-white"><span className="text-2xl "><ImplementationSupportIcon /></span></div>
            </div>
            <h3 className="text-xl font-semibold text-[#000000] font-poppins">Implementation Support</h3>
            <p className="pt-4 text-[16px] leading-[120%] font-normal text-[#000000]">
              We not only help you find opportunities and build solutions but also help you implement solutions, strategies, and initiatives.
            </p>
          </div>

          <div className="md:p-6 p-8 border rounded-2xl text-center md:text-left bg-[#FEEDC6] border-[#FDC446]">
            <div className="flex md:justify-start justify-center items-center mb-4">
              <div className="inline-block p-4 rounded-2xl border-2 border-[#FDC446]  bg-white"><span className="text-2xl "><StrategicGuidanceIcon /></span></div>
            </div>
            <h3 className="text-xl font-semibold text-[#000000] font-poppins">Strategic Guidance</h3>
            <p className="pt-4 text-[16px] leading-[120%] font-normal text-[#000000]">
              Helping businesses with comprehensive growth strategies, including finding the right opportunities, market expansion, business strategies, product development, & software consulting.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default WhyChooseUs;
