import mainImage from "../../assets/join-us/main-image.png"
import { JoinUsInfoSection } from '../../components'

const AllignWithTeam = () => {
    return (
        <div className='flex max-h-[1080px] max-w-1440 mx-auto'>
            <div className=''>
                <img src={mainImage} alt="" className='w-[600px] h-full object-fill' />
            </div>
            <JoinUsInfoSection
                backHomeLink="/"
                title="Align with the team"
                subtitle="Interview with our team, to assess fit. It's not just about skills; it's about synergy and rapport."
                nextButtonLink="/get-your-dream-job"
                buttonText="Next"
                page='4'
            />
        </div>
    )
}

export default AllignWithTeam