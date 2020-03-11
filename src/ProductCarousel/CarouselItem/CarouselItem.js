import React from 'react'
import './carouselitem.css'

const CarouselItem = ({product}) => {
    return(
        <div className="carouselitem">
          <p>{product.age}</p>
        </div>
    )
}

export default CarouselItem