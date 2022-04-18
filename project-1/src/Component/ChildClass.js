import React, { Component } from 'react'

export default class ChildClass extends Component {
  render() {
      console.log("props value: ",this.props);

    
    return (
      <div>
        <h1>{this.props.data}</h1>
        <button onClick={this.props.func} >change value</button>
       
      </div>
    )
  }
}
