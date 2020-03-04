import React from 'react'
import './carouselitem.css'

const CarouselItem = ({product}) => {
    return(
        <div className="carouselitem">
          <p>{product.name}</p>
          <p>{product.age}</p>
          <p>{product.sign}</p>
        </div>
    )
}

export default CarouselItem