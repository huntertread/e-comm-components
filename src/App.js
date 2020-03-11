import React from 'react';
import './App.css';
import ProductCarousel from "./ProductCarousel/ProductCarousel"
import FeaturedProduct from "./FeaturedProduct/FeaturedProduct"
import AccordionWrapper from "./Accordion/AccordionWrapper"
import Gridwall from "./Gridwall/Gridwall"

const App = () => {
  return (
    <div className="App">
      <FeaturedProduct/>
      <ProductCarousel/>
      <AccordionWrapper containerName={"click me to expand!"} />
      <AccordionWrapper containerName={"also click me!"} />
      <AccordionWrapper containerName={"click me! click me!"} />
      <Gridwall />
    </div>
  );
}

export default App;
