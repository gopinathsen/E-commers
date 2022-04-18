import React, {Component } from 'react'

export default class Classcomp extends Component{
    state={
        word1:"Webskitters",
        word2:"Academy",
        toggle:true
    }
    handelchange=()=>{
        this.setstate({word1:"Webskitter",word2:"Academy",toggle:!this.state.toggle})
    }
    render(){
        return(
            <div>
            {
                this.state.toggle?
                <h1>{this.state.word1}</h1>:
                <h1>{this.state.word2}</h1>
            }
            <button onClick={this.handelchange}>toggle</button>
            </div>
            )
        }
    }
