const ScreeningCards = ({ flexDir, number, imageSrc, imageHeight, imageWidth, title, subtitle }) => {
    return (
    <div className={`flex ${flexDir} max-md:flex-col-reverse lg:${flexDir} gap-8 px-6 lg:px-20 py-12 lg:py-20 h-auto lg:h-[560px] max-w-7xl mx-auto`}>
        <div className='flex justify-center flex-[2]'>
          <img
            src={imageSrc}
            style={{ height: `${imageHeight}px`, width: `${imageWidth}px` }}
            className="object-contain"
          />
        </div>
        <div className='flex flex-col flex-[3] gap-4 md:gap-8 items-start justify-center'>
          <span className='text-[#37B6B7] font-black text-4xl md:text-5xl'>{number}</span>
          <h1 className="text-primary text-[28px] md:text-[40px] font-extrabold leading-tight tracking-tight">{title}</h1>
          <p className="text-base md:text-xl font-light leading-6 text-gray mb-4 md:mb-6 tracking-tight">{subtitle}</p>
        </div>
      </div>
    );
  };
  
  export default ScreeningCards;
  