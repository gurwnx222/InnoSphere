import React from "react";
import ProductImage from './Images/productImage.png';

const productSection = ()=>{
  return(

    <div className="container mt-0 mx-auto px-4 py-8 grid md:grid-cols-2 gap-12 items-center min-h-screen">
      {/* Left Side - Image */}
      <div className="relative">
        <img 
          src={ProductImage} 
          alt="Team Collaboration" 
          className="w-full rounded-2xl shadow-lg"
        />
      </div>

      {/* Right Side - Content */}
      <div className="space-y-6">
        {/* Section Marker */}
        <div className="text-blue-600 font-medium uppercase tracking-wide">
          What We Do
        </div>

        {/* Main Headline */}
        <h1 className="text-[40px] font-bold text-[#0E2B5C] leading-tight">
          We Develop Product That People Love to Use.
        </h1>

        {/* Description */}
        <p className="text-[#6B7280] text-base leading-relaxed">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
        </p>

        {/* Vision and Goal Cards */}
        <div className="grid grid-cols-2 gap-4">
          {/* Our Vision Card */}
          <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm flex items-center space-x-4">
            <div className="bg-[#FF4B4B] text-white p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.036 9.688a9 9 0 11-9.546-9.697" />
              </svg>
            </div>
            <div>
              <h3 className="text-[#0E2B5C] font-semibold text-sm">Our Vision</h3>
              <p className="text-xs text-gray-500">It is a long esta -blished fact that</p>
            </div>
          </div>

          {/* Our Goal Card */}
          <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm flex items-center space-x-4">
            <div className="bg-[#FF4B4B] text-white p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <div>
              <h3 className="text-[#0E2B5C] font-semibold text-sm">Our Goal</h3>
              <p className="text-xs text-gray-500">It is a long esta -blished fact that</p>
            </div>
          </div>
        </div>

        {/* View More Button */}
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition-colors">
          View More
        </button>
      </div>
    </div>
  )
}

export default productSection;