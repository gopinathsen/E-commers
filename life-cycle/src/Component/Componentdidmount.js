import React,{Component } from "react";
export default class Componentdidmount extends Component {
    state={
        data:"abc"
    }
    changeData(){
        setTimeout(()=>{
        alert("Data Update");
        console.warn("Data changed");
        this.setState({
            data:"ABCD"
        })
    },5000)
}
//setTimeout(()=>{},7000)

componentDidMount(){
    this.changeData();
}
render() {
    return(
        <div>
            <h1>{this.state.data}</h1>
        </div>
    )
}
}