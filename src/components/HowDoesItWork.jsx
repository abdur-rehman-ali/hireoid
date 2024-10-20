import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import buttonBottom from "../assets/main-page/btnBottom.png";
import howItWork1 from "../assets/main-page/howItWork1.png";

const HowDoesItWork = ({ data }) => {
  const [selectedContent, setSelectedContent] = useState(data[0]);

  function handleContent(id) {
    const content = data.find((item) => item.id === id);
    setSelectedContent(content);
  }

  return (
    <div className="mb-20 lg:mb-20">
      <div className="hidden lg:flex gap-1 justify-center items-center pb-10">
        {data.map((item, index) => (
          <div className='flex justify-center items-center gap-1' key={item.id}>
            <div className="flex flex-col items-center relative">
              <button
                className={`h-11 w-[180px] text-base font-inter font-normal rounded-full flex justify-center items-center ${
                  selectedContent.id === item.id
                    ? 'bg-teal-500 text-white'
                    : 'bg-white text-[#828699] border border-[#CCCCCC]'
                }`}
                onClick={() => handleContent(item.id)}
              >
                {item.title}
              </button>
              {selectedContent.id === item.id && (
                <img
                  src={buttonBottom}
                  className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-4 h-4"
                  alt="triangle"
                />
              )}
            </div>
            {index !== data.length - 1 && (
              <div className="h-[2px] w-7 bg-[#CCCCCC]"></div>
            )}
          </div>
        ))}
      </div>

      {/* Content Section */}
      <div className="flex flex-col-reverse lg:flex-row-reverse justify-between items-center lg:gap-10 gap-6">
        {/* Image Section */}
        <div className="flex-[0.4] w-full lg:w-auto">
          <img
            src={selectedContent.image}
            alt="Hero"
            className="w-full h-auto lg:w-[488px] lg:h-[340px] object-cover rounded-lg"
          />
        </div>
        {/* Text Section */}
        <div className="flex-[0.6] flex flex-col items-start gap-5 pr-4 w-full lg:w-auto">
          <h1 className="text-primary text-xl lg:text-2xl font-bold leading-normal">
            {selectedContent.title}
          </h1>
          <p className="text-base lg:text-xl font-light leading-5 lg:leading-6 text-[#525252]">
            {selectedContent.description}
          </p>
          <button className="bg-primary text-white text-sm lg:text-base py-2 px-4 lg:px-6 font-semibold rounded-full flex items-center">
            {selectedContent.buttonName}
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </button>
        </div>
      </div>

      {/* Display all content on small screens */}
      <div className="block lg:hidden">
        {data.map((content) => (
          <div key={content.id} className="mt-8">
            <div className="w-full mb-4">
              <img
                src={content.image}
                alt={content.title}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <h1 className="text-primary text-xl font-bold">{content.title}</h1>
            <p className="text-base font-light leading-6 text-[#525252] mt-2 mb-4">{content.description}</p>
            <button className="bg-primary text-white text-sm py-2 px-4 font-semibold rounded-full flex items-center">
              {content.buttonName}
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowDoesItWork;
