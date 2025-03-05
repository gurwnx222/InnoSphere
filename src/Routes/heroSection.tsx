import React from "react";

const heroSection = ()=>{
  return(

    
    {/* Hero Section */}
    <section className="container mx-auto px-6 py-8 md:py-16 max-w-6xl">
      <div className="flex flex-col md:flex-row items-center justify-between relative">
        {/* Left Side with Text */}
        <div className="md:w-1/2 relative z-10 mb-12 md:mb-0 md:pr-8">
          {/* Background Circle */}
          <div className="absolute -top-20 -left-12 w-64 h-64 bg-blue-50 rounded-full -z-10"></div>

          {/* Text Content */}
          <div className="relative">
            <p className="text-red-500 font-medium mb-4">\ We Are Here \</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Better Insights For Business Growth
            </h1>
            <button className="bg-blue-500 hover:bg-blue-900 text-white px-8 py-3 rounded-md font-medium">
              View More
            </button>
          </div>
        </div>

        {/* Right Side with Image */}
        <div className="md:w-1/2 relative z-10">
          {/* Background Circle */}
          <div className="absolute -top-10 -right-12 w-64 h-64 bg-pink-100 rounded-full -z-10"></div>

          {/* Person Image */}
          <div className="relative max-w-full mx-auto">
            <img
              src={image}
              alt="Business professional"
              className="w-full h-auto object-cover"
            />

            {/* Background Decoration Circle */}
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-gray-100 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>

   
  )
}