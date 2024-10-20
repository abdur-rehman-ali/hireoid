import React from 'react'
import hero from '../assets/transportation/hero.png'
import { HeroSection, HowDoesItWork, Ceo, Topperformer, WhyHireoid } from '../components'
import { contentData } from '@/data/contentData'
import Card from "../assets/ReatilEcommerce/card_image.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Transportation = () => {
    return (
        <>
            <HeroSection
                title="Top transportation talent to enhance your business."
                subtitle="Hire Best-in-Class talent with Hireoid and shift your team into high gear."
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
                    <div className='mx-24 h-[540px]'>
                        <HowDoesItWork data={contentData} />
                    </div>
                </div>
            </div>
            <WhyHireoid />
            {/* Top Performer */}
            <Topperformer
                showButton={true}
                showParagraph={false}
                title="Build the future of transportation, Today."
                description="Lead the transportation revolution, hire top global transportation experts to shape Next-Gen mobility."
                buttonText="Get Started"
            />
            {/* CEO Spliang */}
            <Ceo />
        </>
    )
}

export default Transportation