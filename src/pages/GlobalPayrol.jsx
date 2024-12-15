
import { HeroSection } from '../components'
import hero from "../assets/global-payrol/global-payrol-hero.png"
import frame1 from "../assets/global-payrol/global-frame-1.png"
import frame2 from "../assets/global-payrol/global-frame-2.png"
import summary from "../assets/global-payrol/summary-detail.png"
import summary1 from "../assets/global-payrol/global-payrol-workforce.png"

const GlobalPayrol = () => {
  return (
    <>
      <HeroSection
        title="Global Payroll Made Easy"
        subtitle="Hireoid empowers companies to expand internationally with unmatched
speed, flexibility, and compliance."
        imageSrc={hero}
        buttonText="Schedule a demo"
        onButtonClick={() => alert('Button clicked!')}
      />


      <div className="flex flex-col items-start gap-6 text-left w-full mx-auto px-6 md:px-[112px] pt-20 pb-10">
        <h1 className="text-primary text-4xl md:text-6xl font-extrabold leading-tight w-full">
          Manage payments with one platform.
        </h1>

        <p className="text-base md:text-xl font-light leading-6 text-gray-600 w-full">
          Enhance your global payroll processes using Hireoid's automated platform, alleviating manual workload for your in-house team.
        </p>

        <div className="relative w-full max-w-full mx-auto mt-8">
          <img src={frame1} alt="Frame 1" className="w-full" />

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img
              src={frame2}
              alt="Frame 2"
              className="w-80 h-64 md:w-80 md:h-40 max-sm:w-32 max-sm:h-16"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-6 text-left w-full mx-auto px-6 md:px-[112px] pt-20 pb-10">
        <h1 className="text-primary text-4xl md:text-6xl font-extrabold leading-tight w-full">
          One Click. Global Payroll. Done.
        </h1>

        <p className="text-base md:text-xl font-light leading-6 text-gray-600 w-full">
          Hireoid centralizes all your analytics into a unified dashboard, providing effortless access to information for managing your global workforce. Seamlessly review and compare payroll and attendance data month-to-month, ensuring proactive cost management.
        </p>

        <div className="relative w-full max-w-full mx-auto mt-8">
          <img src={summary} alt="Payroll summary" className="w-full" />
        </div>
      </div>

      <div className="flex flex-col items-start gap-6 text-left w-full mx-auto px-6 md:px-[112px] pt-20 pb-10">
        <h1 className="text-primary text-4xl md:text-6xl font-extrabold leading-tight w-full">
          Global Workforce Management Made Easy.
        </h1>

        <div className="relative w-full max-w-full mx-auto mt-8">
          <img src={summary1} alt="Payroll summary" className="w-full" />
        </div>
      </div>

    </>
  )
}

export default GlobalPayrol