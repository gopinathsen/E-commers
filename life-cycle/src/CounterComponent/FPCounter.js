import React, { useState } from 'react'
import FIncre from './FIncrement'
import FDecre from './FDecrement'

export default function FPCounter() {
   const [incValue,changeState1]=useState(0);
   const [decValue,changeState2]=useState(0);
    
    const FIncrement=()=>{
        changeState1(incValue+1)
    }
    const FDecrement=()=>{
      changeState2(decValue-1)
    }
  return (
    <div>
        <FIncre data={incValue} func={FIncrement}/>
        <FDecre data={decValue} func={FDecrement}/>
      </div>
  )
}