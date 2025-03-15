import React, { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const categories = ['ALL', 'LIFE', 'MOMENTS', 'NATURE', 'STORIES', 'TRAVEL'];

  const portfolioItems = [
    {
      id: 1,
      image: "/api/placeholder/400/320",
      category: 'LIFE',
      title: 'Collaborative Design Website',
      description: 'Website featuring "Nothing great is made alone" concept'
    },
    {
      id: 2,
      image: "/api/placeholder/400/320",
      category: 'NATURE',
      title: 'Workspace Setup',
      description: 'Modern workspace with plants and technology'
    },
    {
      id: 3,
      image: "/api/placeholder/400/320",
      category: 'MOMENTS',
      title: 'Brand Promotion',
      description: 'Mobile display for luxury brand clothes'
    },
    {
      id: 4,
      image: "/api/placeholder/400/320",
      category: 'LIFE',
      title: 'Mobile Experience',
      description: 'Multi-device browsing experience'
    },
    {
      id: 5,
      image: "/api/placeholder/400/320",
      category: 'TRAVEL',
      title: 'Trading Dashboard',
      description: 'Cryptocurrency trading platform interface'
    },
    {
      id: 6,
      image: "/api/placeholder/400/320",
      category: 'STORIES',
      title: 'Travel Journal',
      description: 'Visual storytelling from around the world'
    }
  ];

  const filteredItems = activeFilter === 'ALL' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 font-sans">
      {/* Header Section */}
      <div className="text-center mb-10">
        <p className="text-red-500 text-sm font-medium mb-1">
          \ Portfolio \
        </p>
        <h1 className="text-4xl font-bold text-navy-800">Our Work</h1>
      </div>

      {/* Filter Navigation */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex border border-gray-200 rounded-sm overflow-hidden">
          {categories.map(category => (
            <button
              key={category}
              className={`px-6 py-2 text-sm ${
                activeFilter === category 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredItems.map(item => (
          <div 
            key={item.id} 
            className="overflow-hidden rounded shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-64 overflow-hidden bg-gray-100">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay for the first item with "Nothing great is made alone" */}
              {item.id === 1 && (
                <div className="absolute inset-0 flex flex-col justify-center items-start p-8 bg-gradient-to-r from-blue-400 to-red-300">
                  <h3 className="text-2xl font-bold mb-2">
                    Nothing great is
                    <br />
                    <span className="underline">made alone.</span>
                  </h3>
                  <p className="text-sm max-w-xs mb-5">
                    Engage contractors every step in the design process so teams can deliver better products, faster.
                  </p>
                  <button className="bg-black text-white text-xs px-4 py-2 rounded-sm">
                    Try Figma for free
                  </button>
                </div>
              )}

              {/* Overlay for the third item with "ENJOY WITH LUXURY BRAND CLOTHS" */}
              {item.id === 3 && (
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 bg-black bg-opacity-70">
                  <p className="text-red-500 text-lg font-bold">ENJOY WITH</p>
                  <p className="text-red-500 text-lg font-bold">LUXURY BRAND</p>
                  <p className="text-red-500 text-lg font-bold">CLOTHS</p>
                  <div className="mt-4 bg-orange-500 w-12 h-1"></div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;