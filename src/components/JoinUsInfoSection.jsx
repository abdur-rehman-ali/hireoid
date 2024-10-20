import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const JoinUsInfoSection = ({ backHomeLink, title, subtitle, buttonText, nextButtonLink, onButtonClick, page }) => {
    return (
        <div className='pt-[200px] pr-[112px] pb-[100px] pl-[32px] font-inter flex flex-col items-start gap-40 '>
            {/* Back Button link */}
            <Link to={backHomeLink}
                onClick={onButtonClick}
                className=" text-btnBlack border border-btnBdr text-lg py-2 px-8 font-semibold rounded-full">
                <FontAwesomeIcon icon={faArrowRight} className="mr-2 transform rotate-180" />
                Back Home
            </Link>
            {/* Join Us Info */}
            <div className='w-[695px]'>
                <span className='font-inter text-2xl font-extrabold text-primary'>Hireoid Global Talent Network</span>
                <h1 className=" text-primary font-inter mb-4 text-6xl font-extrabold leading-normal">{title}</h1>
                <p className="text-xl font-inter font-normal leading-6 tracking-tight text-gray mb-10 h-[72px]">{subtitle}</p>
                <Link to={nextButtonLink}
                    onClick={onButtonClick}
                    className="bg-primary text-white text-base py-2 px-6 font-semibold rounded-full">
                    {buttonText}
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </Link>
            </div>
            {/* Bars */}
            <div className='flex gap-3'>
                {Array.from({ length: 5 }).map((_, index) => (
                    <div
                        key={index}
                        className={`w-[60px] h-[8px] rounded-full ${index < page ? 'bg-primary' : 'bg-grayBar'}`}
                    ></div>
                ))}
            </div>

        </div>
    )
}

export default JoinUsInfoSection