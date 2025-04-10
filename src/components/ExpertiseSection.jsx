import React from "react";
import AnimatedCard from "./AnimatedCard";
import Link from "next/link";

const PharmaNetworkDevelopmentServicesData = [
  {
    title: "Assistance for Market Entry",
    description: [
      "Company registration",
      "Fulfilling regulatory norms",
      "Connecting with distributors",
      "Marketing your products",
      "Joint Ventures",
    ],
  },
  {
    title: "Data Sheets & Market Research",
    description: [
      "Conduct marketing research",
      "Conduct SWOT analysis",
      "Create user persona",
      "Understand market needs & challenges",
      "Create solutions that solve problems",
    ],
  },
];
const SoftwareDevelopmentServicesData = [
  {
    title: "Services We Offer",
    description: [
      "AI and Data Science Solutions",
      "ERP Solutions",
      "Network Security Services",
      "Mobile Application Development",
      "IoT and Hardware Solutions",
    ],
  },
];

const ExpertiseSection = ({ align }) => {
  return (
    <section className=" py-10 px-2">
      {/* <div className="pt-10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-32 w-full "> */}
      <div className="pt-10 px-2 sm:px-10 md:px-16 lg:px-20 xl:px-20 w-full mx-auto">
        <div className={`mx-auto md:text-${align ?? "left"} text-center`}>
          <h2 className="text-[24px] md:text-[36px] font-bold md:font-semibold text-[#000000] font-poppins leading-[120%]">
            Our Pharma & Software Development Services
          </h2>
          <p className="mt-4 md:max-w-[80%] font-poppins font-normal text-base md:text-lg">
            From helping you launch your pharmaceutical business in the African
            market, Manufacturing and Hospital Setup, and marketing your
            product/services to targeted customers to building smart and
            scalable software solutions, including web and mobile applications,
            Satu PharmTech is your reliable partner. Let&apos;s find out the
            services we offer.
          </p>
        </div>
        <div className="mx-auto text-left">
          <div className="text-[22px] md:text-[28px] mt-10 text-[#4FB5B9] font-poppins font-semibold">
            <Link href={"/pharmaservices"}>
              Pharma Network Development Services
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-6 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1  gap-6">
          {PharmaNetworkDevelopmentServicesData.map((item, index) => (
            <AnimatedCard
              key={index}
              title={item?.title}
              description={item?.description}
            />
          ))}
        </div>

        <div className="mx-auto text-left">
        <div className="text-[22px] md:text-[28px] mt-10 text-[#4FB5B9] font-poppins font-semibold">
            <Link href={"/softwareservices"}>Software Development Services</Link>
          </div>
        </div>
        <div className="mx-auto mt-6 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-6">
          {SoftwareDevelopmentServicesData.map((item, index) => (
            <AnimatedCard
              key={index}
              title={item?.title}
              description={item?.description}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center md:justify-start w-full md:w-auto">
          <Link href="/contact" className="w-full md:w-auto">
            <button className="w-full md:w-auto bg-custom-bg px-20 font-medium font-poppins text-lg text-white py-4  rounded-[8px] hover:bg-[#44ABB6]">
              {"Get in Touch"}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
