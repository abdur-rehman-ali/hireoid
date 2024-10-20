import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const HomeCards = ({ flexDir, title, subtitle, imageSrc, imageHeight, imageWidth, buttonText, onButtonClick }) => {
    return (
        <div className={`flex ${flexDir} flex-col-reverse lg:${flexDir} gap-8 px-6 lg:px-28 py-12 lg:py-20 h-auto lg:h-[560px] max-w-7xl mx-auto`}>
            <div className='flex-1 flex justify-center'>
                <img
                    src={imageSrc}
                    style={{ height: `${imageHeight}px`, width: `${imageWidth}px` }}
                    className="object-contain w-full h-auto lg:w-auto lg:h-auto"
                    alt="Card Image"
                />
            </div>
            <div className='flex flex-col flex-1 items-start justify-center text-center lg:text-left'>
                <h1 className="text-primary mb-4 text-3xl lg:text-5xl font-extrabold leading-snug lg:leading-normal tracking-tight">
                    {title}
                </h1>
                <p className="text-base lg:text-xl font-normal leading-5 lg:leading-6 text-gray-700 mb-6">
                    {subtitle}
                </p>
                <button
                    onClick={onButtonClick}
                    className="bg-primary text-white text-sm lg:text-base py-2 px-4 lg:px-6 font-semibold rounded-full flex items-center justify-center">
                    {buttonText}
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </button>
            </div>
        </div>
    );
}

export default HomeCards;
