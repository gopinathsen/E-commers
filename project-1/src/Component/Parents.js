import React from 'react'
import  Child  from './Child'

export default function Parents(){
    let word="webskitter"
    let word2="word"
    let obj={firstname:"Gopi",middlename:"Nath",lastname:"Sen"}
    let arrobj =[{fname:"ab",lname:"cd"},{fname:"ef",lname:"gh"},{fname:"ij",lname:"xy"}] 
    let color =["red","green","white","black","yellow"]
    let number =[105,106,501,1200,1520]

    return( 
    <div>
<Child data2={word2} dataobj={obj} arrobj={arrobj} arr={color} array={number} >{word}</Child>
    </div>
    )
}