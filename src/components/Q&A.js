import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi"; // Import Feather Icons

const Faq = () => {
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  const toggleAccordion = (accordionId) => {
    setExpandedAccordion(
      expandedAccordion === accordionId ? null : accordionId
    );
  };

  return (
    <div className=" text-white container mx-auto p-16 max-md: w-full max-md:mx-0 max-md:p-0 ">
      <h2 className="text-5xl  font-extrabold text-center mb-8 ">
        Frequently Asked Questions
      </h2>
      <div className="accordion">
        {[1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className={`accordion-item border-b p-4 border-slate-800 ${
              expandedAccordion === `accordion-button-${index}`
                ? "border-black"
                : ""
            }`}
          >
            <button
              id={`accordion-button-${index}`}
              aria-expanded={expandedAccordion === `accordion-button-${index}`}
              onClick={() => toggleAccordion(`accordion-button-${index}`)}
              className="relative block w-full text-left py-4 px-0 text-text font-normal bg-none outline-none hover:text-blue focus:text-blue"
            >
              <span className="accordion-title pr-6 text-2xl ">
                Accordion Title {index}
              </span>
              <span className="icon absolute top-4 right-0 w-5 h-5 border border-solid border-slate-800">
                {expandedAccordion === `accordion-button-${index}` ? (
                  <FiMinus className="w-full h-full" />
                ) : (
                  <FiPlus className="w-full h-full" />
                )}
              </span>
            </button>
            <div
              className={`accordion-content opacity-0 max-h-0  transition-all duration-200 ease-linear ${
                expandedAccordion === `accordion-button-${index}`
                  ? "opacity-100 max-h-96 "
                  : ""
              }`}
            >
              <p className="text-xl font-light  pb-10 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Elementum sagittis vitae et leo duis ut. Ut tortor pretium
                viverra suspendisse potenti.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
