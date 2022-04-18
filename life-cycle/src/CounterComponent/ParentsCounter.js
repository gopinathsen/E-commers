import React, { Component } from 'react'
import Dec from './Decrement'
import Inc from './Increment'
export default class PCounter extends Component {
state={
    incValue:0,
    decValue:0
}
increment=()=>{
    this.setState({incValue:this.state.incValue+1,decValue:this.state.decValue})
}
decrement=()=>{
  this.setState({incValue:this.state.incValue,decValue:this.state.decValue-1})
}
    render() {
    return (
      <div>
        <Inc data={this.state.incValue} func={this.increment}/>
        <Dec data={this.state.decValue} func={this.decrement}/>
      </div>
    )
  }
}
