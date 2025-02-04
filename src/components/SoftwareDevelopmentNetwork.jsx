import React from "react";

export default function SoftwareNetworkDevelopment() {
  return (
    <section className="py-20">
      <div className="pt-10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-20 w-full  mx-auto">
        <h2 className="text-3xl font-semibold text-black font-poppins">
          Software Development Services We Provide
        </h2>
        <p className="text-gray-600 text-left mb-8 mt-5">
        Satu PhamTech is the leading custom software development company offering comprehensive services for a wide range of platforms and frameworks.  Whether you are looking for a custom software application, Native mobile application,  web app or applications, cross-platform application or hybrid app, we efficiently turn your idea into a successful product. Here are some of the Top Services we offer.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-5">
            <p className="font-normal font-poppins">Network Security Services</p>
            <p className="font-normal font-poppins">IoT and Hardware Solutions</p>
            <p className="font-normal font-poppins">ERP Solutions</p>
          </div>

          <div className="space-y-5 border-l border-r px-6">
            <p className="font-normal font-poppins">Mobile  application development company</p>
            <p className="font-normal font-poppins">Native Android app development services</p>
            <p className="font-normal font-poppins">Native iOS development services</p>
          </div>

          <div className="space-y-5">
            <p className="font-normal font-poppins">Cross-platform app development services</p>
            {/* <p className="font-normal font-poppins">Assisting in manufacturing unit setup</p> */}
            <p className="font-normal font-poppins">AI and Data Science Solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
}
