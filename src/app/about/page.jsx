"use client";
import { CardWithImage } from "src/components/Cards";
import docImg from "../../../public/assets/TeamAbout.png";
import { cardWithFourthImgValue } from "../constants/constValues";
import Image from "next/image";
import youngConfident from "../../../public/assets/youngConfident.png";
import Maskgroup from "../../../public/assets/Maskgroup.png";
import VisionMission from "src/components/VisionMission";

const About = () => {
  return (
    <>
      <div className="pt-10 pb-10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-20 w-full  mx-auto">
        <p className="text-3xl mb-10 font-semibold font-poppins text-center">
          About SatuPharmTech
        </p>
        <CardWithImage
          cardImg={docImg?.src}
          cardValue={cardWithFourthImgValue}
          isReversed={false}
        />

        <p className="text-3xl mb-10 font-semibold font-poppins text-left">
          Our Mission & Vision
        </p>

       <VisionMission youngConfident={youngConfident} Maskgroup={Maskgroup}/>
      </div>
    </>
  );
};

export default About;
