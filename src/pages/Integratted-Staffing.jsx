import React from "react";
import {
  HeroSection,
  IntegrattedStaffingScreeningCards,
  HowDoesItWork,
  FAQComponent,
} from "../components";
import hero from "../assets/integratted-staffing/hero.png";
import card01 from "../assets/integratted-staffing/card01.png";
import card02 from "../assets/integratted-staffing/card02.png";
import card03 from "../assets/integratted-staffing/card03.png"; 
import card04 from "../assets/integratted-staffing/card04.png"; 
import card05 from "../assets/integratted-staffing/card05.png"; 
import card06 from "../assets/integratted-staffing/card06.png"; 

import { contentData } from '@/data/contentData'

const SatffingData = [
  {
    question: "What is integrated staffing solution?",
    answer:
      "Integrated staffing solutions provide a seamless way to manage your workforce by combining different staffing services and approaches to meet your business needs effectively.",
  },
  {
    question: "How can integrated staffing solutions benefit my business?",
    answer:
      "Integrated staffing solutions can help streamline hiring processes, reduce time-to-fill, ensure high-quality hires, and provide flexibility to adapt to changing workforce needs.",
  },
  {
    question: "What types of positions can you fill?",
    answer:
      "We can fill a wide range of positions including administrative, technical, professional, and executive roles across various industries.",
  },
  {
    question: "How does your pricing work for integrated staffing solutions?",
    answer:
      "Our pricing is based on the specific services required, the type of positions being filled, and the duration of the engagement. We offer competitive rates that align with your staffing needs.",
  },
  {
    question:
      "What are the advantages of using your integrated staffing solutions compared to traditional staffing agencies?",
    answer:
      "Our integrated staffing solutions provide a more customized approach, allowing us to tailor our services to your specific business needs, ensuring better quality hires and improved staff retention compared to traditional agencies.",
  },
  {
    question: "How quickly can you fill my open positions?",
    answer:
      "We strive to fill open positions as quickly as possible, often within days, by leveraging our extensive talent network and efficient recruitment processes.",
  },
  {
    question: "How will I be charged?",
    answer:
      "You will be charged based on the agreed-upon staffing solution, which may involve an hourly rate, project-based pricing, or a monthly retainer depending on the type of service provided.",
  },
];

const IntegrattedStaffing = () => {
  return (
    <>
      <HeroSection
        title="Build Your Dream Team"
        subtitle="Perfectly Matched People, Skills & Budget 
Experience the advantages of a remote workforce – access to a wider range of skills and a dedicated team member – without the burden of managing remote work logistics.
Scale up or down effortlessly - we adapt to your evolving needs."
        imageSrc={hero}
        buttonText="Schedule a demo"
        onButtonClick={() => alert("Button clicked!")}
      />

      <div className="px-[120px] pt-20  max-w-1440 mx-auto flex flex-col gap-6">
        <h1 className="text-primary text-5xl font-extrabold leading-normal tracking-tight">
          Discover the Hireoid Difference
        </h1>
        <p className="text-[#525252] mb-6 text-xl font-light leading-snug tracking-tight">
          Go beyond traditional recruitment and unlock explosive growth.
          Discover how Hireoid's integrated staffing solutions can empower your
          business to achieve its full potential.
        </p>
      </div>

      <IntegrattedStaffingScreeningCards
        flexDir="flex-row"
        title="Retention"
        subtitle="Hireoid prioritizes staff retention by selectively hiring highly skilled professionals aligned with your business culture, providing ongoing training and support for sustained commitment and motivation."
        imageSrc={card01}
        imageHeight="370"
        imageWidth="488"
      />
      <IntegrattedStaffingScreeningCards
        flexDir="flex-row-reverse"
        title="Integration with Core Employees"
        subtitle="Employees seamlessly integrate as essential team members, combining dedicated remote expertise with effective collaboration alongside your on-site team."
        imageSrc={card02}
        imageHeight="370"
        imageWidth="488"
      />
      <IntegrattedStaffingScreeningCards
        flexDir="flex-row"
        title="Affordable Rates"
        subtitle="Hireoid offers high-quality remote staffing at affordable rates, making it accessible for businesses of all sizes."
        imageSrc={card03}
        imageHeight="370"
        imageWidth="488"
      />
      <IntegrattedStaffingScreeningCards
        flexDir="flex-row-reverse"
        title="Secured Facilities"
        subtitle="Employees work from a secure remote facility ensures the highest security and compliance standards, with strict protocols followed by all remote workers for data security and confidentiality."
        imageSrc={card04}
        imageHeight="370"
        imageWidth="488"
      />
      <IntegrattedStaffingScreeningCards
        flexDir="flex-row"
        title="Inclusive of all Benefits"
        subtitle="We offer comprehensive benefits, including healthcare, gym access, high-speed internet, and fully equipped workstations, ensuring the happiness and productivity of our remote workers."
        imageSrc={card05}
        imageHeight="370"
        imageWidth="488"
      />
      <IntegrattedStaffingScreeningCards
        flexDir="flex-row-reverse"
        title="No Locked-In Contracts"
        subtitle="Hireoid offers flexible contracts to accommodate changing business needs, providing the best remote staffing solution with highly skilled talent at competitive rates."
        imageSrc={card06}
        imageHeight="370"
        imageWidth="488"
      />

      <div className="bg-[#F8F9FB]">
        <div className="max-w-1440 mx-auto  pt-10 mb-32">
          <div className="flex flex-col gap-y-6 mx-24 py-10  h-[252px]">
            <h1 className=" text-primary text-5xl font-extrabold leading-normal tracking-tight">
              How it Works
            </h1>
            <p className="text-xl font-light leading-6 text-gray">
              At our core, we advocate for equal opportunities across all
              businesses. Simply send us your job requirements, and our
              AI-powered process will shortlist three qualified candidates for
              your consideration. This way, you have the power to choose the
              perfect fit for your team in matter of day.
            </p>
          </div>
          <div className="mx-24  h-[540px]">
            <HowDoesItWork data={contentData} />
          </div>
        </div>
      </div>

      <FAQComponent faqData={SatffingData} containerHeight="60px" title={"Frequently Asked Questions"}  />
    </>
  );
};

export default IntegrattedStaffing;
