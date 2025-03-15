import React, { useState } from 'react';

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = [
    'ALL', 'LIFE', 'MOMENTS', 'NATURE', 'STORIES', 'TRAVEL'
  ];

  const portfolioItems = [
    {
      id: 1,
      image: '/api/placeholder/500/400',
      category: ['ALL', 'STORIES'],
      type: 'website'
    },
    {
      id: 2,
      image: '/api/placeholder/500/400',
      category: ['ALL', 'LIFE'],
      type: 'workspace'
    },
    {
      id: 3,
      image: '/api/placeholder/500/400',
      category: ['ALL', 'MOMENTS'],
      type: 'mobile'
    },
    {
      id: 4,
      image: '/api/placeholder/500/400',
      category: ['ALL', 'STORIES', 'MOMENTS'],
      type: 'mobile'
    },
    {
      id: 5,
      image: '/api/placeholder/500/400',
      category: ['ALL', 'STORIES', 'TRAVEL'],
      type: 'dashboard'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="text-red-500 font-medium mb-2">
          \ Portfolio \
        </div>
        <h1 className="text-4xl font-bold text-navy-900">Our Work</h1>
      </div>

      {/* Filter Categories */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md overflow-hidden border border-gray-200">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 text-sm font-medium ${
                activeCategory === category
                  ? 'bg-red-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* First row - 2 items */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <div className="rounded-lg overflow-hidden shadow-md bg-gradient-to-r from-blue-300 to-red-300">
            <img 
              src="/api/placeholder/800/400" 
              alt="Website design with text 'Nothing great is made alone'"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="rounded-lg overflow-hidden shadow-md h-full">
            <img 
              src="/api/placeholder/400/400" 
              alt="Workspace with computer monitor and plant"
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

        {/* Second row - 3 items */}
        <div className="col-span-1">
          <div className="rounded-lg overflow-hidden shadow-md h-full">
            <img 
              src="/api/placeholder/400/300" 
              alt="Mobile phone showing luxury brand message"
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="rounded-lg overflow-hidden shadow-md h-full">
            <img 
              src="/api/placeholder/400/300" 
              alt="Person holding mobile phone with laptop nearby"
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="rounded-lg overflow-hidden shadow-md h-full">
            <img 
              src="/api/placeholder/400/300" 
              alt="Dark themed dashboard interface"
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;