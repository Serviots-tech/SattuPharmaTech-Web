'use client'
import MainImage from "../components/MainImage"
import ExpertiseSection from "../components/ExpertiseSection";
import RequestCall from "../components/RequestCall";
import WhyChooseUs from "src/components/WhyChooseUsSection";
import ContactForm from 'src/components/ContactForm'
import CarouselSlider from 'src/components/CarouselSlider'

export default function Home() {

  return (
    <div className="w-full">
      < MainImage />

      {/* <div className="lg:m-40 md:m-40 sm:m-32 mt-20 m-4">
        <CardWithImage cardImg={cardImg} />
      </div> */}

      <ExpertiseSection />

      {/* <div className="">
        <CarouselSlider />
      </div> */}


      {/* Our case history */}
      {/* <div className="mt-10">
        <SoftwareCases />
      </div> */}

      {/* Our Team Members */}
      {/* <div className="pb-24 pt-10">
        <TeamMembers />
      </div> */}
      <div className="mt-20 mb-20">
        <WhyChooseUs />
      </div>
      <ContactForm/>

      {/* Request Call */}
      <div>
        <RequestCall />
      </div>

      {/* About Us */}
      {/* <div><AboutUs /></div> */}
    </div>

  );
}
