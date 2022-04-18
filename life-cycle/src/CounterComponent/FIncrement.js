import React from 'react'

export default React.memo(function FIncre(props) {
    console.log("Functional Increment");
  return (
    <div>
                <h1>{props.data}</h1>
                <button onClick={props.func}>Click to increse</button>
    </div>

  );
},(prevProps,nextProps)=>prevProps.data === nextProps.data)
