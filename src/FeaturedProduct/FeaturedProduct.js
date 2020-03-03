import React, { useState } from 'react'
import sampleData from '../sampledata.js'
import './featuredproduct.css'

const FeaturedProduct = (props) => {

  const [featured, setFeatured] = useState(sampleData[1].age)

  return(
    <div className="featuredcontainer">
      <div className="mainproduct">
        <h1>{featured}</h1>
      </div>
      <div className="sideproducts">
        <ul>
          <li onClick={() => setFeatured(sampleData[0].age)}>{sampleData[0].age}</li>
          <li onClick={() => setFeatured(sampleData[1].age)}>{sampleData[1].age}</li>
          <li onClick={() => setFeatured(sampleData[2].age)}>{sampleData[2].age}</li>
          <li onClick={() => setFeatured(sampleData[3].age)}>{sampleData[3].age}</li>
          <li onClick={() => setFeatured(sampleData[4].age)}>{sampleData[4].age}</li>
        </ul>
      </div>
    </div>
  )
}

export default FeaturedProduct