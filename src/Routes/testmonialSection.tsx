import React, { useState, useEffect } from 'react';
import sir from "../testominialImages/gaurav.jpeg"
import taran from "../testominialImages/taran.jpeg"
import axios from 'axios';

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
  const [testimonials, setTestimonials] = useState([
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
      image: "/api/placeholder/60/60",
      rating: 4
    },
    {
      id: 3,
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed",
      author: "Chunni Bhai",
      position: "College Student",
      image: taran,
      rating: 5
    }
  ]);
  const [newTestimonial, setNewTestimonial] = useState({
    text: '',
    author: '',
    position: '',
    rating: 5,
    image: "/api/placeholder/60/60"
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState({});

  // Fetch testimonials from API
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('https://junior-letitia-threader-corp-83dae358.koyeb.app/api/testimonials');
        // Merge local and API testimonials, prioritizing local first
        const apiTestimonials = response.data.map(testimonial => ({
          ...testimonial,
          image: testimonial.image || "/api/placeholder/60/60"
        }));

        setTestimonials(prevTestimonials => {
          // Create a Set to avoid duplicates
          const combinedTestimonials = [...prevTestimonials, ...apiTestimonials]
            .filter((v, i, a) => a.findIndex(t => t.id === v.id) === i);
          return combinedTestimonials;
        });
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    // Text validation
    if (!newTestimonial.text) {
      newErrors.text = 'Testimonial text is required';
    } else if (newTestimonial.text.length < 10) {
      newErrors.text = 'Testimonial must be at least 10 characters long';
    } else if (newTestimonial.text.length > 500) {
      newErrors.text = 'Testimonial cannot exceed 500 characters';
    }

    // Author validation
    if (!newTestimonial.author) {
      newErrors.author = 'Author name is required';
    }

    // Position validation
    if (!newTestimonial.position) {
      newErrors.position = 'Position is required';
    }

    // Rating validation
    if (!newTestimonial.rating || newTestimonial.rating < 1 || newTestimonial.rating > 5) {
      newErrors.rating = 'Rating must be between 1 and 5';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit new testimonial
  const handleSubmitTestimonial = async (e) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post('https://junior-letitia-threader-corp-83dae358.koyeb.app/api/testimonials', {
        text: newTestimonial.text,
        author: newTestimonial.author,
        position: newTestimonial.position,
        rating: newTestimonial.rating,
        image: newTestimonial.image
      });

      // Add the new testimonial to the list
      setTestimonials(prev => [
        ...prev, 
        {
          ...response.data,
          image: response.data.image || "/api/placeholder/60/60"
        }
      ]);

      // Reset form and close modal
      setNewTestimonial({
        text: '',
        author: '',
        position: '',
        rating: 5,
        image: "/api/placeholder/60/60"
      });
      setIsModalOpen(false);
      setErrors({});
    } catch (error) {
      console.error('Error submitting testimonial:', error);
      alert('Failed to submit testimonial. Please try again.');
    }
  };

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
    <div className="bg-white py-16 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-medium mb-2">\\ From our Customers \\</p>
          <h2 className="text-3xl font-bold text-[#1A2B5F]">Testimonials</h2>
        </div>

        {/* Add Testimonial Button */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Add Testimonial
        </button>

        {/* Testimonial Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg w-96">
              <h3 className="text-2xl font-bold mb-4">Add Testimonial</h3>
              <form onSubmit={handleSubmitTestimonial}>
                <div className="mb-4">
                  <label className="block mb-2">Testimonial Text</label>
                  <textarea 
                    value={newTestimonial.text}
                    onChange={(e) => setNewTestimonial(prev => ({...prev, text: e.target.value}))}
                    className={`w-full border rounded p-2 ${errors.text ? 'border-red-500' : ''}`}
                    required
                  />
                  {errors.text && <p className="text-red-500 text-sm mt-1">{errors.text}</p>}
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Author Name</label>
                  <input 
                    type="text"
                    value={newTestimonial.author}
                    onChange={(e) => setNewTestimonial(prev => ({...prev, author: e.target.value}))}
                    className={`w-full border rounded p-2 ${errors.author ? 'border-red-500' : ''}`}
                    required
                  />
                  {errors.author && <p className="text-red-500 text-sm mt-1">{errors.author}</p>}
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Position</label>
                  <input 
                    type="text"
                    value={newTestimonial.position}
                    onChange={(e) => setNewTestimonial(prev => ({...prev, position: e.target.value}))}
                    className={`w-full border rounded p-2 ${errors.position ? 'border-red-500' : ''}`}
                    required
                  />
                  {errors.position && <p className="text-red-500 text-sm mt-1">{errors.position}</p>}
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Rating</label>
                  <select 
                    value={newTestimonial.rating}
                    onChange={(e) => setNewTestimonial(prev => ({...prev, rating: parseInt(e.target.value)}))}
                    className={`w-full border rounded p-2 ${errors.rating ? 'border-red-500' : ''}`}
                  >
                    {[1,2,3,4,5].map(rating => (
                      <option key={rating} value={rating}>{rating}</option>
                    ))}
                  </select>
                  {errors.rating && <p className="text-red-500 text-sm mt-1">{errors.rating}</p>}
                </div>
                <div className="flex justify-between">
                  <button 
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Rest of the component remains the same */}
        {/* ... (previous render logic) ... */}
      </div>
    </div>
  );
};

export default TestimonialsSection;