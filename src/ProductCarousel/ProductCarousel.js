import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import CarouselItem from '../CarouselItem/CarouselItem'
import SelectArrow from '../SelectArrow/SelectArrow'
import sampleData from '../sampledata'
import './productcarousel.css'

class ProductCarousel extends Component {
  constructor() {
    super()
    this.carouselStart = 2;
    this.carouselEnd = 7;
    this.products = (sampleData.map((product, i) => <CarouselItem product={product} key={i}/>))
    this.state = {
      productsShown: this.products.slice(this.carouselStart, this.carouselEnd)
    }
    this.leftClickHandler = this.leftClickHandler.bind(this)
    this.rightClickHandler = this.rightClickHandler.bind(this)
  }

  leftClickHandler() {
    if (this.carouselStart > 0) {
      this.carouselStart--;
      this.carouselEnd--;
      this.setState({productsShown: this.products.slice(this.carouselStart, this.carouselEnd)})
    }
  }

  rightClickHandler() {
    if (this.carouselEnd < sampleData.length) {
      this.carouselStart++;
      this.carouselEnd++;
      this.setState({productsShown: this.products.slice(this.carouselStart, this.carouselEnd)})
    }
  }

  render() {
    return (
      <div className="carousel-all">
        <SelectArrow onClick={this.leftClickHandler} direction={"<"}/>
          <ReactCSSTransitionGroup
            className="carousel-inner"
            transitionName="carouselShift"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={50}
            transitionLeaveTimeout={50}>
              {this.state.productsShown}
          </ReactCSSTransitionGroup>
        <SelectArrow onClick={this.rightClickHandler} direction={">"}/>
      </div>
    )
  }
}

export default ProductCarousel;