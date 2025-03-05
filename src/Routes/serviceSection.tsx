import React from "react";

const serviceSection = ()=>{
  
  {/**  Handling Icons */}
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Web Design / Development',
      description: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 18h.01M8 21h8a2 2 0 002-2v-1a2 2 0 00-2-2H8a2 2 0 00-2 2v1a2 2 0 002 2zM3 13l8-8 4 4 6-6m-6 6v4" />
        </svg>
      ),
      title: 'UI/UX Design',
      description: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      title: 'Website Migration',
      description: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'App Development',
      description: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      ),
      title: 'HubSpot Integration',
      description: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email Marketing',
      description: 'It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout'
    }
  ];

  
  return(

    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[32px] font-bold text-[#0E2B5C] mb-4">Our Expertise</h2>
        <div className="h-1 w-20 bg-[#FF4B4B] mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="text-center p-6 border border-gray-100 rounded-lg hover:shadow-lg transition-all duration-300"
          >
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 bg-[#FF4B4B] bg-opacity-10 rounded-full flex items-center justify-center">
                <div className="text-[#FF4B4B]">
                  {service.icon}
                </div>
              </div>
            </div>
            <h3 className="text-[20px] font-semibold text-[#0E2B5C] mb-3">
              {service.title}
            </h3>
            <div className="h-1 w-20 bg-[#FF4B4B] mx-auto mb-4"></div>
            <p className="text-[#6B7280] text-[14px] leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default serviceSection;