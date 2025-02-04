import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ChevronIconLeft, ChevronIconRight } from "src/app/constants/svg";

const MainImgCarouselSlider = ({
  images,
  autoPlay = true,
  interval = 3000,
  mainImgData,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!autoPlay || isAnimating) return;

    const timer = setTimeout(() => {
      handleNextSlide();
    }, interval);

    return () => clearTimeout(timer);
  }, [currentIndex, autoPlay, interval, isAnimating]);

  const handleNextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsAnimating(false);
    }, 500); // Sync with animation duration
  };

  const handlePrevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 500);
  };

  const getButtonColor = (direction) => {
    const isPrev = direction === "prev";
    const color = "#4FB5B9"; // Default color for both buttons
    const lightColor = "#4FB5B966"; // Light color for the button when active

    return currentIndex === (isPrev ? 0 : images.length - 1)
      ? lightColor
      : color;
  };
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="relative w-full h-[90vh] sm:h-[80vh] md:h-[88vh] lg:h-[90vh]"
        >
          <motion.div
            animate={{ scale: [1, 1.15] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeOut",
            }}
            className="w-full h-full"
          >
            <Image
              src={images[currentIndex]?.src}
              alt="Slide Image"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="absolute top-[18%] xl:left-10 pt-2 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-10 w-full mx-auto">
        <div className="text-center md:text-left">
          <p className="mt-4 sm:mt-10 text-black text-4xl font-bold">
            {mainImgData[currentIndex]?.title}
          </p>
          <p className="mt-2 text-black text-4xl font-bold">
            {mainImgData[currentIndex]?.subTitle}
          </p>
          <div className="h-12 mt-2 flex justify-center sm:justify-normal items-center">
            <div className="h-1 w-12 bg-[#4FB5B9]" />
          </div>
          <p className="mt-4 max-md:hidden text-lg text-black font-light max-w-screen-md mx-auto md:mx-0">
            {mainImgData[currentIndex]?.description ??
              "Unlock new opportunities in Pharmaceuticals & IT with our strategic solutions connecting India & Africa."}
          </p>
          <div className="mt-8 flex justify-center md:justify-start">
            <Link href="/contact">
              <button className="sm:w-auto bg-custom-bg font-medium text-lg text-white py-2 px-6 rounded hover:bg-[#44ABB6]">
                {mainImgData[currentIndex]?.ctaText ?? "Explore Our Services"}
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[12%] left-[50%] transform -translate-x-1/2  gap-10 md:hidden hidden lg:flex">
        <button
          onClick={handlePrevSlide}
          className="p-[14%] px-[17%] rounded-[50%] border-4 border-[#167174] text-[#4FB5B9]"
          style={{
            borderColor: getButtonColor("prev"),
            color: getButtonColor("prev"),
          }}
        >
          <ChevronIconRight fill={getButtonColor("prev")} />
        </button>
        <button
          onClick={handleNextSlide}
          className="px-[17%] rounded-full border-4 border-[#4FB5B9] text-[#4FB5B9]"
          style={{
            borderColor: getButtonColor("next"),
            color: getButtonColor("next"),
          }}
        >
          <ChevronIconLeft fill={getButtonColor("next")} />
        </button>
      </div>
    </div>
  );
};

export default MainImgCarouselSlider;
