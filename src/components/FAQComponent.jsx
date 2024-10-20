import React, { useState } from 'react';
import Group from "../assets/FAQ/group.png";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const FAQComponent = ({ faqData, containerHeight, title }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="mx-auto max-w-[1440px] px-4">
            <div className="bg-[#2E3555] mx-auto py-20 px-8 mt-28 mb-32 rounded-[40px]">
                <div className='text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-8'>
                    <div className='flex-[0.35] flex flex-col justify-between h-full'>
                        <h1 className="text-3xl md:text-4xl font-bold leading-normal">
                            {title}
                        </h1>
                        <div className={`hidden md:block`} style={{ height: containerHeight }}></div>
                        
                        <div className="mt-8 bg-[#171E38] p-4 md:p-8 rounded-2xl flex flex-col gap-4 md:gap-6">
                            <p className='text-xl md:text-2xl font-medium font-inter'>Still have a question?</p>
                            <span className='text-[14px] md:text-[16px] font-normal font-inter'>
                                <a href="#" className="text-blue-300 hover:text-white underline">Contact us!</a> We’ll be happy to help you.
                            </span>
                            <img src={Group} alt="Group of support team members" className="w-full md:w-[336px] h-[75px] rounded-lg" />
                        </div>
                    </div>
                    <div className="space-y-4 flex-[0.65]">
                        <Accordion type="single" collapsible>
                            {faqData.map((faq, index) => (
                                <AccordionItem
                                    value={`item-${index}`}
                                    key={index}
                                    className="mb-4 border-none"
                                >
                                    <AccordionTrigger
                                        className="w-full bg-[#171E38] border-none text-left p-4 rounded-lg transition-colors duration-300"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent
                                        className="mt-2 bg-[#171E38] p-4 ring-0 border-none shadow-none rounded-lg focus:outline-none focus:ring-0"
                                    >
                                        <p className="no-underline">{faq.answer}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQComponent;
