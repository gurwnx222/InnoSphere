import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar"; // Navigation Bar
import Home from "./Routes/heroSection";
import About from "./Routes/aboutSection";
import Product from "./Routes/productSection";
import Services from "./Routes/serviceSection";
import Process from "./Routes/processSection";
import Contact from "./Routes/contactSection";
import Footer from "./Routes/footerSection";
import Portfolio from "./Routes/portfolioSection";

import './App.css';
const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/home" element={<Home /> } />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
         <Route path="/process" element={<Process />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />

         <Route path="/footer" element={<Footer />} />
      </Routes>
      


       <Services/>
      <Process/>
      <Product/>
      
      <About />
     
      <Contact/>

    <Footer />
      
     {/* Keep Navbar outside of Routes so it stays visible */}

    </Router>
  );
};

export default App;
