import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const HomeCards = ({ flexDir, title, subtitle, imageSrc, imageHeight, imageWidth, buttonText, onButtonClick }) => {
    return (
        <div className={`flex ${flexDir} gap-8 px-28 py-20  h-[560px] max-w-1440 mx-auto`}>
            <div className='flex-1 flex justify-center'>
                <img src={imageSrc} style={{ height: `${imageHeight}px`, width: `${imageWidth}px` }} className="object-contain" />
            </div>
            <div className='flex flex-col flex-1 items-start justify-center'>
                <h1 className=" text-primary mb-4 text-5xl font-extrabold leading-normal tracking-tight">{title}</h1>
                <p className="text-xl font-normal leading-6 text-gray mb-6">{subtitle}</p>
                <button
                    onClick={onButtonClick}
                    className="bg-primary text-white text-base py-2 px-6 font-semibold rounded-full">
                    {buttonText}
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </button>
            </div>
        </div>
    )
}

export default HomeCards