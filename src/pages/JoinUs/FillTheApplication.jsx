import mainImage from "../../assets/join-us/main-image.png"
import { JoinUsInfoSection } from '../../components'

const FillTheApplication = () => {
    return (
        <div className='flex max-h-[1080px] max-w-1440 mx-auto'>
            <div className=''>
                <img src={mainImage} alt="" className='w-[600px] h-full object-fill' />
            </div>
            <JoinUsInfoSection
                backHomeLink="/"
                title="Fill the application"
                subtitle="Zip through our straightforward application and let your experience shine. It's all about you and your skills."
                nextButtonLink="/allign-the-team"
                buttonText="Next"
                page='3'
            />
        </div>
    )
}

export default FillTheApplication