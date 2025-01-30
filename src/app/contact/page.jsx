"use client";
import ContactForm from "../../components/ContactForm";
import WhyChooseUs from "../../components/WhyChooseUsSection";

const Contact = () => {
  

  return (
    <>
    <ContactForm title={"Let's Connect & Grow Together"} description1={`Have questions or need assistance with Pharma network development or tech solutions?`} description2={`Fill out the form, and our team will get back to you soon!`} align={'left'}/>
     <div className="mb-20"><WhyChooseUs align={'right'}/></div> 
    </>
  );
};

export default Contact;
