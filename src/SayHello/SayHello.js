import React, { Component } from 'react'

class SayHello extends Component {

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
      <div>
        <h1>{this.state.title}</h1>
        <input type="text" onChange={this.changeTitleHandler} value={this.state.title} placeholder="say something"/>
      </div>
    )
  }
}

export default SayHello