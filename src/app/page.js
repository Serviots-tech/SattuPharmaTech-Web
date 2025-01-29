'use client'
import { CardWithImage } from "../components/Cards"
import CarouselSlider from "../components/CarouselSlider";
import MainImage from "../components/MainImage"
import ServicesCards from "../components/ServicesCards";
import RequestCall from "../components/RequestCall";
import FounderCard from "src/components/Founder";

export default function Home() {


  const cardImg = "/assets/Graph.jpg"
  return (
    <div className="w-full">
      < MainImage />

      <div className="lg:m-40 md:m-40 sm:m-32 mt-20 m-4">
        <CardWithImage cardImg={cardImg} />
      </div>

      <ServicesCards />

      <div className="">
        <CarouselSlider />
      </div>


      {/* Our case history */}
      {/* <div className="mt-10">
        <SoftwareCases />
      </div> */}

      {/* Our Team Members */}
      {/* <div className="pb-24 pt-10">
        <TeamMembers />
      </div> */}
      <div className="lg:m-40 md:m-40 sm:m-32 mt-20 m-4">
        <FounderCard />
      </div>

      {/* Request Call */}
      <div>
        <RequestCall />
      </div>

      {/* About Us */}
      {/* <div><AboutUs /></div> */}
    </div>

  );
}
