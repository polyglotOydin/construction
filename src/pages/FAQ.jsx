import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex justify-center mt-10 bg-white">
      <div className="w-full max-w-md">
        <div className="space-y-4">
          {[1, 2, 3].map((index) => (
            <div key={index} className="collapse collapse-plus bg-base-200" style={{ borderBottom: 'none' }}>
              <input
                type="radio"
                name="my-accordion-3"
                id={`accordion-${index}`}
                checked={activeIndex === index}
                onChange={() => handleToggle(index)}
              />
              <label
                htmlFor={`accordion-${index}`}
                className="collapse-title text-xl font-medium cursor-pointer"
                style={{ borderBottom: 'none' }} // Remove border bottom
              >
                {activeIndex === index ? '-' : '+'} 1
              </label>
              {activeIndex === index && (
                <div className="collapse-content">
                  <p>Hello</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
