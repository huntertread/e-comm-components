import React, { Component } from 'react'
import GridwallItem from './GridwallItem/GridwallItem'
import sampledata from '../sampledata'
import './gridwall.css'

class Gridwall extends Component {
  constructor() {
    super()
    this.state = {
      products: sampledata
    }
  }
  render() {
    return(
      <div className="gridwall">
        {this.state.products.map((product, i) => (
          <GridwallItem product={product} key={i} />
        ))}
      </div>
    )
  }
}

export default Gridwall