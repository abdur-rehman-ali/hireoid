import React from 'react'
import tick from "../assets/ReatilEcommerce/tick.png"

const WhyHireoid = () => {
    const features = [
        {
            title: 'No upfront fees',
            description: 'Don’t pay a cent until you find the right teammate.',
        },
        {
            title: 'An incredible pool of talent',
            description: 'We source from all around the world for the best fit.',
        },
        {
            title: 'Support from start to finish',
            description: 'Our team is prepared to help you at every step of the process.',
        },
    ]

    return (
        <div className='max-w-1440 mx-auto'>
            <div className="px-28 py-20 font-inter flex flex-col gap-10">
                <h2 className="text-5xl font-semibold text-[#2E3555] mb-10">
                    Why Hireoid
                </h2>
                <div className="flex flex-col md:flex-row justify-between gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="border p-6 w-[384px] h-[282px] rounded-lg shadow-lg flex-1">
                            <div className="mb-6">
                               <img src={tick} alt="" />
                            </div>
                            <h3 className="text-3xl font-semibold text-[#2E3555] mb-6">
                                {feature.title}
                            </h3>
                            <p className="text-xl font-light text-[#525252]">{feature.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default WhyHireoid
