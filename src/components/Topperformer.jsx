import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Topperformer = ({ showButton, showParagraph, title, description, buttonText }) => {
    return (
        <>
            <div className='bg-gradient-to-r from-[#37B6B7] to-[#1A375A]'>
                <div className='max-w-1440 mx-auto text-white font-inter py-20 px-28'>
                    <h1 className='text-4xl font-bold mb-6'>{title}</h1>
                    {
                        showParagraph && (
                            <p className='text-[28px] font-bold mb-6'>We can assist you in assembling a high-caliber tech team comprised of top talent from across the globe.</p>
                        )
                    }
                    <p className='text-xl font-light'>{description}</p>
                    {showButton && (
                        <button className="bg-primary text-white text-base py-2 px-6 font-semibold rounded-full mt-6">
                            {buttonText}
                            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};



export default Topperformer
