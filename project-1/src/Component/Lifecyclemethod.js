import React, {Component} from 'react'
export default class Lifecyclemethod extends Component{
    //first method
    constructor(){
        super();
        console.log("1. constructor phase");
    }
    //second method
    static getDerivesStateFromPops(props,state){
    console.log("2. getderive phase");
    return null; 
}
     //fourth method 
     componentDidMount(){
     console.log("4.Component phase")
    }
     //third method
    render(){
     console.log("3. render phase");
        return(
          <div>
              <h1>Life cycle method of class Component.</h1>
          </div>
        )
}
}