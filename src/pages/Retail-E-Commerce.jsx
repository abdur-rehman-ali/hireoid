import React from 'react'
import hero from '../assets/ReatilEcommerce/hero.png'
import { HeroSection, HowDoesItWork, Ceo, Topperformer, WhyHireoid} from '../components'
import { contentData } from '@/data/contentData'
import Card from "../assets/ReatilEcommerce/card_image.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const RetailCommerce = () => {
    return (
        <>
            <HeroSection
                title="Find the best Retail & E-commerce team to boost your business"
                subtitle="Supercharge your retail and e-commerce business with our seamless talent sourcing solutions."
                imageSrc={hero}
                buttonText="Hire Talent"
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
                showButton={false}
                showParagraph={false}
                title="Top performers from all over the globe"
                description="Build a World-Class Team to Power Your Business Success."
                buttonText="Get Started"
            />
            <WhyHireoid />
            <div className='max-w-1440 mx-auto h-[540px]'>
                <div className="flex flex-row-reverse justify-between items-center px-28 py-20">
                    <div className='flex-[0.4]'>
                        <img src={Card} alt="Hero" className="w-[488px] h-[340px] object-cover rounded-lg" />
                    </div>
                    <div className='flex-[0.55] flex flex-col items-start gap-5 '>
                        <h1 className=" text-primary text-6xl font-bold leading-tighttracking-wide">Right talent is the key to
                            a successful brand.</h1>
                        <p className="text-xl font-light leading-6 text-[#525252]">We’ll find you the best talent for
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

export default RetailCommerce