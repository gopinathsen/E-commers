import React, { Component } from 'react'
import ChildClass from '../Component/ChildClass'

export default class Test extends Component {
    // constructor()
    // {
    //     super();
    //     this.state={
    //         name:"Webskitter"
    //     }
    // }
    state={
        name:"Webskitter 0",
        increCount:0
      

    }

   
    handlechange=()=>{
        this.setState({name:"Hello World  1"})
        
      }
      increment=()=>{
        this.setState({increCount:this.state.increCount+1})
      }
      decrement=()=>{
        this.setState({increCount:this.state.increCount-1})
      }

   
  render() {
    return (
      <div>
          <h1>{this.state.increCount}</h1>
          <button onClick={this.increment}>Increse value </button>
           <button onClick={this.decrement}>Decrese value</button> 
          <ChildClass data={this.state.name} func={this.handlechange}/>
         
      </div>
    )
  }
}
