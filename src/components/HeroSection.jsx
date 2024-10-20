import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const HeroSection = ({ title, subtitle, imageSrc, buttonText, onButtonClick }) => {
    return (
        <section className='bg-[#F2F6F7]'>
            <div className="max-w-1440 mx-auto flex flex-row-reverse font-inter items-center justify-center gap-16 px-28 bg-[#F2F6F7] h-[608px]">
                <div>
                    <img src={imageSrc} alt="Hero" className="w-[558px] h-[552px] max-w-screen-md object-cover" />
                </div>
                <div className='flex flex-col items-start text-left'>
                    <h1 className=" text-primary mb-4 text-5xl font-extrabold leading-tight">{title}</h1>
                    <p className="text-xl font-normal leading-6 text-gray mb-6">{subtitle}</p>
                    <button
                        onClick={onButtonClick}
                        className="bg-primary text-white text-base py-2 px-6 font-semibold rounded-full">
                        {buttonText}
                        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
