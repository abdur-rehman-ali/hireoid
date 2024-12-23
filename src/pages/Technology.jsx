import React from 'react'
import hero from '../assets/technology/hero.png'
import { HeroSection, HowDoesItWork, Ceo, Topperformer, WhyHireoid } from '../components'
import { contentData } from '@/data/contentData'
import Frontend from "../assets/technology/Frontend.png"
import FullStack from "../assets/technology/FullStack.png"
import UI from "../assets/technology/UI.png"
import Wordpress from "../assets/technology/Wordpress.png"
import CardGrid from '@/components/card/CardGrid'

const technologyCardsData = [
    {
        image: Frontend,
    },
    {
        image: FullStack,
    },
    {
        image: UI,
    },
    {
        image: Wordpress,
    },
];


const Technology = () => {
    return (
        <>
            <HeroSection
                title="Hire top global tech talent to bring your ideas to life flawlessly."
                subtitle="From front-end to back-end and everything in between our sourcing team is adept at finding precisely what you require, streamlining your sourcing process."
                imageSrc={hero}
                buttonText="Get Started"
                onButtonClick={() => alert('Button clicked!')}
            />
            <CardGrid
                cardTitle="Skill our talent are specialized on"
                cardsData={technologyCardsData}
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
                showParagraph={true}
                title="Time to screen qualified developers."
                description="In the business world, finding the right talent quickly is crucial. Tell us what you need, and we'll work fast to deliver a selection of top-notch candidates within days. We'll take care of the hard work for you."
                buttonText="Get Started"
            />
            <WhyHireoid />
        </>
    )
}

export default Technology