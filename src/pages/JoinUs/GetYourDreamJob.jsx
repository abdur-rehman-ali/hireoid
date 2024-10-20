import mainImage from "../../assets/join-us/main-image.png"
import { JoinUsInfoSection } from '../../components'

const GetYourDreamJob = () => {
    return (
        <div className='flex max-h-[1080px] max-w-1440 mx-auto'>
            <div className=''>
                <img src={mainImage} alt="" className='w-[600px] h-full object-fill' />
            </div>
            <JoinUsInfoSection
                backHomeLink="/"
                title="Get your dream job"
                subtitle="Upon your selection, our team will assist you throughout the entire onboarding process."
                nextButtonLink="/apply-now"
                buttonText="Apply Now"
                page='5'
            />
        </div>
    )
}

export default GetYourDreamJob