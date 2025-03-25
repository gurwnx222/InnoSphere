import React, { useState, useEffect } from "react";
import axios from "axios";
import sir from "../testominialImages/gaurav.jpeg";
import taran from "../testominialImages/taran.jpeg";

// Type definitions
interface Testimonial {
  _id?: string;
  id?: number;
  text: string;
  author: string;
  position: string;
  image?: string;
  rating: number;
}

// Backend API base URL
const API_BASE_URL = "http://localhost:5000/api";

// Testimonial Form Component
interface TestimonialFormProps {
  onTestimonialSubmit: (testimonial: Testimonial) => void;
}

const TestimonialForm: React.FC<TestimonialFormProps> = ({
  onTestimonialSubmit,
}) => {
  const [formData, setFormData] = useState<Testimonial>({
    text: "",
    author: "",
    position: "",
    rating: 5,
    image: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post<Testimonial>(
        `${API_BASE_URL}/testimonials`,
        formData,
      );
      onTestimonialSubmit(response.data);
      // Reset form
      setFormData({
        text: "",
        author: "",
        position: "",
        rating: 5,
        image: "",
      });
    } catch (error) {
      console.error("Error submitting testimonial:", error);
      alert("Failed to submit testimonial. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md mt-8">
      <h3 className="text-2xl font-bold mb-6 text-center">
        Submit a Testimonial
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Testimonial Text</label>
          <textarea
            name="text"
            value={formData.text}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            rows={4}
            required
            placeholder="Write your testimonial here..."
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Author Name</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
            placeholder="Your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Position/Role</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
            placeholder="Your position"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Rating</label>
          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            Profile Image URL (Optional)
          </label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Enter image URL"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Testimonial
        </button>
      </form>
    </div>
  );
};

// Star Rating Component
interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
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

// Testimonials Section Component
const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    // Fallback testimonials
    {
      id: 1,
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      author: "Gaurav Kumar",
      position: "Founder of Tech Point",
      image: sir,
      rating: 5,
    },
  ]);
  const [showForm, setShowForm] = useState(false);

  // Fetch testimonials from backend
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get<Testimonial[]>(
          `${API_BASE_URL}/testimonials`,
        );
        // If backend returns testimonials, use them
        if (response.data.length > 0) {
          setTestimonials(response.data);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  // Add new testimonial to state
  const handleNewTestimonial = (newTestimonial: Testimonial) => {
    setTestimonials((prevTestimonials) => [
      newTestimonial,
      ...prevTestimonials,
    ]);
    setShowForm(false);
  };

  // Navigation functions
  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-medium mb-2">
            \\ From our Customers \\
          </p>
          <h2 className="text-3xl font-bold text-[#1A2B5F]">Testimonials</h2>
          <button
            onClick={() => setShowForm(!showForm)}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {showForm ? "Cancel" : "Add Testimonial"}
          </button>
        </div>

        {/* Testimonial Form */}
        {showForm && (
          <TestimonialForm onTestimonialSubmit={handleNewTestimonial} />
        )}

        <div className="relative">
          {/* Previous arrow */}
          <button
            onClick={goToPrevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Next arrow */}
          <button
            onClick={goToNextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Testimonials container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial._id || testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    {/* Left quote mark */}
                    <div className="text-blue-600 text-6xl font-serif self-start">
                      "
                    </div>

                    {/* Image and content */}
                    <div className="flex flex-col md:flex-row gap-8 items-center flex-grow">
                      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-blue-100">
                        <img
                          src={testimonial.image || "/api/placeholder/60/60"}
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-grow">
                        {/* Added Star Rating Component */}
                        <StarRating rating={testimonial.rating} />

                        <p className="text-gray-600 mb-4">{testimonial.text}</p>
                        <div>
                          <h4 className="font-bold text-blue-900">
                            {testimonial.author}
                          </h4>
                          <p className="text-blue-500">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right quote mark */}
                    <div className="text-red-400 text-6xl font-serif self-end">
                      "
                    </div>
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
                index === activeIndex ? "bg-blue-600" : "bg-gray-300"
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
