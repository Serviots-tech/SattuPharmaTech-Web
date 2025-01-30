import React from "react";
import AnimatedCard from "./AnimatedCard";

const PharmaNetworkDevelopmentServicesData = [
  { title: "Assistance for Market Entry", description: ["Company registration", "Fulfilling regulatory norms", "Connecting with distributors", "Marketing your products", "Joint Ventures"] },
  {
    title: "Pharma Manufacturing & Hospital Setup",
    description: [
      "Finding suitable locations",
      "Assisting in manufacturing unit setup",
      "Providing full-fledged assistance for hospital setup",
      "Market research & product marketing",
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

const ExpertiseSection = ({align}) => {
  return (
    <section className="py-20">
      {/* <div className="pt-10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-32 w-full "> */}
      <div className="pt-10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-0 w-full max-w-screen-xl mx-auto">
        <div className={`mx-auto text-${align ?? 'left'}`}>
          <h2 className="text-3xl font-semibold text-black font-poppins">Our Expertise</h2>
          <p className="mt-4 text-gray-600 md:max-w-[70%] font-poppins font-normal">
            From helping you launch your pharmaceutical business in the African market, Manufacturing and Hospital Setup, and marketing your product/services to targeted customers to building smart and scalable software solutions, including web and mobile applications, Satu PhamTech is your reliable partner. Let's find out the services we offer.
          </p>
        </div>
        <div className="mx-auto text-left">
          <div className="text-xl mt-10 text-[#4FB5B9] font-poppins font-semibold">Pharma Network Development Services</div>
        </div>
        <div className="mx-auto mt-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-6">
          {PharmaNetworkDevelopmentServicesData.map((item, index) => (
            <AnimatedCard title={item?.title} description={item?.description} />
          ))}
        </div>

        <div className="mx-auto text-left">
          <div className="text-xl mt-10 text-[#4FB5B9] font-poppins font-semibold">Software Development Services</div>
        </div>
        <div className="mx-auto mt-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
          {SoftwareDevelopmentServicesData.map((item, index) => (
            <AnimatedCard title={item?.title} description={item?.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;

