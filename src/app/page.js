'use client'
import docImg from "../../public/assets/groupOfDoc.jpg";
import HeroImage from "../../public/images/custom-software.png";
import HeroImage2 from "../../public/images/custom-software-second.png"
import teamImg from "../../public/assets/teamOfPrograms.jpg";
import { CardWithImage } from '../components/Cards';
import ContactForm from '../components/ContactForm';
import MainImage from "../components/MainImage";
import WhyChooseUs from "../components/WhyChooseUsSection";
import { cardWithFirstImgValue, cardWithSecondImgValue, mainImgData } from './constants/constValues';
import ExpertiseSection from "src/components/ExpertiseSection";

export default function Home() {
	const images =[
		HeroImage,
		HeroImage2
	]
	return (
		<div className="w-full">
			<MainImage landingPage={true} images={images}  mainImgData={mainImgData} />
			<ExpertiseSection />
			<div className=" mx-auto w-full flex justify-center md:justify-end px-6 md:px-[64px] xl:px-20">
				<div className="text-center md:text-end font-semibold text-[24px] md:text-[36px] text-[#000000] leading-[120%]">
					Who We Are
				</div>
			</div>

			<div className='mt-6'>
				<CardWithImage cardImg={docImg?.src} cardValue={cardWithFirstImgValue} isReversed={true} isUnderlineForTitle={true} />
			</div>
			<div className='mt-10'>
				<CardWithImage cardImg={teamImg?.src} cardValue={cardWithSecondImgValue} isReversed={false} isUnderlineForTitle={true} />
			</div>

			<div className="mt-10 md:mt-20 mb-10 md:mb-20">
				<WhyChooseUs align={'left'} />
			</div>


			<ContactForm />

		</div>

	);
}
