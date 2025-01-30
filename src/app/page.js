'use client'
import docImg from "../../public/assets/groupOfDoc.jpg";
import teamImg from "../../public/assets/teamOfPrograms.jpg";
import { CardWithImage } from '../components/Cards';
import ContactForm from '../components/ContactForm';
import MainImage from "../components/MainImage";
import WhyChooseUs from "../components/WhyChooseUsSection";
import { cardWithFirstImgValue, cardWithSecondImgValue } from './constants/constValues';
import ContactForm from '../components/ContactForm'
export default function Home() {



	return (
		<div className="w-full">
			< MainImage />
			<ExpertiseSection />

			<div className="mt-20 mb-20">
        <WhyChooseUs  align={'left'}/>
      </div>
			<div className="mt-20 mb-20">
				<WhyChooseUs />
			</div>

			<CardWithImage cardImg={docImg?.src} cardValue={cardWithFirstImgValue} isReversed={false} />

			<div className='mt-10'>
				<CardWithImage cardImg={teamImg?.src} cardValue={cardWithSecondImgValue} isReversed={true} />
			</div>

			<ContactForm />

      {/* Request Call */}
      {/* <div>
        <RequestCall />
      </div> */}

      {/* About Us */}
      {/* <div><AboutUs /></div> */}
      {/* <Footer/> */}
    </div>

	);
}
