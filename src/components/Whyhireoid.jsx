import React from 'react';
import tick from "../assets/ReatilEcommerce/tick.png";

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
  ];

  return (
    <div className='max-w-1440 mx-auto'>
      <div className="px-4 md:px-28 py-10 font-inter flex flex-col gap-10">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#2E3555] mb-2">
          Why Hireoid
        </h2>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {features.map((feature, index) => (
            <div key={index} className="border p-6 rounded-lg shadow-lg flex-1 flex flex-col h-full">
              <div className="mb-4">
                <img src={tick} alt="" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#2E3555] mb-4">
                {feature.title}
              </h3>
              <p className="text-lg md:text-xl font-light text-[#525252]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyHireoid;
