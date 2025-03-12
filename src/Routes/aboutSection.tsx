import aboutImage from "../Images/aboutImage.png";

const aboutSection = ()=>{
  return(
    <main className="mt-auto mt-12 container mx-auto px-6 flex-grow flex items-center">
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
              We are a passionate team of digital experts dedicated to helping businesses succeed in the online world. With a blend of creativity, technology, and strategic insight, we specialize in web development, app creation, UI/UX design, SEO, email marketing, and more. Our goal is simple – to deliver innovative solutions that drive growth, improve user experience, and deliver measurable results. Partner with us, and let’s bring your digital vision to life.
            </p>
            <div className="flex items-center space-x-4 bg-[#F5F5F5] p-4 rounded-lg">
              <div className="bg-blue-900 text-white p-3 rounded-full">
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
            <div className="absolute -top-12 -left-12 w-64 h-60 bg-[#F5F5F5] rounded-full opacity-50 z-0"></div>
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#FFE5E5] rounded-full opacity-50 z-0"></div>

            {/* Team Image */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={aboutImage} 
                alt="Business Team" 
                className="w-full h-500 object-cover"
              />
            </div>
          </div>
          
        </div>
      </main>
    
  )
}

export default aboutSection;