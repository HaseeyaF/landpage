import React, { useState } from 'react';

const FAQ = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const faqItems = [
    {
      question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
      answer: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
      answer: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
      answer: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
    }
  ];

  return (
    <div className="flex flex-col items-center gap-7 w-full max-w-[846px] mx-auto px-4
      sm:max-w-[700px]
      md:max-w-[846px]
      lg:max-w-[1100px]
      xl:max-w-[1200px]"
    >
      <h2 className="text-primary-blue font-poppins text-[22px] sm:text-[24px] md:text-[27px] font-bold leading-tight tracking-wide text-center">
        Frequently asked questions
      </h2>

      <div className="flex flex-col items-stretch gap-4 w-full">
        {faqItems.map((item, index) => (
          <div 
            key={index} 
            className="bg-[#FAF8FF] rounded-lg p-5 sm:p-6 cursor-pointer transition-shadow
              hover:shadow-lg"
          >
            <div 
              className="flex justify-between items-center"
              onClick={() => toggleItem(index)}
            >
              <div
                className={`flex-1 font-inter font-medium leading-7 text-lg sm:text-xl
                  ${openItem === index ? 'text-primary-blue' : 'text-black'}`}
              >
                {item.question}
              </div>

              <div className="ml-4 flex-shrink-0">
                {openItem === index ? (
                  <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 12H15" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 8V22" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1 15H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
            </div>

            {openItem === index && (
              <div className="mt-3 text-neutral-600 font-inter text-base leading-7">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
