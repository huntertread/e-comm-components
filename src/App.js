import React from 'react';
import './App.css';
import ProductCarousel from "./ProductCarousel/ProductCarousel"
import FeaturedProduct from "./FeaturedProduct/FeaturedProduct"
import AccordionWrapper from "./Accordion/AccordionWrapper"

const App = () => {
  return (
    <div className="App">
      <h1>E-COMMERCE COMPONENTS</h1>
      <FeaturedProduct/>
      <ProductCarousel/>
      <AccordionWrapper containerName={"click me to expand!"} />
      <AccordionWrapper containerName={"also click me!"} />
      <AccordionWrapper containerName={"click me! click me!"} />
    </div>
  );
}

export default App;
