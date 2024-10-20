import mainImage from "../../assets/join-us/main-image.png"
import { JoinUsInfoSection } from '../../components'

const ChooseYourIndustry = () => {
    return (
        <div className='flex max-h-[1080px] max-w-1440 mx-auto'>
            <div className=''>
                <img src={mainImage} alt="" className='w-[600px] h-full object-fill' />
            </div>
            <JoinUsInfoSection
                backHomeLink="/join-us"
                title="Choose your industry"
                subtitle="Dive into our pool of industries and find the role that leaps out at you. We've got a world of options waiting just for you."
                nextButtonLink="/fill-the-application"
                buttonText="Next"
                page='2'
            />
        </div>
    )
}

export default ChooseYourIndustry