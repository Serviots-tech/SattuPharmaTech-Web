import Image from "next/image";
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
        return value.replace(/\D/g, "").slice(0, 15);
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

    if (!/^\d{7,15}$/.test(formData.phone)) {
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
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                // className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder={errors.fullName ? errors.fullName : "Full Name *"}
                className={`w-full px-4 py-3 rounded-lg border ${errors.fullName ? "border-red-500 placeholder-red-500" : "border-gray-200"
                  } focus:outline-none focus:ring-2 focus:ring-teal-500`}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email Address*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                // className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder={errors.email ? errors.email : "Email Address *"}
                className={`w-full px-4 py-3 rounded-lg border ${errors.email ? "border-red-500 placeholder-red-500" : "border-gray-200"
                  } focus:outline-none focus:ring-2 focus:ring-teal-500`}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={errors.phone ? errors.phone : "Phone Number *"}
                className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? "border-red-500 placeholder-red-500" : "border-gray-200"
                  } focus:outline-none focus:ring-2 focus:ring-teal-500`}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Company Name</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder={errors.company ? errors.company : "Your Company Name *"}
                className={`w-full px-4 py-3 rounded-lg border ${errors.company ? "border-red-500 placeholder-red-500" : "border-gray-200"
                  } focus:outline-none focus:ring-2 focus:ring-teal-500`}
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Message*</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              // className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder={errors.message ? errors.message : "Describe Your Project *"}
              rows="4"
              className={`w-full px-4 py-3 rounded-lg border ${errors.message ? "border-red-500 placeholder-red-500" : "border-gray-200"
                } focus:outline-none focus:ring-2 focus:ring-teal-500`}
            ></textarea>
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition-colors"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
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
