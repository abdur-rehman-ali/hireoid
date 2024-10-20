import React from 'react';
import one from "../assets/ReatilEcommerce/ceo_image-1.png";
import two from "../assets/ReatilEcommerce/ceo_image-2.png";
import three from "../assets/ReatilEcommerce/ceo_image-3.png";
import four from "../assets/ReatilEcommerce/ceo_image-4.png";

const Ceo = () => {
    return (
        <div className='bg-[#F2F3F8]'>
            <div className='max-w-1440 mx-auto px-4 md:px-28 py-32 flex flex-col gap-y-8'>
                <div className='flex justify-center gap-8'>
                    <img src={one} alt="CEO Image 1" />
                    <img src={two} alt="CEO Image 2" />
                    <img src={three} alt="CEO Image 3" />
                    <img src={four} alt="CEO Image 4" />
                </div>
                <div className='flex flex-col my-8'>
                    <span className='text-base md:text-xl font-medium leading-6 text-[#525252] text-center'>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from section.
                    </span>
                </div>
                <div className='flex flex-col justify-center items-center gap-3'>
                    <h1 className="text-[#2E3555] text-xl md:text-2xl font-bold leading-snug tracking-tight font-inter">
                        Andy Crebar,
                    </h1>
                    <p className="text-lg md:text-xl font-light leading-6 text-[#525252]">CEO, Sapling</p>
                </div>
            </div>
        </div>
    );
}

export default Ceo;
