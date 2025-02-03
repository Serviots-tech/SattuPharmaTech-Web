"use client";
import { CardWithImage } from "src/components/Cards";
import docImg from "../../../public/assets/TeamAbout.png";
import { cardWithFourthImgValue } from '../constants/constValues';

const About = () => {
  return (
    <>
     <div className="pt-10 pb-10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-10 w-full  mx-auto">
      <p className="text-3xl mb-10 font-semibold font-poppins text-center">About SatuPharmTech</p>
      <CardWithImage cardImg={docImg?.src} cardValue={cardWithFourthImgValue} isReversed={false} />

      <p className="text-3xl mb-10 font-semibold font-poppins text-left">Our Mission & Vision</p>
      <div className="w-full max-w-6xl mx-auto py-12 px-4">
      {/* Mission Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-16 bg-amber-50 rounded-3xl overflow-hidden">
        <div className="p-8 md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">MISSION</h2>
          <p className="text-xl leading-relaxed">
            To help startups explore new opportunities in new markets and stay thriving!
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="relative w-full aspect-square">
            <img 
              src="/api/placeholder/600/600"
              alt="Team collaborating"
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between bg-sky-50 rounded-3xl overflow-hidden">
        <div className="md:w-1/2">
          <div className="relative w-full aspect-square">
            <img 
              src="/api/placeholder/600/600"
              alt="Professional team"
              className="rounded-full object-cover"
            />
          </div>
        </div>
        <div className="p-8 md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">VISION</h2>
          <p className="text-xl leading-relaxed">
            To become a leader that defines a new way to help businesses with 100% success surety.
          </p>
        </div>
      </div>
    </div>
      </div>
    </>
  );
};

export default About;
