import React from 'react'
import sampleData from '../sampledata.js'
import './featuredproduct.css'

const FeaturedProduct = (props) => {
  return(
    <div className="featuredcontainer">
      <div className="mainproduct">
        <h1>{sampleData[0].age}</h1>
      </div>
      <div className="sideproducts">
        <ul>
          <li>{sampleData[1].age}</li>
          <li>{sampleData[2].age}</li>
          <li>{sampleData[3].age}</li>
          <li>{sampleData[4].age}</li>
        </ul>
      </div>
    </div>
  )
}

export default FeaturedProduct