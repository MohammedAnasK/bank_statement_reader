import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi'; // Import Feather Icons


const Faq = () => {
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  const toggleAccordion = (accordionId) => {
    setExpandedAccordion(expandedAccordion === accordionId ? null : accordionId);
  };

  return (
    <div className="bg-bg text-gray container mx-auto p-16">
      <h2 className="text-4xl font-bold mb-8">Frequently Asked Questions</h2>
      <div className="accordion">
        {[1, 2, 3, 4, 5].map((index) => (
          <div
            key={index}
            className={`accordion-item border-b border-black ${
              expandedAccordion === `accordion-button-${index}` ? 'border-black' : ''
            }`}
          >
            <button
              id={`accordion-button-${index}`}
              aria-expanded={expandedAccordion === `accordion-button-${index}`}
              onClick={() => toggleAccordion(`accordion-button-${index}`)}
              className="relative block w-full text-left py-4 px-0 text-text font-normal bg-none outline-none hover:text-blue focus:text-blue"
            >
              <span className="accordion-title pr-6 ">Accordion Title {index}</span>
              <span className="icon absolute top-4 right-0 w-5 h-5 border border-solid border-black">
                {expandedAccordion === `accordion-button-${index}` ? (
                  <FiMinus className="w-full h-full" />
                ) : (
                  <FiPlus className="w-full h-full" />
                )}
              </span>
            </button>
            <div
              className={`accordion-content opacity-0 max-h-0 overflow-hidden transition-all duration-200 ease-linear ${
                expandedAccordion === `accordion-button-${index}` ? 'opacity-100 max-h-36' : ''
              }`}
            >
              <p className="text-base font-light my-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis
                ut. Ut tortor pretium viverra suspendisse potenti.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
