import React from "react";

export default function SoftwareNetworkDevelopment() {
  return (
    <section className="py-20">
      <div className="pt-10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-20 w-full  mx-auto">
        <h2 className=" text-[24px] md:text-4xl font-semibold text-black text-center font-poppins md:text-left">
          Software Development Services We Provide
        </h2>
        <p className="text-[16px] md:text-[18px] text-center mb-8 mt-5 md:text-left max-w-[1024px]">
        Satu PharmTech is the leading custom software development company offering comprehensive services for a wide range of platforms and frameworks.  Whether you are looking for a custom software application, Native mobile application,  web app or applications, cross-platform application or hybrid app, we efficiently turn your idea into a successful product. Here are some of the Top Services we offer.</p>

        <div className=" font-[18px] font-inter text-left grid grid-cols-1 md:grid-cols-3 lg:gap-8 mx-4 md:font-medium md:text-center md:text-[18px]">
          <ul className="space-y-5 list-disc md:list-none mt-5">
            <li className="  "  >Network Security Services</li>
            <li className=" ">IoT and Hardware Solutions</li>
            <li className="">ERP Solutions</li>
          </ul>

          <ul className="space-y-5 md:border-l md:border-r md:border-black md:px-6 list-disc md:list-none mt-5">
            <li className="">Mobile  application development company</li>
            <li className="">Native Android app development services</li>
            <li className=" ">Native iOS development services</li>
          </ul>

          <ul className="space-y-5 list-disc md:list-none mt-5">
            <li className=" ">Cross-platform app development services</li>
            {/* <p className="font-normal font-poppins">Assisting in manufacturing unit setup</p> */}
            <li className=" ">AI and Data Science Solutions</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
