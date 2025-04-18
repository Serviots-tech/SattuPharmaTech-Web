import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";

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

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: sanitizeField(name, value),
    }));
  };

  const sanitizeField = (name, value) => {
    switch (name) {
      case "phone":
        // return value.replace(/\D/g, "").slice(0, 15);
        // Allow '+' only at the beginning

        let cleaned = value.replace(/[^\d+]/g, '');
        if (cleaned.startsWith('+')) {
          cleaned = '+' + cleaned.slice(1).replace(/\D/g, '');
        } else {
          cleaned = cleaned.replace(/\D/g, '');
        }

        const digitsOnly = cleaned.replace(/\D/g, '').slice(0, 15);
        return cleaned.startsWith('+') ? '+' + digitsOnly : digitsOnly;
      case "fullName":
        return value.replace(/[^A-Za-z\s]/g, "");
      default:
        return value;
    }
  };

  const validate = () => {
    const requiredFields = ["fullName", "email", "phone", "company", "message"];
    const newErrors = {};

    for (const field of requiredFields) {
      const value = formData[field]?.trim();
      if (!value) {
        newErrors[field] = `${field.replace(/([A-Z])/g, " $1")} is required`;
      }
    }

    if (formData.email?.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // if (!/^\d{7,15}$/.test(formData.phone)) {
    //   newErrors.phone = "Invalid phone number format";
    // }
    if (!/^\+?\d{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number format";
    }

    return newErrors;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success("Message sent successfully!");
        setFormData({ fullName: "", email: "", phone: "", company: "", message: "" });
      } else {
        toast.error(data.message || "Something went wrong.");
      }
    } catch (err) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="pt-5 pb-10 md:pb-20 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-20 w-full  mx-auto lg:pt-[80px]">
      <h1
        className={`text-4xl mb-4 font-semibold font-poppins text-[#000000] text-center md:text-right`}
      >
        {title ?? "Get in Touch"}
      </h1>

      <div className={`mb-8 text-center md:text-right text-[#000000] font-normal text-lg`}>
        <p>{description1 ?? " Ready to explore new opportunities?"}</p>
        <p>
          {description2 ??
            " Contact us today to learn how we can help your business thrive in the Indian and African markets."}
        </p>
      </div>

      <div className="lg:hidden mb-7">
        <Image
          src="/assets/contactForm.png"
          alt="Handshake"
          width={600}
          height={500}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="grid p-4 py-8 lg:grid-cols-2 gap-8  sm:p-10 border rounded-lg border-1 border-[#E0E0E0] bg-[#FCFCFC]">
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-[14px]  block text-[#696969] mb-2">Full Name*</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                // className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder={errors.fullName ? errors.fullName : "Your Full Name"}
                className={`w-full px-4 py-3 rounded-lg border text-[#696969] placeholder:text-[#CDCDCD] h-[46px] ${errors.fullName ? "border-red-500 placeholder:text-red-500" : "border-gray-200"
                  } focus:outline-none focus:ring-2 focus:ring-teal-500`}
              />
            </div>
            <div>
              <label className="block text-[14px] text-[#696969] mb-2">Email Address*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                // className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder={errors.email ? errors.email : "Your Email Address"}
                className={`w-full px-4 py-3 rounded-lg border text-[#696969] placeholder:text-[#CDCDCD] h-[46px] ${errors.email ? "border-red-500 placeholder:text-red-500" : "border-gray-200"
                  } focus:outline-none focus:ring-2 focus:ring-teal-500`}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[14px] text-[#696969]  mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={errors.phone ? errors.phone : "Your Phone Number"}
                className={`w-full px-4 py-3 h-[46px] rounded-lg text-[#696969] placeholder:text-[#CDCDCD] border ${errors.phone ? "border-red-500 placeholder:text-red-500" : "border-gray-200"
                  } focus:outline-none focus:ring-2 focus:ring-teal-500`}
              />
            </div>
            <div>
              <label className="block text-[14px] text-[#696969] mb-2">Company Name</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder={errors.company ? errors.company : "Your Company Name"}
                className={`w-full px-4 py-3 text-[#696969] placeholder:text-[#CDCDCD] h-[46px] rounded-lg border ${errors.company ? "border-red-500 placeholder:text-red-500" : "border-gray-200"
                  } focus:outline-none focus:ring-2 focus:ring-teal-500`}
              />
            </div>
          </div>

          <div>
            <label className="block text-[14px] text-[#696969] mb-2">Message*</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              // className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder={errors.message ? errors.message : "Describe Your Project"}
              rows="4"
              className={`w-full px-4 py-3 text-[#696969] placeholder:text-[#CDCDCD] rounded-lg border ${errors.message ? "border-red-500 placeholder:text-red-500" : "border-gray-200"
                } focus:outline-none focus:ring-2 focus:ring-teal-500`}
            ></textarea>
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-[#4FB5B9] text-white py-3 rounded-lg hover:bg-teal-600 transition-colors flex justify-center items-center"
            disabled={loading}
          >
            {/* {loading ? "Sending..." : "Submit"} */}
            {loading ? (
              <Image
                width={50}
                height={50}
                src="/satupharm_loader.gif"
                alt="Loading..."
                className="h-6 w-6"
              />
            ) : (
              "Submit"
            )}
          </button>
          <p className="text-sm text-[#696969]">
            By submitting this form, you agree to our{" "}
            <Link href="/privacy-policy" className="underline">
              Privacy Policy
            </Link>
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
