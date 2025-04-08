"use client";

import Image from "next/image";

export function CardWithImage({ cardImg, cardValue, isReversed }) {
  return (
    <div
      className={`mx-auto xl:px-20 bg-white rounded-xl px-6 md:px-[64px] grid ${
        isReversed ? "xl:grid-cols-[1fr,2fr]" : "xl:grid-cols-[2fr,1fr]"
      } grid-cols-1 gap-6`}
    >
      {/* Image Section (Changes Order Based on isReversed Prop) */}
      <div className={`${isReversed ? "xl:order-last" : "xl:order-first"} order-first`}>
        <Image
          src={cardImg}
          alt="Pharma"
          layout="responsive"
          width={600}
          height={400}
          className="rounded-lg"
        />
      </div>

      {/* Text Content (Changes Order Based on isReversed Prop) */}
      <div
        className={`${
          isReversed ? "xl:order-first xl:text-end" : "xl:order-last"
        } order-last lg:mb-2`}
      >
       {cardValue?.title &&  <h2
          className={`text-xl md:text-[28px] underline md:no-underline font-semibold leading-[120%] text-[#4FB5B9] pt-4 pb-2 md:font-semibold md:pt-2 font-poppins ${
            isReversed ?"": "xl:mt-24 sm:mt-4"
          } `}
        >
          {cardValue?.title}
        </h2>}
        <p className="mt-3 text-md md:font-normal md:text-lg font-sans">
          {cardValue?.description}
        </p>
        <p className="mt-4 text-md md:font-normal font-sans">
          {cardValue?.services}
        </p>
      </div>
    </div>
  );
}
