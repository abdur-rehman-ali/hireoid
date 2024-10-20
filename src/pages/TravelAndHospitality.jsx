import React from 'react'
import hero from '../assets/travel-and-hospitality/hero.png'
import { HeroSection, HowDoesItWork, Ceo, Topperformer, WhyHireoid } from '../components'
import { contentData } from '@/data/contentData'
import Card from "../assets/ReatilEcommerce/card_image.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
            <div className='max-w-1440 mx-auto h-[540px]'>
                <div className="flex flex-row-reverse justify-between items-center px-28 py-20">
                    <div className='flex-[0.4]'>
                        <img src={Card} alt="Hero" className="w-[488px] h-[340px] object-cover rounded-lg" />
                    </div>
                    <div className='flex-[0.55] flex flex-col items-start gap-5 '>
                        <h1 className=" text-primary text-6xl font-bold leading-normal tracking-wide">Right talent is the key to
                            a successful brand.</h1>
                        <p className="text-xl h-24 font-light leading-6 text-[#525252]">We’ll find you the best talent for
                            Your business.</p>
                        <button
                            className="bg-primary text-white text-base py-2 px-6 font-semibold rounded-full">
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