import { HeroSection, HomeCards, HowDoesItWork } from '../components'
import hero from "../assets/main-page/hero-image.png"
import cardOne from "../assets/main-page/home-card-1.png"
import cardTwo from "../assets/main-page/home-card-2.png"
import cardThree from "../assets/main-page/home-card-3.png"

import { contentData } from '@/data/contentData'

const MianPage = () => {
    return (
        <div>
            <HeroSection
                title="Hire Globally, Scale Seamlessly."
                subtitle="Hireoid empowers companies to expand internationally with unmatched speed, flexibility, and compliance."
                imageSrc={hero}
                buttonText="Get Started"
                onButtonClick={() => alert('Button clicked!')}
            />
            {/* Hero Cards */}
            <div className='pt-7 pb-10'>
                <HomeCards
                    flexDir="flex-row"
                    title="Global Expansion Made Easy."
                    subtitle="Hireoid is your all-in-one solution for stress-free global hiring that handles
                    everything for a smooth onboarding and offboarding experience.  Let us handle payroll, benefits, taxes, compliance, and
                    even stock options for your team."
                    imageSrc={cardOne}
                    imageHeight='409'
                    imageWidth='411'
                    buttonText="Hire Talent"
                    onButtonClick={() => alert('Button clicked!')}
                />
                <HomeCards
                    flexDir="flex-row-reverse"
                    title="Global Talent, Simplified."
                    subtitle="Find the best, Hireoid handles the rest. Global Hiring Made Simple. Hire onboard & manage Talent Anywhere."
                    imageSrc={cardTwo}
                    imageHeight='400'
                    imageWidth='560'
                    buttonText="Hire Talent"
                    onButtonClick={() => alert('Button clicked!')}
                />
                <HomeCards
                    flexDir="flex-row"
                    title="From solopreneur to enterprise, we scale your success."
                    subtitle="Powering growth, for everyone, everywhere."
                    imageSrc={cardThree}
                    imageHeight='411'
                    imageWidth='409'
                    buttonText="Hire Talent"
                    onButtonClick={() => alert('Button clicked!')}
                />
            </div>
            {/* How Does it start */}
            <div className='bg-[#F8F9FB]'>
                <div className='max-w-1440 mx-auto pt-10 mb-32'>
                    <div className='flex flex-col gap-y-6 px-6 lg:mx-24 lg:py-10 h-auto lg:h-[252px]'>
                        <h1 className="text-primary text-3xl lg:text-5xl font-extrabold leading-normal tracking-tight">
                            How it Works
                        </h1>
                        <p className="text-base lg:text-xl font-light leading-6 text-gray pb-4">
                            At our core, we advocate for equal opportunities across all businesses. Simply send us your job requirements, and our AI-powered process will shortlist three qualified candidates for your consideration. This way, you have the power to choose the perfect fit for your team in a matter of days.
                        </p>
                    </div>

                    <div className='px-8 lg:mx-16'>
                        <HowDoesItWork data={contentData} />
                    </div>
                </div>
            </div>

            {/* Save Up Section */}
            <div className='max-w-1440 mx-auto mt-20 mb-32'>
                <div className='flex justify-between items-center bg-primary rounded-3xl mx-24 py-10 px-16'>
                    <div className='flex flex-col gap-5'>
                        <span className='font-bold text-4xl text-white'><span className='text-[#37B6B7] text-4xl font-black'>IMMEDIATELY</span> save up to</span>
                        <span className='font-bold text-4xl text-white'><span className='text-[#37B6B7] text-4xl font-black'>47%</span> in payroll costs</span>
                    </div>
                    <div>
                        <button
                            className="bg-[#37B6B7] text-white text-inter text-base py-4 px-4 font-bold rounded-full flex justify-center items-center gap-2">
                            <div className='h-[3px] w-5 bg-white'></div>
                            <span>
                                I’M READY TO SAVE & SCALE
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MianPage