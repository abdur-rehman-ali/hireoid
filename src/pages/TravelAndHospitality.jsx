import React from 'react'
import hero from '../assets/travel-and-hospitality/hero.png'
import { HeroSection, HowDoesItWork, Ceo, Topperformer, WhyHireoid } from '../components'
import { contentData } from '@/data/contentData'
import Card from "../assets/ReatilEcommerce/card_image.png"
import CardGrid from '@/components/card/CardGrid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import EcommerceProductManager from "../assets/travel-and-hospitality/EcommerceProductManager.png"
import InventoryControlSpecialist from "../assets/travel-and-hospitality/InventoryControlSpecialist.png"
import SalesAssociate from "../assets/travel-and-hospitality/SalesAssociate.png"
import VisualMerchandiser from "../assets/travel-and-hospitality/VisualMerchandiser.png"

const travelAndHospitalityCardsData = [
    {
        image: EcommerceProductManager,
    },
    {
        image: InventoryControlSpecialist,
    },
    {
        image: SalesAssociate,
    },
    {
        image: VisualMerchandiser,
    },
];


const TravelAndHospitality = () => {
    return (
        <>
            <HeroSection
                title="Attract More Guests, Delight More Visitors"
                subtitle="Need to boost your business's sales and visibility? Hireoid can find the missing piece that propels your brand to the top."
                imageSrc={hero}
                buttonText="Get Started"
                onButtonClick={() => alert('Button clicked!')}
            />

            <CardGrid
                cardTitle="Our talent has experience working as"
                cardsData={travelAndHospitalityCardsData}
            />
            {/* How it Works */}
            <div className='bg-[#F8F9FB]'>
                <div className='max-w-1440 mx-auto pt-10 '>
                    <div className='flex flex-col  mx-24 py-10'>
                        <h1 className=" text-primary text-5xl font-extrabold leading-normal tracking-tight">Our Process</h1>
                    </div>
                    <div className='px-8 lg:mx-16'>
                        <HowDoesItWork data={contentData} />
                    </div>
                </div>
            </div>
            {/* CEO Spliang */}
            <Ceo />
            {/* Top Performer */}
            <Topperformer
                showButton={true}
                showParagraph={false}
                title="Hire experts from your industry in less than a week."
                description="Unforgettable guest experiences start with great team. Hireoid connects you with the best in tourism & hospitality: marketing, guest services, operations & more."
                buttonText="Get Started"
            />
            <WhyHireoid />
            <div className='max-w-1440 mx-auto'>
                <div className="flex flex-col-reverse md:flex-row justify-between items-center px-6 md:px-28 py-10 md:py-20">
                    <div className='flex-1 md:flex-[0.4]'>
                        <img
                            src={Card}
                            alt="Hero"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                    <div className='flex-1 md:flex-[0.55] flex flex-col items-start gap-5'>
                        <h1 className="text-primary text-4xl md:text-5xl font-bold leading-normal tracking-wide">
                            Grow your business with the best global talent
                        </h1>
                        <p className="text-lg md:text-xl font-light leading-6 text-[#525252]">
                            Fill key roles with top talent in marketing, guest services, operations, and more. Elevate your guest experience and drive business growth.
                        </p>
                        <button className="bg-primary text-white text-base py-2 px-6 mb-4 font-semibold rounded-full">
                            Hire Talent
                            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TravelAndHospitality