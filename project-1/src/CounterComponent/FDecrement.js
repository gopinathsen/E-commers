import React from 'react'

const FDecre=(props)=> {

        console.log("Functional Decrement",props);
        return (
            <div>
                <h1>{props.data}</h1>
                <button onClick={props.func}>Click to decrese</button>
            </div>
    )
  }
export default React.memo(FDecre,(prevProps,nextProps)=>prevProps.data === nextProps.data)
