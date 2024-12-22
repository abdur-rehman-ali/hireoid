import React from "react";
import hero from "../assets/affiliate/hero.png";
import {
  HeroSection,
  FAQComponent,
  Topperformer,
  AboutAffiliatesProgram,
  HomeCards,
} from "../components";
import cardOne from "../assets/affiliate/cardOne.png";
import cardTwo from "../assets/affiliate/card2.png";
import cardThree from "../assets/affiliate/card3.png";

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
  {
    question: "How will I be charged?",
    answer:
      "You will be charged based on the agreed-upon staffing solution, which may involve an hourly rate, project-based pricing, or a monthly retainer depending on the type of service provided.",
  },
];

const AffiliateProgram = () => {
  return (
    <>
      <HeroSection
        title="Build Your Dream Team"
        subtitle="Join Hireoid Affiliate Program and earn up
to 15% commission on referrals for a full year.
free to sign up, easy to participate in, and there no minimum sales requirement."
        imageSrc={hero}
        buttonText="Schedule a demo"
        onButtonClick={() => alert("Button clicked!")}
      />

      <div className="px-6 md:px-[120px] pt-20 max-w-1440 mx-auto flex flex-col gap-6">
        <h1 className="text-primary text-4xl md:text-5xl font-extrabold leading-normal tracking-tight">
          About Affiliates Program
        </h1>
        <p className="text-[#525252] mb-6 text-lg md:text-xl font-light leading-snug tracking-tight">
          From helping start-ups get their MVP live, to managing multi-year,
          million-dollar enterprise solution build-outs - we got you covered.
        </p>
      </div>

      <AboutAffiliatesProgram />

      <div className={`flex flex-col md:flex-row-reverse gap-8 px-6 md:px-28 py-5 max-w-1440 mx-auto`}>
        <div className="flex-1 flex justify-center">
          <img
            src={cardOne}
            style={{ height: `409px`, width: `511px` }}
            className="object-contain"
            alt="Description of card"
          />
        </div>
        <div className="flex flex-col flex-1 items-start justify-center">
          <h1 className="text-primary mb-4 text-4xl md:text-5xl font-extrabold leading-normal tracking-tight">
            How does Hireoid’s Affiliates Program work?
          </h1>
          <p className="text-lg md:text-xl font-normal leading-6 text-gray mb-6">
            The Hireoid’s Affiliates Program is designed for influencers,
            incubators, or any business interested in earning commission
            by promoting Hireoid.com to their audience or partners.
          </p>
        </div>
      </div>


      <div className={`flex flex-col md:flex-row gap-8 px-6 md:px-28 py-5 max-w-1440 mx-auto`}>
        <div className="flex-1 flex justify-center">
          <img
            src={cardThree}
            style={{ height: `429px`, width: `611px` }}
            className="object-contain"
            alt="Description of card"
          />
        </div>
        <div className="flex flex-col flex-1 items-start justify-center">
          <h1 className="text-primary mb-4 text-4xl md:text-5xl font-extrabold leading-normal tracking-tight">
            Why partner with Hireoid.com?
          </h1>
          <p className="text-lg md:text-xl font-normal leading-6 text-gray mb-6">
            Free to join
          </p>
          <p className="text-lg md:text-xl font-normal leading-6 text-gray mb-6">
            No limit on the commissions you can earn.
          </p>
          <p className="text-lg md:text-xl font-normal leading-6 text-gray mb-6">
            No minimum sales requirement.
          </p>
          <p className="text-lg md:text-xl font-normal leading-6 text-gray mb-6">
            Expert support and management.
          </p>
          <p className="text-lg md:text-xl font-normal leading-6 text-gray mb-6">
            Recurring revenue potential.
          </p>
        </div>
      </div>

      <div className={`flex flex-col md:flex-row-reverse gap-8 px-6 md:px-28 py-5 max-w-1440 mx-auto`}>
        <div className="flex-1 flex justify-center">
          <img
            src={cardTwo}
            style={{ height: `429px`, width: `611px` }}
            className="object-contain"
            alt="Description of card"
          />
        </div>
        <div className="flex flex-col flex-1 items-start justify-center">
          <h1 className="text-primary mb-4 text-4xl md:text-5xl font-extrabold leading-normal tracking-tight">
            How much can you earn?
          </h1>
          <p className="text-lg md:text-xl font-normal leading-6 text-gray mb-6">
            Your commissions are equal to a percentage of the revenue that Hireoid earns
            from referrals in a given month.
          </p>
          <p className="text-lg md:text-xl font-normal leading-6 text-gray mb-6">
            <strong>10% revenue</strong> share in months where the total revenue referred is less than
            $10,000.
          </p>
          <p className="text-lg md:text-xl font-normal leading-6 text-gray mb-6">
            <strong>15% revenue</strong> share in months where the total revenue referred is more than
            $10,000.
          </p>
          <p className="text-lg md:text-xl font-normal leading-6 text-gray mb-6">
            Referral commissions are paid monthly and calculated based on Hireoid’s
            charges minus any discounts, security deposits, taxes, and VAT (or GST).Commissions are only valid for 12 months from the activation date.
          </p>
        </div>
      </div>


      <div className="px-6 py-6 md:px-[120px] pt-20 max-w-1440 mx-auto flex flex-col gap-6">
        <h1 className="text-primary text-4xl md:text-5xl font-extrabold leading-normal tracking-tight">
          We are committed to cultivating meaningful partnerships.
        </h1>
        <p className="text-[#525252] mb-6 text-lg md:text-xl font-light leading-snug tracking-tight">
          We extend an invitation to recommend Hireoid to your network or partners, and
          in return, offer a commission for each client referral. As a Hireoid affiliate, you
          gain access to valuable marketing materials and exclusive resources tailored to
          effectively communicate the advantages of partnering with Hireoid.
        </p>
      </div>


      <Topperformer
        showButton={false}
        showParagraph={false}
        title="We love to share"
        description="Our commitment to equitable partnerships is evident in our commission structure,
where your earnings are determined by a percentage of the revenue generated
from your referrals to Hireoid.com each month."
        buttonText="Get Started"
      />
      <FAQComponent
        faqData={SatffingData}
        containerHeight="80px"
        title="Get Answers To The Most Common Questions."
      />
    </>
  );
};

export default AffiliateProgram;
