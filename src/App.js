import React, { Component } from 'react';
import './App.css';
import ProductCarousel from "./ProductCarousel/ProductCarousel"
import FeaturedProduct from "./FeaturedProduct/FeaturedProduct"

class App extends Component {
  constructor() {
    super()
    this.state = {
      title: ""
    }
    this.changeTitleHandler = this.changeTitleHandler.bind(this)
  }

  changeTitleHandler(event) {
    this.setState({title: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <input type="text" onChange={this.changeTitleHandler} value={this.state.title} placeholder="say something"/>
        <FeaturedProduct/>
        <ProductCarousel/>
      </div>
    );
  }
}

export default App;
