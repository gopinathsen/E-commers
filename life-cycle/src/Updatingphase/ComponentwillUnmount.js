import React, { Component } from 'react'

export default class ComponentwillUnmount extends Component {
    constructor(){
        super();
        this.state={
            toggleUser:true
        }
    }
componentWillUnmount(){
    console.log('componentdidUnmount call')
    alert('User has been deleted');

}
  render() {
    return (
      <>
          {
              this.state.toggleUser?
              <div><h1>User Name :gfc</h1><h1>User Email:abc@gmail.com</h1></div>
              : null
          }
         <button onClick={()=>{this.setState({toggleUser:false})}}>Delete User Info</button>
      </>
    )
  }
}

