import React from 'react'
import hero from '../assets/FAQ/hero.png'
import { HeroSection, FAQComponent } from '../components'
import { contentData } from '@/data/contentData'
import Card from "../assets/ReatilEcommerce/card_image.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const faqData = [
  {
      question: "How do you recruit your remote employee?",
      answer: "We follow a detailed recruitment process, including skill assessments, interviews, and background checks to ensure the right fit for your business."
  },
  {
      question: "Do all your remote employees speak English fluently?",
      answer: "Yes, all of our remote employees are proficient in English, both spoken and written, ensuring clear communication."
  },
  {
      question: "What kind of training do they receive?",
      answer: "Our remote employees undergo client-specific training, including technical skills, communication, and work processes, as per your business needs."
  },
  {
      question: "Do I get the same remote employee every day?",
      answer: "Yes, once you are assigned a remote employee, they will be dedicated to your business on a daily basis, ensuring consistency."
  },
  {
      question: "How do timings work? What does full-time mean?",
      answer: "Full-time means your remote employee will work for 8 hours a day, 5 days a week. We can align their working hours with your time zone."
  },
  {
      question: "What hours do they work?",
      answer: "Your remote employee's working hours are flexible and can be adjusted to align with your preferred time zone or business hours."
  },
  {
      question: "Can I hire a remote employee on a part-time basis?",
      answer: "Yes, we offer part-time options where employees can work for 4 hours a day. This option is subject to availability and client needs."
  },
  {
      question: "Can I ask my remote employee to work overtime on nights and weekends?",
      answer: "Overtime and weekend work are possible upon request, but they need to be agreed upon in advance to ensure the availability of the employee."
  },
  {
      question: "Where does my remote employee work – at home or in an office?",
      answer: "Our remote employees typically work from home, but we ensure they have the necessary environment to maintain productivity and professionalism."
  },
  {
      question: "How does my remote employee answer the phones in the office?",
      answer: "Your remote employee can use cloud-based telephony systems to answer your office calls and route them efficiently."
  },
  {
      question: "Who supplies my remote employee with electronic equipment like a computer and headset?",
      answer: "Our employees provide their own basic equipment like computers and headsets, but we ensure that they meet the required specifications."
  },
  {
      question: "Speaking of security, what else do you do to protect my information?",
      answer: "We enforce strict data security protocols, including VPNs, encrypted communication, and secure storage solutions to safeguard your sensitive information."
  },
  {
      question: "How do I communicate with my remote employee?",
      answer: "You can communicate with your remote employee via email, video calls, or messaging apps like Slack or Microsoft Teams, based on your preference."
  },
  {
      question: "How do labor laws work?",
      answer: "Our remote employees comply with the labor laws of their respective countries. We handle compliance with local regulations, so you don’t have to."
  },
  {
      question: "Who handles benefits?",
      answer: "We take care of employee benefits such as healthcare and paid leave, ensuring compliance with local labor laws and keeping the employee motivated."
  },
  {
      question: "How do remote employees get paid?",
      answer: "We handle all payments to remote employees, so you only need to make a simple monthly payment to us. We ensure prompt and accurate compensation."
  }
];
const FooterFAQ = () => {
  return (
    <>
    <HeroSection
                title="Frequently asked questions"
                subtitle="Perfectly Matched People, Skills & Budget 
Experience the advantages of a remote workforce – access to a wider range of skills and a dedicated team "
                imageSrc={hero}
                buttonText="Get Started"
                onButtonClick={() => alert('Button clicked!')}
            />
    <FAQComponent faqData={faqData} containerHeight="630px" title="Get Answers To The Most Common Questions."/>
    </>
  )
}

export default FooterFAQ