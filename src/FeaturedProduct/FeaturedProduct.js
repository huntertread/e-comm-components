import React, { useState } from 'react'
import sampleData from '../sampledata.js'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './featuredproduct.css'

const FeaturedProduct = () => {

  const [featured, setFeatured] = useState(<h1>{sampleData[1].age}</h1>)

  const featuredProduct = (featured)

  return(
    <div className="featuredcontainer">
      <div className="mainproduct">
        <ReactCSSTransitionGroup
        transitionName="featuredSelect"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
          {featuredProduct}
        </ReactCSSTransitionGroup>
      </div>
      <div className="sideproducts">
        <ul>
          <li onClick={() => setFeatured(<h1 key={0}>{sampleData[0].age}</h1>)}>{sampleData[0].age}</li>
          <li onClick={() => setFeatured(<h1 key={1}>{sampleData[1].age}</h1>)}>{sampleData[1].age}</li>
          <li onClick={() => setFeatured(<h1 key={2}>{sampleData[2].age}</h1>)}>{sampleData[2].age}</li>
          <li onClick={() => setFeatured(<h1 key={3}>{sampleData[3].age}</h1>)}>{sampleData[3].age}</li>
          <li onClick={() => setFeatured(<h1 key={4}>{sampleData[4].age}</h1>)}>{sampleData[4].age}</li>
        </ul>
      </div>
    </div>
  )
}

export default FeaturedProduct