
import { HeroSection } from '../components'
import hero from "../assets/global-payrol/global-payrol-hero.png"
import frame1 from "../assets/global-payrol/global-frame-1.png"
import frame2 from "../assets/global-payrol/global-frame-2.png"
import summary from "../assets/global-payrol/summary-detail.png"
import summary1 from "../assets/global-payrol/global-payrol-workforce.png"
import Card from "../assets/global-payrol/pay-payrol.png"

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


      <div className="container mx-auto min-h-screen flex flex-col">
        {/* Section 1 */}
        <section className="flex flex-col items-start gap-6 text-left w-full px-6 md:px-[112px] py-10 md:py-20 flex-grow">
          <h1 className="text-primary text-4xl md:text-6xl font-extrabold leading-tight w-full">
            Manage payments with one platform.
          </h1>
          <p className="text-base md:text-xl font-light leading-6 text-gray-600 w-full">
            Enhance your global payroll processes using Hireoid's automated platform, alleviating manual workload for your in-house team.
          </p>
          <div className="relative w-full max-w-full mx-auto mt-8 flex-grow">
            <img src={frame1} alt="Frame 1" className="w-full h-full object-cover" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img
                src={frame2}
                alt="Frame 2"
                className="w-80 h-64 md:w-80 md:h-40 max-sm:w-32 max-sm:h-16"
              />
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="flex flex-col-reverse md:flex-row justify-between items-center w-full px-6 md:px-28 py-10 md:py-20 flex-grow">
          <div className="flex-1 md:flex-[0.55] flex flex-col items-start gap-5">
            <h1 className="text-primary text-4xl md:text-6xl font-bold leading-tight tracking-wide">
              Pay Your Team Worldwide, On Time, Every Time
            </h1>
            <p className="text-lg md:text-xl font-light leading-6 text-[#525252]">
              Add bonuses and raises whenever you want
            </p>
          </div>
          <div className="flex-1 md:flex-[0.4]">
            <img
              src={Card}
              alt="Hero"
              className="w-full md:w-[488px] h-auto object-cover rounded-lg"
            />
          </div>
        </section>

        {/* Section 3 */}
        <section className="flex flex-col items-start gap-6 text-left w-full px-6 md:px-[112px] py-10 md:py-20 flex-grow">
          <h1 className="text-primary text-4xl md:text-6xl font-extrabold leading-tight w-full">
            One Click. Global Payroll. Done.
          </h1>
          <p className="text-base md:text-xl font-light leading-6 text-gray-600 w-full">
            Hireoid centralizes all your analytics into a unified dashboard, providing effortless access to information for managing your global workforce. Seamlessly review and compare payroll and attendance data month-to-month, ensuring proactive cost management.
          </p>
          <div className="relative w-full max-w-full mx-auto mt-8 flex-grow">
            <img src={summary} alt="Payroll summary" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* Section 4 */}
        <section className="flex flex-col items-start gap-6 text-left w-full px-6 md:px-[112px] py-10 md:py-20 flex-grow">
          <h1 className="text-primary text-4xl md:text-6xl font-extrabold leading-tight w-full">
            Global Workforce Management Made Easy.
          </h1>
          <div className="relative w-full max-w-full mx-auto mt-8 flex-grow">
            <img src={summary1} alt="Payroll summary" className="w-full h-full object-cover" />
          </div>
        </section>
      </div>

    </>
  )
}

export default GlobalPayrol