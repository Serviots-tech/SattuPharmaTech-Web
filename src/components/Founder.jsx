import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>

      <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-6">
        {/* Left Column - 70% on large screens, full-width on small screens */}
        <div className="grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <span className="text-2xl">📊</span>
                <h3 className="text-xl font-semibold ml-3">Deep Market Insights</h3>
              </div>
              <p>
                Showcase the IT company’s expertise in developing mobile applications for both
                Android and iOS platforms.
              </p>
            </div>

            <div className="p-6 border rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <span className="text-2xl">🏅</span>
                <h3 className="text-xl font-semibold ml-3">Proven Track Record</h3>
              </div>
              <p>
                With a history of successful projects, we have established ourselves as a trusted
                partner for businesses aiming to bridge the gap between India and Africa.
              </p>
            </div>
          </div>

          <div className="p-6 border rounded-lg shadow-md bg-white">
            <div className="flex items-center mb-4">
            <div class="inline-block p-2 rounded-2xl border-2 border-[#E0E0E0]"><span className="text-3xl">📊</span> </div>
              <h3 className="text-xl font-semibold ml-3">Deep Market Insights</h3>
            </div>
            <p>
              Showcase the IT company’s expertise in developing mobile applications for both Android
              and iOS platforms.
            </p>
          </div>
        </div>

        {/* Right Column - 30% on large screens, full-width on small screens */}
        {/* <div className="p-6 bg-[#FFF7E3] border-w-1 border-[#FDC446] rounded-lg text-center flex flex-col justify-center"> */}
        <div className="p-6 bg-[#FFF7E3] border border-[#FDC446] border-1 rounded-lg text-center flex flex-col justify-center">
          <div className="flex flex-col items-center">
            <div class="inline-block p-2 rounded-2xl border-2 bg-white border-[#FDC446]">
              <span class="text-4xl">🤝</span>
            </div>
            <h3 className="text-2xl font-semibold text-[#FDC446] mt-3">
              Let’s Connect & Grow Together
            </h3>
          </div>
          <p className="mt-3">Have questions or looking for strategic solutions in Pharmaceuticals & IT?</p>
          <p className="font-bold">We’re here to help!</p>
          <button className="mt-4 px-6 py-2 bg-[#FFD059] text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
