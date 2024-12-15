import React from 'react'
import hero from '../assets/health-care/hero.png'
import { HeroSection, HowDoesItWork, Ceo, Topperformer, WhyHireoid } from '../components'
import { contentData } from '@/data/contentData'
import ClientSuccess from "../assets/health-care/ClientSuccess.png"
import Insurance from "../assets/health-care/Insurance.png"
import MedicalBilling from "../assets/health-care/MedicalBilling.png"
import MedicalCode from "../assets/health-care/MedicalCode.png"
import CardGrid from '@/components/card/CardGrid'


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
            {/* CEO Spliang */}
            <Ceo />

        </>
    )
}

export default HealthCare