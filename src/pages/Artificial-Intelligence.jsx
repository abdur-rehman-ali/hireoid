import React from 'react'
import hero from '../assets/artificial-intellegence/hero.png'
import { HeroSection, HowDoesItWork, Ceo, WhyHireoid } from '../components'
import { contentData } from '@/data/contentData'
import Card from "../assets/artificial-intellegence/card.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ArtificialIntelligence = () => {
    return (
        <>
            <HeroSection
                title="Win the new world, hire top AI & ML talent talent to drive growth"
                subtitle="Dominate the market with our hand-picked AI specialists. Unlock hidden potential and stay ahead of the curve with Hireoid,designed to skyrocket your business."
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
            <Ceo />
            <WhyHireoid />
            <div className='max-w-1440 mx-auto'>
                <div className="flex flex-col-reverse md:flex-row justify-between items-center px-6 md:px-28 py-10 md:py-20">
                    <div className='flex-1 md:flex-[0.4]'>
                        <img
                            src={Card}
                            alt="Hero"
                            className="w-full md:w-[488px] h-auto object-cover rounded-lg"
                        />
                    </div>
                    <div className='flex-1 md:flex-[0.55] flex flex-col items-start gap-5'>
                        <h1 className="text-primary text-4xl md:text-6xl font-bold leading-tight tracking-wide">
                            Build your future, Today.
                        </h1>
                        <p className="text-lg md:text-xl font-light leading-6 text-[#525252]">
                            Lead the AI revolution, hire top global AI & ML engineers to shape innovations for the future.
                        </p>
                        <button className="bg-primary text-white text-base py-2 px-6 mb-4 font-semibold rounded-full">
                            Get Started
                            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArtificialIntelligence