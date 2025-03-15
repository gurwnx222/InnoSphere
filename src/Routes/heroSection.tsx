import { useEffect } from "react";
import image from "../Images/image.png";
import { motion } from "framer-motion";
import image1 from "../Images/productImage.png";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const HeroSection = () => {
  useEffect(() => {
    // Parallax effect code
  }, []);

  return (
    <>
    <div className="overflow-hidden">
      <section className="container mx-auto px-6 py-8 md:py-16 max-w-6xl">
        {/* Compare Component */}
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={image} alt="Image one" />}
      itemTwo={<ReactCompareSliderImage src={image1} alt="Image two" />}
    />
      </section>
    </div>
    </>
  );
};

export default HeroSection;