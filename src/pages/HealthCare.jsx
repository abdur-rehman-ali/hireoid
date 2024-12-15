import React from 'react'
import hero from '../assets/health-care/hero.png'
import { HeroSection, HowDoesItWork, Ceo, Topperformer, WhyHireoid } from '../components'
import { contentData } from '@/data/contentData'
import ClientSuccess from "../assets/health-care/ClientSuccess.png"
import Insurance from "../assets/health-care/Insurance.png"
import MedicalBilling from "../assets/health-care/MedicalBilling.png"
import MedicalCode from "../assets/health-care/MedicalCode.png"
import CardGrid from '@/components/card/CardGrid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const healthCareCardsData = [
    {
        image: ClientSuccess,
    },
    {
        image: Insurance,
    },
    {
        image: MedicalBilling,
    },
    {
        image: MedicalCode,
    },
];


const HealthCare = () => {
    return (
        <>
            <HeroSection
                title="Find your perfect match. Grow your practice"
                subtitle="Keep your practice in top shape and improve upon it’s base with the best talent from all around the world."
                imageSrc={hero}
                buttonText="Hire Talent"
                onButtonClick={() => alert('Button clicked!')}
            />

            <CardGrid
                cardTitle="Chronic staffing challenges? </br> Hireoid has the cure: Pre-vetted candidates."
                cardsData={healthCareCardsData}
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

            <div className='flex flex-col items-start gap-6 text-left max-w-1440 mx-auto px-6 md:px-[112px] py-10'>
                <h1 className="text-primary text-4xl md:text-6xl font-extrabold leading-normal">
                    Focus on what matters most – your patients' care,experience the 'Hireoid' difference, a bond beyond compare.
                </h1>
                <p className="text-base md:text-xl font-light leading-6 text-gray">
                    Hireoid handles everything from recruitment and onboarding to payroll and benefits, giving you back valuable time to focus on your patients.
                </p>

                <div className='flex flex-col items-start gap-6'>
                    <div className='flex justify-start items-center gap-3'>
                        <p className='font-inter text-base md:text-xl font-normal text-[#525252] underline'>
                            Fill openings 5x faster with our pre-vetted talent pool.
                        </p>
                    </div>
                    <div className='flex justify-start items-center gap-3'>
                        <p className='font-inter text-base md:text-xl font-normal text-[#525252] underline'>
                            Save up to 47% on staffing costs with Hireoid's remote talent pool.
                        </p>
                    </div>
                    <div className='flex justify-start items-center gap-3'>
                        <p className='font-inter text-base md:text-xl font-normal text-[#525252] underlinegit '>
                            Say goodbye to revolving doors! Hireoid's 96.2% retention rate ensures a stable, sustainable, qualified team.
                        </p>
                    </div>
                </div>

                <button
                    className="bg-primary text-white text-base py-2 px-6 font-medium rounded-full flex items-center"
                >
                    Get started
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2" />

                </button>
            </div>

            <Ceo />
        </>
    )
}

export default HealthCare