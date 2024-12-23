import React from 'react'
import hero from '../assets/ReatilEcommerce/hero.png'
import { HeroSection, HowDoesItWork, Ceo, Topperformer, WhyHireoid } from '../components'
import { contentData } from '@/data/contentData'
import Card from "../assets/ReatilEcommerce/card_image.png"
import SalesAssociate from "../assets/ReatilEcommerce/Sales-Associate.png"
import VisuaMerchandiser from "../assets/ReatilEcommerce/Visual-Merchandiser.png"
import StoreOperationsManager from "../assets/ReatilEcommerce/StoreOperationsManager.png"
import InventoryControlSpecialist from "../assets/ReatilEcommerce/Inventory-Control-Specialist.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import CardGrid from '@/components/card/CardGrid'


const retailCardsData = [
    {
      image: SalesAssociate,
    },
    {
      image: VisuaMerchandiser,
    },
    {
      image: InventoryControlSpecialist,
    },
    {
      image: StoreOperationsManager,
    },
  ];


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

            <CardGrid
                cardTitle="Find the Perfect Talent Fit"
                cardsData={retailCardsData}
            />

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
                            Right talent is the key to a successful brand.
                        </h1>
                        <p className="text-lg md:text-xl font-light leading-6 text-[#525252]">
                            We’ll find you the best talent for your business.
                        </p>
                        <button className="bg-primary text-white text-base py-2 px-6 mb-2 font-semibold rounded-full">
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