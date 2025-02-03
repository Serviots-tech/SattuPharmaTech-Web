'use client'
import docImg from "../../public/assets/groupOfDoc.jpg";
import HeroImage from "../../public/assets/HeroImage.png";
import HeroImage2 from "../../public/assets/HeroImage2.png"
import teamImg from "../../public/assets/teamOfPrograms.jpg";
import { CardWithImage } from '../components/Cards';
import ContactForm from '../components/ContactForm';
import MainImage from "../components/MainImage";
import WhyChooseUs from "../components/WhyChooseUsSection";
import { cardWithFirstImgValue, cardWithSecondImgValue, mainImgData } from './constants/constValues';
import ExpertiseSection from '../components/ExpertiseSection';


export default function Home() {
	const images =[
		HeroImage,
		HeroImage2
	]
	return (
		<div className="w-full">
			<MainImage landingPage ={true} images={images}  mainImgData={mainImgData} />

			<ExpertiseSection />

			<div className=" mx-auto w-full flex justify-end px-6 md:px-[64px] xl:px-20">
				<div className="text-end font-bold text-2xl">
					Who We Are
				</div>
			</div>

			<div className='mt-10'>
				<CardWithImage cardImg={docImg?.src} cardValue={cardWithFirstImgValue} isReversed={true} />
			</div>
			<div className='mt-10'>
				<CardWithImage cardImg={teamImg?.src} cardValue={cardWithSecondImgValue} isReversed={false} />
			</div>

			<div className="mt-20 mb-20">
				<WhyChooseUs align={'left'} />
			</div>


			<ContactForm />

		</div>

	);
}
