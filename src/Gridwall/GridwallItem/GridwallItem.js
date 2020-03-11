import React from 'react'
import './gridwallitem.css'

const GridwallItem = ({product}) => {
  return(
    <div className="gridwall-item">
      <p>{product.name}</p>
      <p>{product.age}</p>
    </div>
  )
}

export default GridwallItem