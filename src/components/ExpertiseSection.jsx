import React from "react";

const expertiseData = [
  { title: "Bridging the Gap Between India and Africa" },
  { title: "Assistance for New Indian Companies Entering the African Market" },
  { title: "Data and Market Realization" },
  { title: "Pharma Manufacturing and Hospitals" },
  { title: "Team Knowledge" },
  { title: "Main Objective" },
];

const ExpertiseSection = () => {
  return (
    <section className="py-20">
      {/* <div className="pt-10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-32 w-full "> */}
      <div className="pt-10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-0 w-full max-w-screen-xl mx-auto">
      <div className="mx-auto text-left">
        <h2 className="text-3xl font-bold text-black">Our Expertise</h2>
        <p className="mt-4 text-gray-600">
          Bridging India & Africa with Strategic Solutions in Pharmaceuticals & IT
        </p>
        <p className="mt-2 text-gray-600 md:max-w-[80%]">
          At Satupharmtech, we specialise in connecting businesses across India and Africa, providing innovative solutions in Pharmaceuticals and IT. Our expertise lies in market entry strategies, regulatory compliance, digital transformation, and business expansion to help you thrive in these dynamic regions.
        </p>
      </div>
      <div className="mx-auto text-left">
      <div className="text-xl mt-10 text-[#4FB5B9] font-poppins font-bold">Pharma Expertise</div>
      </div>
      <div className="mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {expertiseData.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 border-t-4 border-teal-400"
          >
            <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
            <a href="#" className="mt-4 text-teal-600 font-medium flex items-center space-x-2">
              <span>Learn More</span>
              <span>&rarr;</span>
            </a>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;