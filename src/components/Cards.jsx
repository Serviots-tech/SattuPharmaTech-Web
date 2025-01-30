"use client";

export function CardWithImage({ cardImg, cardValue, isReversed }) {
  return (
    <div
      className={`max-w-screen-xl mx-auto bg-white rounded-xl px-6 md:px-[64px] xl:px-0 grid ${isReversed ? "xl:grid-cols-[1fr,2fr]" : "xl:grid-cols-[2fr,1fr]"} grid-cols-1  gap-6`}
    >
      {/* Image Section (Changes Order Based on isReversed Prop) */}
      <div className={`${isReversed ? "order-last" : "order-first"}`}>
        <img src={cardImg} alt="Pharma" className="w-full rounded-lg" />
      </div>

      {/* Text Content (Changes Order Based on isReversed Prop) */}
      <div className={`${isReversed ? "order-first" : "order-last "} lg:mb-2`}>
        <h2 className={`text-2xl font-bold text-teal-600 pt-4 pb-2 md:font-semibold md:pt-2 font-poppins ${isReversed && "mt-24"} `}>
          {cardValue?.title}
        </h2>
        <p className="mt-3 text-md md:font-normal md:text-md font-sans">
          {cardValue?.description}
        </p>
        <p className="mt-4 text-md md:font-normal font-sans">
          {cardValue?.services}
        </p>
      </div>
    </div>
  );
}
