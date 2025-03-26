import React, { useState, useEffect } from 'react';
import sir from "../testominialImages/gaurav.jpeg"
import taran from "../testominialImages/taran.jpeg"
import amrinder from '../testominialImages/amrinder.png'

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center mb-3">
      {[...Array(5)].map((_, i) => (
        <svg 
          key={i} 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill={i < rating ? "#FFC107" : "#E2E8F0"} 
          className="h-5 w-5"
        >
          <path 
            fillRule="evenodd" 
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" 
            clipRule="evenodd" 
          />
        </svg>
      ))}
      <span className="text-sm text-gray-500 ml-2">{rating}.0/5.0</span>
    </div>
  );
};

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed",
      author: "Gaurav Kumar",
      position: "Founder of Tech Point",
      image: sir,
      rating: 5
    },
    {
      id: 2,
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed",
      author: "Amrinder",
      position: "College Student",
      image: amrinder,
      rating: 4.5
    },
    {
      id: 3,
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed",
      author: "Chunni Bhai",
      position: "College Student",
      image: taran,
      rating: 5
    }
  ];

  // Auto-scroll functionality
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  //   }, 20000);

  //   return () => clearInterval(interval);
  // }, [testimonials.length]);

  // Navigation functions
  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    );
  };

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-medium mb-2">\\ From our Customers \\</p>
          <h2 className="text-3xl font-bold text-[#1A2B5F]">Testimonials</h2>
        </div>

        <div className="relative">
          {/* Previous arrow */}
          <button 
            onClick={goToPrevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next arrow */}
          <button 
            onClick={goToNextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonials container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    {/* Left quote mark */}
                    <div className="text-blue-600 text-6xl font-serif self-start">"</div>

                    {/* Image and content */}
                    <div className="flex flex-col md:flex-row gap-8 items-center flex-grow">
                      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-blue-100">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author} 
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-grow">
                        {/* Added Star Rating Component */}
                        <StarRating rating={testimonial.rating} />

                        <p className="text-gray-600 mb-4">{testimonial.text}</p>
                        <div>
                          <h4 className="font-bold text-blue-900">{testimonial.author}</h4>
                          <p className="text-blue-500">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>

                    {/* Right quote mark */}
                    <div className="text-red-400 text-6xl font-serif self-end">"</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-3 w-3 rounded-full transition-colors ${
                index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;