import React, { PureComponent } from 'react'

export default class Increment extends PureComponent {
    // shouldComponentUpdate(nextProps,nextState)
    // {
    //     if(nextProps.data === this.props.data)
    //     {
    //         return false;
    //     }
    //     else
    //     {
    //         return true;
    //     }
    // }

    render() {
        console.log("Increment");
        return (
            <div>
                <h1>{this.props.data}</h1>
                <button onClick={this.props.func}>Click Here</button>
            </div>
    )
  }
}
