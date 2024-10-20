import React from 'react';

const IntegrattedStaffingScreeningCards = ({
  flexDir = "flex-row",
  number,
  imageSrc,
  imageHeight,
  imageWidth,
  title,
  subtitle,
}) => {
  return (
    <div
      className={`flex ${flexDir} gap-8 px-28 pb-20 h-[560px] max-w-1440 mx-auto`}
    >
      <div className='flex justify-center flex-[2]'>
        <img
          src={imageSrc}
          style={{ height: `${imageHeight}px`, width: `${imageWidth}px` }}
          className='object-contain'
          alt='card visual'
        />
      </div>
      <div className='flex flex-col flex-[3] gap-8 items-start justify-center'>
        <span className='text-[#37B6B7] font-black text-5xl'>{number}</span>
        <h1 className='text-primary text-[40px] font-extrabold leading-tight tracking-tight'>
          {title}
        </h1>
        <p className='text-xl font-light leading-6 text-gray mb-6 tracking-tight'>
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default IntegrattedStaffingScreeningCards;