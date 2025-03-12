import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#101d42] py-12 px-4 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and About section */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-red-500 text-white rounded-full p-2 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xl font-medium">Pixelon</span>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at
            </p>
            <div className="flex space-x-2">
              <a href="#" className="bg-white p-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0077B5]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="bg-white p-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#E4405F]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="bg-white p-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" className="bg-white p-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1DA1F2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services section */}
          <div>
            <h3 className="text-xl font-semibold mb-5 relative">
              Services
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-600 -mb-2"></span>
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white">Web Design/Development</a></li>
              <li><a href="#" className="hover:text-white">App Development</a></li>
              <li><a href="#" className="hover:text-white">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-white">HubSpot Integration</a></li>
              <li><a href="#" className="hover:text-white">Email Marketing</a></li>
              <li><a href="#" className="hover:text-white">Website Migration</a></li>
            </ul>
          </div>

          {/* Career section */}
          <div>
            <h3 className="text-xl font-semibold mb-5 relative">
              Career
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-600 -mb-2"></span>
            </h3>
            <div className="space-y-5 mt-8">
              {/* ReactJs Dev */}
              <div className="flex items-center space-x-3">
                <div className="bg-white p-2 rounded-md flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 text-blue-600" fill="currentColor">
                    <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12v.472h.472v-.352zm0 .472v.471h.472v-.471H6.008zm1.56.471h.472v-.471H7.568v.471zm0-.471v-.352l-.472-.12v.472h.472zm1.56 0h.472v-.352l-.472-.12v.472zm1.56 0h.472v-.352l-.472-.12v.472zm1.56 0h.472v-.352l-.472-.12v.472zM11.9 14.244l-3.94-3.354A5.751 5.751 0 0 1 11.989 2.381a5.754 5.754 0 0 1 5.755 5.75A5.754 5.754 0 0 1 11.9 14.244z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-blue-600 font-medium">ReactJs Dev.</h4>
                  <p className="text-sm text-gray-300">1-5 Years of Exp.</p>
                </div>
              </div>

              {/* WordPress Dev */}
              <div className="flex items-center space-x-3">
                <div className="bg-white p-2 rounded-md flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 text-blue-600" fill="currentColor">
                    <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-blue-600 font-medium">Wordpress Dev.</h4>
                  <p className="text-sm text-gray-300">1-5 Years of Exp.</p>
                </div>
              </div>

              {/* Python Developer */}
              <div className="flex items-center space-x-3">
                <div className="bg-white p-2 rounded-md flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 text-blue-600" fill="currentColor">
                    <path d="M20.59 12l-3.3-3.3a1 1 0 1 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42-1.4l3.3-3.3zM3.4 12l3.3 3.3a1 1 0 0 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4A1 1 0 0 1 6.7 8.7L3.4 12zm7.56 8.24a1 1 0 0 1-1.94-.48l4-16a1 1 0 1 1 1.94.48l-4 16z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-blue-600 font-medium">Python Developer</h4>
                  <p className="text-sm text-gray-300">1-5 Years of Exp.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Subscribe Us section */}
          <div>
            <h3 className="text-xl font-semibold mb-5 relative">
              Subscribe Us
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-600 -mb-2"></span>
            </h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              It is a long established fact that a reader will be distracted by the readable
            </p>
            <div className="mt-6">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="flex-grow p-3 rounded-l-md text-gray-800 focus:outline-none"
                />
                <button className="bg-blue-900 hover:bg-red-600 text-white px-6 py-3 rounded-r-md">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;