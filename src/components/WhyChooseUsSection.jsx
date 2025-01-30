import React from "react";
import { SpecialisedExpertsIcon } from '../app/helpers/svg'
import { FreshPerspectiveIcon } from '../app/helpers/svg'
import { StrategicGuidanceIcon } from '../app/helpers/svg'
import { ImplementationSupportIcon } from '../app/helpers/svg'

const WhyChooseUs = () => {
  return (
    <div className="pt-10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-0 w-full max-w-screen-xl mx-auto">
      <h2 className="text-3xl font-bold text-right mb-8">Why Choose Us?</h2>

      <div className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div className="p-6 border rounded-lg shadow-md bg-[#FCFCFC]">
            <div className="flex items-center mb-4">
              <div class="inline-block p-4 rounded-2xl border-2 border-[#E0E0E0]  bg-white"><span className="text-2xl "><SpecialisedExpertsIcon /></span></div>
            </div>
            <h3 className="text-xl font-semibold">Specialised Experts</h3>
            <p className="pt-4">
              Starting a pharmaceutical business in India or Africa requires expert help with industry knowledge, and we've experts who follow the best practices.
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow-md bg-[#FCFCFC]">
            <div className="flex items-center mb-4">
              <div class="inline-block p-4 rounded-2xl border-2 border-[#E0E0E0]  bg-white"><span className="text-2xl "><FreshPerspectiveIcon /></span></div>
            </div>
            <h3 className="text-xl font-semibold">FreshPerspectiveIcon</h3>
            <p className="pt-4">
              We conduct SWOT analysis to understand strengths, weaknesses, opportunities, and threats and provide an unbiased view of your business.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg shadow-md bg-[#FCFCFC]">
            <div className="flex items-center mb-4">
              <div class="inline-block p-4 rounded-2xl border-2 border-[#E0E0E0]  bg-white"><span className="text-2xl "><StrategicGuidanceIcon /></span></div>
            </div>
            <h3 className="text-xl font-semibold">Implementation Support</h3>
            <p className="pt-4">
              We not only help you find opportunities and build solutions but also help you implement solutions, strategies, and initiatives.
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow-md bg-[#FCFCFC]">
            <div className="flex items-center mb-4">
              <div class="inline-block p-4 rounded-2xl border-2 border-[#E0E0E0]  bg-white"><span className="text-2xl "><ImplementationSupportIcon /></span></div>
            </div>
            <h3 className="text-xl font-semibold">Strategic Guidance</h3>
            <p className="pt-4">
              Helping businesses with comprehensive growth strategies, including finding the right opportunities, market expansion, business strategies, product development, & software consulting.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default WhyChooseUs;
