import React, { useState, useEffect } from "react";
import axios from "axios";
import sir from "../testominialImages/gaurav.jpeg";
import taran from "../testominialImages/taran.jpeg";

// Local image mapping
const LOCAL_IMAGES: { [key: string]: string } = {
  "Gaurav Kumar": sir,
  Amrinder: "/api/placeholder/60/60",
  "Chunni Bhai": taran,
};

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

    // Special handling for author to set default image
    if (name === "author") {
      const defaultImage = LOCAL_IMAGES[value] || "/api/placeholder/60/60";
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
        image: defaultImage,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Prepare data to send
      const dataToSubmit = { ...formData };

      // If the image is a local image, set it to null or undefined
      if (Object.values(LOCAL_IMAGES).includes(dataToSubmit.image || "")) {
        delete dataToSubmit.image;
      }

      const response = await axios.post<Testimonial>(
        `${API_BASE_URL}/testimonials`,
        dataToSubmit,
      );

      // Restore local image if needed
      const finalTestimonial = {
        ...response.data,
        image: formData.image || "/api/placeholder/60/60",
      };

      onTestimonialSubmit(finalTestimonial);

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
            placeholder="Enter image URL (leave blank for default)"
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

// Rest of the component remains the same as in the previous TypeScript version
// ... (StarRating and TestimonialsSection components)

export default TestimonialsSection;
