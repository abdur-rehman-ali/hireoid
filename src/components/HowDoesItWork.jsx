import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import buttonBottom from "../assets/main-page/btnBottom.png"
import howItWork1 from "../assets/main-page/howItWork1.png"

const HowDoesItWork = ({ data }) => {
    const [selectedContent, setSelectedContent] = useState(data[0]);

    function handleContent(id) {
        const content = data.find(item => item.id === id);
        setSelectedContent(content);
    }

    return (
        <div>
            {/* Button Group */}
            <div className="flex gap-1 justify-center items-center pb-10">
                {data.map((item, index) => (
                    <div className='flex justify-center items-center gap-1'>
                        <div key={item.id} className="flex flex-col items-center relative">
                            <button
                                className={`h-11 w-[180px] text-base font-inter font-normal rounded-full flex justify-center items-center ${selectedContent.id === item.id
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
                                    className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-4 h-4"  // Position and size adjustments
                                    alt="triangle"
                                />
                            )}
                        </div>
                        {index !== data.length - 1 && (
                            <div className='h-[2px] w-7 bg-[#CCCCCC]'></div>
                        )}
                    </div>
                ))}
            </div>

            <div className="flex flex-row-reverse justify-between items-center">
                <div className='flex-[0.4] '>
                    <img src={selectedContent.image} alt="Hero" className="w-[488px] h-[340px] object-cover rounded-lg" />
                </div>
                <div className='flex-[0.6] flex flex-col items-start gap-5 pr-4'>
                    <h1 className=" text-primary text-2xl font-bold leading-normal">{selectedContent.title}</h1>
                    <p className="text-xl h-24 font-light leading-6 text-[#525252]">{selectedContent.description}</p>
                    <button
                        className="bg-primary text-white text-base py-2 px-6 font-semibold rounded-full">
                        {selectedContent.buttonName}
                        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HowDoesItWork;
