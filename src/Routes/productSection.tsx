import React from "react";
import { useState, useEffect } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  altText: string;
}

// Component name should be PascalCase
const productSection: React.FC = () => {
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([
    false,
    false,
    false,
  ]);

  // Products data
  const products: Product[] = [
    {
      id: 1,
      name: "ROADMAPFINDER",
      description: "PLAN AND TRACK YOUR PROJECT'S PROGRESS WITH EASE",
      imageUrl: "/Projectimages/roadmapfinder.png", // Fixed path - removed relative notation
      altText: "RoadmapFinder Product Screenshot",
    },
    {
      id: 2,
      name: "THREADSNATCH API",
      description: "A POWERFUL API FOR EXTRACTING AND MANAGING THREADS",
      imageUrl: "/Projectimages/threader.png", // Fixed path - removed relative notation
      altText: "ThreadSnatch API Product Screenshot",
    },
    {
      id: 3,
      name: "GAURAVTECHPOINT",
      description: "A POWERFUL API FOR EXTRACTING AND MANAGING THREADS",
      imageUrl: "/Projectimages/techpoint.png", // Fixed path - removed relative notation
      altText: "GauravTechPoint Product Screenshot",
    },
  ];

  // Handle image load errors
  const handleImageError = (index: number) => {
    console.error(`Failed to load image for product: ${products[index].name}`);
    // Create a copy of the array and update the specific index
    const newImagesLoaded = [...imagesLoaded];
    newImagesLoaded[index] = true;
    setImagesLoaded(newImagesLoaded);
  };

  // Handle successful image loads
  const handleImageLoad = (index: number) => {
    const newImagesLoaded = [...imagesLoaded];
    newImagesLoaded[index] = true;
    setImagesLoaded(newImagesLoaded);
  };

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#1A2258] relative inline-block">
          OUR PRODUCTS
          <span className="block h-1 w-full bg-blue-600 mt-2"></span>
        </h2>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="flex flex-col border border-gray-200 rounded-md overflow-hidden shadow-sm"
          >
            {/* Product Image */}
            <div className="w-full h-48 bg-gray-100 relative">
              <img
                src={product.imageUrl}
                alt={product.altText}
                className="w-full h-full object-cover"
                onError={() => handleImageError(index)}
                onLoad={() => handleImageLoad(index)}
              />

              {/* Fallback if image fails to load */}
              {!imagesLoaded[index] && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="animate-pulse bg-gray-200 w-full h-full"></div>
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-[#1A2258] mb-2 text-center">
                {product.name}
              </h3>
              <p className="text-sm text-[#1A2258] mb-8 text-center font-medium">
                {product.description}
              </p>

              {/* Visit Button - positioned at bottom */}
              <div className="mt-auto flex justify-center">
                <button className="bg-[#1A2258] text-white px-8 py-2 font-semibold rounded-sm hover:bg-blue-800 transition">
                  VISIT
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default productSection;
