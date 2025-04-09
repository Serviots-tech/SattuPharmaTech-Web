"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const MainImgCarouselSlider = ({
  images,
  mainImgData,
  autoPlay = true,
  interval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides, setSlides] = useState([
    {
      index: 0,
      id: Date.now(),
      isInitial: true,
    },
  ]);

  // const isFirstRender = useRef(true);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      addSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, autoPlay, interval]);

  const addSlide = () => {
    const nextIndex = (currentIndex + 1) % images.length;

    setSlides((prev) => [
      ...prev,
      {
        index: nextIndex,
        id: Date.now(),
        isInitial: false,
      },
    ]);

    setCurrentIndex(nextIndex);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="relative w-full  h-full">
        {slides.map((slide, idx) => (
          <motion.div
            key={slide.id}
            initial={slide.isInitial ? false : { x: "100%" }}
            animate={slide.isInitial ? {} : { x: "0%" }}
            transition={
              slide.isInitial
                ? { duration: 0 }
                : { duration: 1.2, ease: "easeInOut" }
            }
            onAnimationComplete={() => {
              if (idx < slides.length - 1) {
                setSlides((prev) => prev.slice(idx));
              }
            }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={images[slide.index].src}
              alt="Image"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            {renderOverlayContent(
              mainImgData[slide.index],
              interval,
              currentIndex,
              addSlide
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

function renderOverlayContent(data, interval, currentIndex, addSlide) {
  return (
    <div className="absolute top-[18%] xl:left-10 pt-2 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-10 w-full mx-auto">
      <div className="text-center md:text-left">
        <p className="mt-4 sm:mt-10 text-white text-4xl font-bold">
          {data?.title}
        </p>
        <p className="mt-2 text-white text-4xl font-bold">{data?.subTitle}</p>
        <div className="h-12 mt-2 flex justify-center sm:justify-normal items-center">
          <div className="h-1 w-12 bg-[#4FB5B9]" />
        </div>
        <p className="mt-4 max-md:hidden text-lg text-white font-light max-w-screen-md mx-auto md:mx-0">
          {data?.description ??
            "Unlock new opportunities in Pharmaceuticals & IT with our strategic solutions connecting India & Africa."}
        </p>

        <div className="mt-8 flex flex-col gap-2 items-center md:items-start">
          <Link href="/contact">
            <button className="sm:w-auto bg-custom-bg font-medium text-lg text-white py-2 px-6 rounded hover:bg-[#44ABB6]">
              {data?.ctaText ?? "Explore Our Services"}
            </button>
          </Link>

          {/* Progress Bars */}
          {/* Progress Bars */}
          <div className="w-40 mt-3 flex items-center gap-2 cursor-pointer">
            {[0, 1].map((barIndex) => (
              <div
                key={barIndex}
                className="relative w-full h-1 bg-white  overflow-hidden"
                onClick={() => {
                  if (barIndex !== currentIndex) {
                    addSlide(barIndex);
                  }
                }}
              >
                {barIndex === currentIndex && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: interval / 900,
                      ease: "linear",
                    }}
                    className="absolute top-0 left-0 h-full bg-[#4FB5B9]"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainImgCarouselSlider;
