import React from "react";
import tick from "../assets/ReatilEcommerce/tick.png"; // Replace with your actual image path
import icon01 from "../assets/affiliate/icon01.png"
import icon02 from "../assets/affiliate/icon02.png"
import icon03 from "../assets/affiliate/icon03.png"

const AboutAffiliatesProgram = () => {
  const programs = [
    {
      title: "How does Hireoid’s Affiliates Program work?",
      icon: tick, // Placeholder for icon
      image: icon01
    },
    {
      title: "Why partner with Hireoid.com?",
      icon: tick, // Placeholder for icon
      image: icon02
    },
    {
      title: "How much can you earn?",
      icon: tick, // Placeholder for icon
      image: icon03
    },
  ];

  return (
    <div className="max-w-1440 mx-auto">
      <div className="px-28 py-20 font-inter flex flex-col gap-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="border p-6 w-[384px] h-[308px] rounded-lg shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="mb-6">
                  <img src={program.image} alt="" className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-semibold text-[#2E3555] mb-6">
                  {program.title}
                </h3>
              </div>
              <div className="flex justify-between items-center mt-auto">
                <a href="#" className="font-medium mt-2">
                  Learn More 
                </a>
                <span className="text-teal-500" style={{ transform: 'rotate(45deg)', display: 'inline-block' }}>&rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutAffiliatesProgram;
