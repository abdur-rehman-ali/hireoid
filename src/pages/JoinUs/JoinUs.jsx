import React from 'react'
import mainImage from "../../assets/join-us/main-image.png"
import { JoinUsInfoSection } from '../../components'

const JoinUs = () => {
    return (
        <div className='flex max-h-[1080px] max-w-[1440px] mx-auto'>
            <div className=''>
                <img src={mainImage} alt="" className='w-[600px] h-full object-fill' />
            </div>
            <JoinUsInfoSection
                backHomeLink="/"
                title="Let's get started"
                subtitle="After refining the job descriptions with our AI-powered tools and our diverse, talented HR team, we will begin our search for the perfect candidates from a vast pool of talent. "
                nextButtonLink="/choose-your-industry-page"
                buttonText="Next"
                page='1'
            />
        </div>
    )
}

export default JoinUs