import React, { PureComponent } from 'react'

export default class Decrement extends PureComponent {
   

    render() {
        console.log("Decrement");
        return (
            <div>
                <h1>{this.props.data}</h1>
                <button onClick={this.props.func}>Click Here</button>
            </div>
    )
  }
}
