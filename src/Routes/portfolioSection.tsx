import React, { useState, useMemo, useEffect } from 'react';

// Import your images
import projectImage from '../Projectimages/Screenshot (26).png';
import techpoint from '../Projectimages/techpoint.png';
import nike from '../Projectimages/nike.jpg';
import coffee from '../Projectimages/coffee.jpg';
import digital from '../Projectimages/digital.jpg';
import App from '../Images/App.jpg';
import threader from '../Projectimages/threader.jpg';
import gym from '../Projectimages/Screenshot (32).png';
import cloth from '../Projectimages/Screenshot (33).png';
import sale from '../Projectimages/sale.png';
// Import leader images
import Gurwinder from '../Leaderimages/Gurwinder.jpg';
import gagan from '../Leaderimages/gagan.jpeg';
import sohel from '../Leaderimages/Sohel.webp';
import Sahil from '../Leaderimages/Sahil.jpg';
import sameer from '../Leaderimages/Sammer.jpg';
import nav from '../Leaderimages/nav.jpeg';




const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [activeLeaderIndex, setActiveLeaderIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const categories = ['ALL', 'Designs Project', 'Development Projects', 'Realworld Projects'];

  // Leaders data with proper image references
  const leaders = [
    {
      id: 1,
      name: "Gagan",
      // Use actual image path when available 
      // photo: Gagan,
      photo: gagan, // Placeholder until you have the actual image
      journey: "UI/UX designer specialist with expertise in creating intuitive and engaging user interfaces. Focused on combining aesthetics with functionality for optimal user experience.",
      profession: "UI/UX Designer"
    },
    {
      id: 2,
      name: "Sahil",
      // photo: Sahil,
      photo: Sahil,
      journey: "I am passionate and skilled graphic designer with a keen eye for detail and a commitment to visual excellence. With a journey rooted in creativity, I began exploring design at an early stage",
      profession: "Graphic Designer"
    },
    {
      id: 3,
      name: "Gurwinder",
      photo: Gurwinder, // Using the imported image
      journey: "I'm 18 year old Full Stack Developer. I have diversified skillset from writing optimised code to production level deployments. I have 3 years of experience in building full stack web applications",
      profession: "Full Stack Developer"
    },
    {
      id: 4,
      name: "Navdeep kaur",
      // photo: Sohel,
      photo: nav,
      journey: "Im 18 years old and have skills of web development , app development , or UI/UX designer. I develop gauravtechpoint or drive-in website. i have 2 year experience in Web Development",
      profession: "Social media / Content writer"
    },
    {
      id:5,
      name: "Sameer",
      // photo: Sohel,
      photo: sameer,
      journey: "At just 18, our video editor is already pushing creative boundaries and transforming ideas into stunning visual stories. With a passion for innovation and an eye for detail, he’s on a journey to redefine the art of storytelling—one frame at a time.",
      profession: "Video Editor"
    },
    {
      id: 6,
      name: "Sohel",
      // photo: Sohel,
      photo: sohel,
      journey: "Im 18 years old and have skills of web development , app development , or UI/UX designer. I develop gauravtechpoint or drive-in website. i have 2 year experience in Web Development",
      profession: "Software Developer"
    },
  ];

  // Updated portfolio items with unique button text and links for each project
  const allPortfolioItems = [
    {
      id: 1,
      category: 'Designs Project',
      title: 'CoffeShop Banner',
      description: 'This banner have latest or modern look design of showing delicious coffee.',
      image: coffee,
      buttonText: 'Visit',
      buttonLink: 'https://drive-in-omega.vercel.app/'
    },
    {
      id: 2,
      category: 'Designs Project',
      title: 'Digital Solution',
      description: 'Digital Services are provided by Digital Solution web designing , Development , Graphic, Editing',
      image: digital,
      buttonText: 'Visit',
      buttonLink: 'https://gauravtechpoint.in/'
    },
    {
      id: 3,
      category: 'Designs Project',
      title: 'Nike',
      description: 'This Design is innovative ,visual appeling designed with proper Design System.',
      image: nike,
      buttonText: 'Visit',
      buttonLink: 'https://www.figma.com/proto/4Uz1XPB0VNLUdpz1JsfPZd/Untitled?node-id=1-2'
    },

    {
      id: 10,
      category: 'Designs Project',
      title: 'Sale',
      description: 'This Design is innovative ,visual appeling designed with proper Design System.',
      image: sale,
      buttonText: 'Visit',
      buttonLink: 'https://www.figma.com/proto/4Uz1XPB0VNLUdpz1JsfPZd/Untitled?node-id=1-2'
    },
    
    
    {
      id: 4,
      category: 'Designs Project',
      title: 'GYM website Design',
      description: 'This is Gym website design that designed in dark theme.This design is modern look or eye-catching',
      image: gym,
      buttonText: 'Open',
      buttonLink: 'https://www.figma.com/proto/hSlWLGxd0zA4QkOCr3fCB4/Untitled?node-id=0-3'
    },
    {
      id: 5,
      category: 'Development Projects',
      title: 'Chair App',
      description: 'Chair app have vairities features like unique chairs modern look with fancy design comfartable seat',
      image: App,
      buttonText: 'Open',
      buttonLink: 'https://snack-web-player.s3.us-west-1.amazonaws.com/v2/52/index.html?initialUrl=exp%3A%2F%2Fu.expo.dev%2F933fd9c0-1666-11e7-afca-d980795c5824%3Fruntime-version%3Dexposdk%253A52.0.0%26channel-name%3Dproduction%26snack%3D%2540badobadiapp%252Fchair-app-%26snack-channel%3D2XtJznSDdw&origin=https%3A%2F%2Fsnack.expo.dev&verbose=false'
    },
    {
      id: 6,
      category: 'Designs Project',
      title: 'Clothhouse website  Design',
      description: 'Drive-in website have features of Knowledge test, License Renew, License apply.',
      image: cloth,
      buttonText: 'Open',
      buttonLink: 'https://www.figma.com/proto/a8AtYtvHNz9v29mKRa0pcA/10-Web-UI-designs-best?node-id=517-4472&t=yQKj0NHIIFj5QVZw-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1'
    },

    {
      id: 7,
      category: 'Realworld Projects',
      title: 'Drive-in Website',
      description: 'Drive-in website have features of Knowledge test, License Renew, License apply.',
      image: projectImage,
      buttonText: 'Open',
      buttonLink: 'https://drive-in-omega.vercel.app/'
    },

    {
      id: 8,
      category: 'Realworld Projects',
      title: 'Tech Point',
      description: 'Tech Point provides comprehensive courses , or incredible services like certificate verify , Quiz etc.',
      image: techpoint,
      buttonText: 'Open',
      buttonLink: 'https://gauravtechpoint.in/'
    },

    {
      id: 9,
      category: 'Realworld Projects',
      title: 'Threader-snatch api',
      description: 'Integrate this api in your project that you can wasily download threads images , videos , crausel post.',
      image: threader,
      buttonText: 'Open',
      buttonLink: 'https://rapidapi.com/threadertech/api/threadsnatch-api/playground'
    },


  ];

  // Check if the screen is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Auto-scroll for mobile view
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setActiveLeaderIndex((prevIndex) => (prevIndex + 1) % leaders.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isMobile, leaders.length]);

  // Filter items based on selected category
  const filteredItems = useMemo(() => {
    return activeFilter === 'ALL' 
      ? allPortfolioItems 
      : allPortfolioItems.filter(item => item.category === activeFilter);
  }, [activeFilter]);

  // Handle image errors more robustly with try/catch
  const handleImageError = (e) => {
    try {
      e.target.src ='https://via.placeholder.com/150';
      e.target.alt = "Image not available";
    } catch (error) {
      console.error("Error handling image fallback:", error);
      // Last resort fallback - use a data URI if needed
      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f0f0f0'/%3E%3Ctext x='50' y='50' font-family='Arial' font-size='12' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3EImage not found%3C/text%3E%3C/svg%3E";
    }
  };

  // Handle manual navigation for leader carousel
  const goToSlide = (index) => {
    setActiveLeaderIndex(index);
  };

  return (
    <div className="font-sans">
      {/* Portfolio Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-10">
          <p className="text-blue-600 text-m font-medium mb-1">
            \ Portfolio \
          </p>
          <h1 className="text-4xl font-bold text-[#1A2B5F]">Our Work</h1>
        </div>

        {/* Filter Navigation */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex border border-gray-200 rounded-sm overflow-hidden">
            {categories.map(category => (
              <button
                key={category}
                className={`px-6 py-2 text-sm ${
                  activeFilter === category 
                    ? 'bg-blue-900 text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setActiveFilter(category)}
                aria-label={`Filter by ${category}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className="overflow-hidden rounded shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={handleImageError}
                />
              </div>

              <div className="p-4">
                <h3 className="font-medium text-lg">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <button className="mt-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-900 transition-colors">
                  <a href={item.buttonLink} target="_blank" rel="noopener noreferrer">
                    {item.buttonText}
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leaders Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-blue-600 text-m font-medium mb-1">
              \ Leadership \
            </p>
            <h1 className="text-4xl font-bold text-[#1A2B5F]">Our Team</h1>
          </div>

          {/* Desktop view - grid layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader) => (
              <div 
                key={leader.id} 
                className="bg-white rounded shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <div className="h-64 overflow-hidden bg-gray-200">
                  <img 
                    src={leader.photo}
                    alt={leader.name} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={handleImageError}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg">{leader.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{leader.journey}</p>
                  <div className="mt-2">
                    <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded text-sm font-medium">
                      {leader.profession}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile view - carousel layout */}
          <div className="md:hidden">
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${activeLeaderIndex * 100}%)` }}
              >
                {leaders.map((leader) => (
                  <div 
                    key={leader.id} 
                    className="min-w-full px-4"
                  >
                    <div className="bg-white rounded shadow-md overflow-hidden">
                      <div className="h-64 overflow-hidden bg-gray-200">
                        <img 
                          src={leader.photo} // Fixed: Use each leader's specific photo instead of hardcoded Gurwinder
                          alt={leader.name} 
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={handleImageError}
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-lg">{leader.name}</h3>
                        <p className="text-gray-600 text-sm mb-4">{leader.journey}</p>
                        <div className="mt-2">
                          <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded text-sm font-medium">
                            {leader.profession}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel indicators */}
              <div className="flex justify-center mt-6">
                {leaders.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`mx-1 w-3 h-3 rounded-full ${
                      index === activeLeaderIndex ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;