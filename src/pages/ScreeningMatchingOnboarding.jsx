import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { HeroSection, ScreeningCards } from '../components'
import hero from "../assets/screening-page/heroImage.png"
import acceptance from "../assets/screening-page/acceptance.png"
import graduate from "../assets/screening-page/graduate.png"
import proficiency from "../assets/screening-page/proficiency.png"
import talentOne from "../assets/screening-page/talent-matching-01-image.png"
import talentTwo from "../assets/screening-page/talent-matching-02-image.png"
import talentThree from "../assets/screening-page/talent-matching-03-image.png"
import oneGroup from "../assets/screening-page/oneGroup.png"
import twoGroup from "../assets/screening-page/twoGroup.png"
import threeGroup from "../assets/screening-page/threeGroup.svg"

const ScreeningMatchingOnboarding = () => {
    return (
        <>
            <HeroSection
                title="Easily Find, Hire, and onboard employees."
                subtitle="Hireoid empowers companies to expand internationally with unmatched speed, flexibility, and compliance."
                imageSrc={hero}
                buttonText="Get Started"
                onButtonClick={() => alert('Button clicked!')}
            />
            {/* Screening */}
            <div className='px-6 md:px-[120px] py-10 md:py-20 h-auto max-w-1440 mx-auto flex flex-col gap-6'>
                <h1 className='text-primary mb-4 text-3xl md:text-5xl font-extrabold leading-normal tracking-tight'>Screening</h1>
                <p className='text-[#525252] mb-4 text-base md:text-xl font-light leading-snug tracking-tight'>
                    Our comprehensive selection process guarantees admission into our esteemed global talent network exclusively for top-tier candidates. Each applicant undergoes a rigorous interview process, encompassing an English proficiency assessment, a practical evaluation, and assessments for both technical expertise and interpersonal skills.
                </p>
                <div className='flex flex-col md:flex-row justify-around items-center gap-6'>
                    <div className='flex flex-col items-center justify-center gap-4 h-[229px] w-full md:w-[384px]'>
                        <img src={acceptance} alt="" className='h-28 w-28 object-contain' />
                        <span className='font-semibold font-inter text-xl md:text-2xl tracking-tight text-primary'>Acceptance Rate</span>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-4 h-[229px] w-full md:w-[384px]'>
                        <img src={graduate} alt="" className='h-28 w-28 object-contain' />
                        <span className='font-semibold font-inter text-xl md:text-2xl tracking-tight text-primary'>Are At least Graduates</span>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-4 h-[229px] w-full md:w-[384px]'>
                        <img src={proficiency} alt="" className='h-28 w-28 object-contain' />
                        <span className='font-semibold font-inter text-xl md:text-2xl tracking-tight text-primary'>English Proficiency</span>
                    </div>
                </div>
            </div>

            {/* Talent Matching */}
            <div className='flex flex-col items-start gap-6 text-left max-w-1440 mx-auto px-6 md:px-[120px] py-10 md:py-20'>
                <h1 className="text-primary text-4xl md:text-6xl font-extrabold leading-normal">Talent Matching</h1>
                <p className="text-base md:text-xl font-light leading-6 text-gray">
                    With our effective talent matching strategy, we will identify 3 top candidates from our extensive global talent pool that align perfectly with your requirements and facilitate interviews with these exceptional individuals.
                </p>
                <button
                    // onClick={onButtonClick}
                    className="bg-primary text-white text-base py-2 px-6 font-medium rounded-full flex items-center"
                >
                    Schedule a demo
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </button>
            </div>

            {/* Cards */}
            <div>
                <ScreeningCards
                    flexDir="flex-row"
                    number='01'
                    title="We’ll match you with talent in less than 5 days."
                    subtitle="In our effort to expedite the hiring process, we strive to connect our clients with carefully
                    selected members from our talent network in less time than it typically takes to recruit and
                    screen independently."
                    imageSrc={talentOne}
                    imageHeight='370'
                    imageWidth='488'
                />
                <ScreeningCards
                    flexDir="flex-row-reverse"
                    number='02'
                    title="We pick the top three candidates from our network."
                    subtitle="Our talent matching team has extensive experience in effectively identifying candidates with the
                    precise skill sets to fulfill your requirements."
                    imageSrc={talentTwo}
                    imageHeight='370'
                    imageWidth='450'
                />
                <ScreeningCards
                    flexDir="flex-row"
                    number='03'
                    title="Evaluate resumes, conduct in-depth interviews, make a strategic selection."
                    subtitle="We have optimized our matching process to ensure it is both seamless and efficient, while still
                    empowering you to make well-informed decisions."
                    imageSrc={talentThree}
                    imageHeight='370'
                    imageWidth='488'
                />
            </div>
            {/* Onboarding */}
            <div className='flex flex-col items-start gap-6 text-left max-w-1440 mx-auto px-6 md:px-[112px] pt-20 pb-10'>
                <h1 className="text-primary text-4xl md:text-6xl font-extrabold leading-normal">Onboarding</h1>
                <p className="text-base md:text-xl font-light leading-6 text-gray">
                    Stress-free onboarding, seamless integration<br />
                    We handle all the onboarding logistics, ensuring your new team member smoothly integrates
                    with your company culture and gets up to speed on processes.
                    This lets you focus on what matters most – welcoming your new star player!
                </p>

                <div className='flex flex-col items-start gap-6'>
                    <div className='flex justify-start items-center gap-3'>
                        <FontAwesomeIcon icon={faCircleCheck} className='text-[#525252]' />
                        <p className='font-inter text-base md:text-xl font-normal text-[#525252]'>Dedicated Customer Success Manager.</p>
                    </div>
                    <div className='flex justify-start items-center gap-3'>
                        <FontAwesomeIcon icon={faCircleCheck} className='text-[#525252]' />
                        <p className='font-inter text-base md:text-xl font-normal text-[#525252]'>Each employee is provided with all necessary technology and hardware.</p>
                    </div>
                    <div className='flex justify-start items-center gap-3'>
                        <FontAwesomeIcon icon={faCircleCheck} className='text-[#525252]' />
                        <p className='font-inter text-base md:text-xl font-normal text-[#525252]'>Activation of your preferred communication methods.</p>
                    </div>
                </div>

                <button
                    // onClick={onButtonClick}
                    className="bg-primary text-white text-base py-2 px-6 font-medium rounded-full flex items-center"
                >
                    Start Hiring
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </button>
            </div>

            <div className='max-w-1440 mx-auto h-64 pb-28'>
                <div className='flex justify-center'>
                    <div className='flex flex-col justify-center items-center px-20 py-8'>
                        <h1 className='text-primary mb-4 text-[40px] font-semibold leading-normal tracking-tight'>Hire Faster</h1>
                        <div className='flex justify-center items-center gap-3'>
                            <img src={oneGroup} alt="" />
                            <span className='text-[#888B9A] text-xl font-inter'>5 Day</span>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center px-20 py-8'>
                        <h1 className='text-primary mb-4 text-[40px] font-semibold leading-normal tracking-tight'>Save Money</h1>
                        <div className='flex justify-center items-center gap-3'>
                            <img src={twoGroup} alt="" />
                            <span className='text-[#888B9A] text-xl font-inter'>47%</span>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center px-20 py-8'>
                        <h1 className='text-primary mb-4 text-[40px] font-semibold leading-normal tracking-tight'>Zero Turnover</h1>
                        <div className='flex justify-center items-center gap-3'>
                            <img src={threeGroup} alt="" />
                            <span className='text-[#888B9A] text-xl font-inter'>No-Cost Replacement</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ScreeningMatchingOnboarding