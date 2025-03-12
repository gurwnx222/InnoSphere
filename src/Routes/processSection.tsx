import React from 'react';

const ProcessSection = () => {
  const processSteps = [
    {
      number: "01",
      title: "Research",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#1E40AF" strokeWidth="2">
          <circle cx="12" cy="12" r="8" />
          <line x1="5" y1="5" x2="8" y2="8" />
          <line x1="16" y1="16" x2="19" y2="19" />
          <line x1="5" y1="19" x2="8" y2="16" />
          <line x1="16" y1="8" x2="19" y2="5" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Design",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#1E40AF" strokeWidth="2">
          <path d="M3 17l6-6 4 4 8-8" />
          <path d="M14 7h7v7" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Develope",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#1E40AF" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 8h-2v8h2" />
          <path d="M15 8h2v8h-2" />
          <path d="M12 8v8" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Test",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#1E40AF" strokeWidth="2">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <line x1="8" y1="8" x2="16" y2="8" />
          <line x1="8" y1="12" x2="16" y2="12" />
          <line x1="8" y1="16" x2="12" y2="16" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 bg-white">
      <div className="text-center mb-12">
        <p className="text-lg text-blue-600 font-medium mb-2">\\ Planning \\</p>
        <h2 className="text-4xl font-bold text-[#1A2258]">Our Process</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {processSteps.map((step, index) => (
          <div key={index} className="w-full sm:w-64 bg-gray-50 p-6 rounded-lg">
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 flex items-center justify-center">
                {step.icon}
              </div>
              <span className="text-4xl font-light text-gray-200">{step.number}</span>
              
            </div>

            <h3 className="text-lg font-bold text-[#1A2258] mb-2">{step.title}</h3>
            <div className="w-12 h-1 bg-blue-600 mb-4"></div>
            <p className="text-sm text-gray-600">
              Every successful project begins with in-depth research. We take the time to understand your business, target audience, and market trends. 
              .
            </p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSection;