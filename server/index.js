const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Testimonial Schema
const testimonialSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true,
    minlength: 10,
    maxlength: 500,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  position: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    default: "/api/placeholder/60/60",
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Testimonial Model
const Testimonial = mongoose.model("Testimonial", testimonialSchema);

// Routes
// Get all testimonials
app.get("/api/testimonials", async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching testimonials", error: error.message });
  }
});

// Create a new testimonial
app.post("/api/testimonials", async (req, res) => {
  try {
    const { text, author, position, image, rating } = req.body;

    const newTestimonial = new Testimonial({
      text,
      author,
      position,
      image: image || "/api/placeholder/60/60",
      rating,
    });

    const savedTestimonial = await newTestimonial.save();
    res.status(201).json(savedTestimonial);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating testimonial", error: error.message });
  }
});

// Update a testimonial
app.put("/api/testimonials/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedTestimonial = await Testimonial.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true },
    );

    if (!updatedTestimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }

    res.json(updatedTestimonial);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error updating testimonial", error: error.message });
  }
});

// Delete a testimonial
app.delete("/api/testimonials/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTestimonial = await Testimonial.findByIdAndDelete(id);

    if (!deletedTestimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }

    res.json({ message: "Testimonial deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting testimonial", error: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
