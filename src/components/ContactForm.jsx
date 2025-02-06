import Image from "next/image";
import React from "react";

const ContactForm = ({
  title,
  description1,
  description2,
  align = "right",
}) => {
  const alignmentClass =
    align === "center"
      ? "text-center"
      : align === "left"
      ? "text-left"
      : "text-right";

  return (
    <div className="pt-10 pb-10 md:pb-20 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-20 w-full  mx-auto">
      <h1
        className={`text-4xl mb-4 font-semibold font-poppins ${alignmentClass}`}
      >
        {title ?? "Get in Touch"}
      </h1>

      <div className={`mb-8 ${alignmentClass}`}>
        <p>{description1 ?? " Ready to explore new opportunities?"}</p>
        <p>
          {description2 ??
            " Contact us today to learn how we can help your business thrive in the Indian and African markets."}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 p-10 border rounded-lg border-1 border-[#E0E0E0] bg-[#FCFCFC]">
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">Full Name*</label>
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email Address*</label>
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                placeholder="Your Phone Number"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Company Name</label>
              <input
                type="text"
                placeholder="Your Company Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Message*</label>
            <textarea
              placeholder="Describe Your Project"
              rows="4"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition-colors"
          >
            Submit
          </button>

          <p className="text-sm text-gray-500">
            By submitting this form, you agree to our{" "}
            <a href="#" className="text-teal-500 underline">
              Privacy Policy
            </a>
          </p>
        </div>

        <div className="hidden lg:block">
          <Image
            src="/assets/contactForm.png"
            alt="Handshake"
            width={600}
            height={500}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
