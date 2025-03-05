import image from "./Images/heroImage.png";
import teamImage from "./Images/aboutImage.png";
import ProductImage from "./Images/productImage.png";
import './App.css';

const BusinessInsightsWebsite = () => {

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
  
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
   

      {/* Navigation Bar */}
      
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-red-500 w-10 h-10 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="ml-2 text-2xl font-bold text-gray-800">Nexora</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium">About</a>
          <a href="#services" className="text-gray-700 hover:text-gray-900 font-medium">Our Services</a>
          <a href="#portfolio" className="text-gray-700 hover:text-gray-900 font-medium">Portfolio</a>
          <a href="#blog" className="text-gray-700 hover:text-gray-900 font-medium">Blog</a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium">Contact</a>
          <button className="bg-blue-500 hover:bg-blue-900 text-white px-6 py-2 rounded-md font-medium">
            Get In Touch
          </button>
        </div>
        <div className="md:hidden">
          <button className="text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-8 md:py-16 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
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
          {/* <div className="md:w-1/2 relative z-10"> */}
          {/* Background Circle */}
          <div className="absolute inset-0 w-full h-full bg-pink-100 rounded-full -z-10"></div>

          {/* Person Image */}
          <div className="relative max-w-full mx-auto">
            <img
              src={image}
              alt="Business professional"
              className="w-full h-auto object-cover"
            />
            {/* </div> */}

            {/* Background Decoration Circle */}
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-gray-100 rounded-full -z-10"></div>
          </div>
        </div>
      </section>
      

      {/* Product  Section */}
      
    
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
            \ What We Do \
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

      {/* Service Section */}

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

      
   

        {/* About Us  */}
      
        <main className="container mx-auto px-6 flex-grow flex items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="text-blue-600 font-medium uppercase tracking-wide">
                \ About us \
              </div>
              <h1 className="text-[42px] font-bold text-[#1A2B5F] leading-tight">
                One of the Fastest Way to Business Growth
              </h1>
              <p className="text-gray-600 text-lg">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
              </p>
              <div className="flex items-center space-x-4 bg-[#F5F5F5] p-4 rounded-lg">
                <div className="bg-[#FF6B6B] text-white p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h3m-3-9a9 9 0 01-9 9M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[#1A2B5F] font-semibold">Get Instant Professional Advice</div>
                  <div className="text-gray-600">Ready to Help: +1 356 678 7897</div>
                </div>
              </div>
            </div>

            {/* Image Content */}
            <div className="relative">
              {/* Background Shapes */}
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#F5F5F5] rounded-full opacity-50 z-0"></div>
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#FFE5E5] rounded-full opacity-50 z-0"></div>

              {/* Team Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={teamImage} 
                  alt="Business Team" 
                  className="w-full h-500 object-cover"
                />
              </div>
            </div>
          </div>
        </main>
      </div>

  );
};

export default BusinessInsightsWebsite;