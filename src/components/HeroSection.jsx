import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const HeroSection = ({ title, subtitle, imageSrc, buttonText, onButtonClick }) => {
  return (
    <section className='bg-[#F2F6F7]'>
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row-reverse font-inter items-center justify-center lg:gap-16 gap-8 px-6 lg:px-8 bg-[#F2F6F7] h-auto lg:h-[608px] py-8 lg:py-0">
        <div className="w-full lg:w-auto">
          <img
            src={imageSrc}
            alt="Hero"
            className="w-full h-auto lg:w-[558px] lg:h-[552px] object-cover"
          />
        </div>
        <div className='flex flex-col items-start text-left lg:text-left w-full lg:w-auto'>
          <h1 className="text-primary mb-4 text-3xl lg:text-5xl font-extrabold leading-snug lg:leading-tight">
            {title}
          </h1>
          <p className="text-base lg:text-xl font-normal leading-5 lg:leading-6 text-[#525252] mb-6">
            {subtitle}
          </p>
          <button
            onClick={onButtonClick}
            className="bg-primary text-white text-sm lg:text-base py-2 px-4 lg:px-6 font-semibold rounded-full flex items-center">
            {buttonText}
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
