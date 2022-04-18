import React,{useState} from 'react'
import Childstate from './Childstate';
 
export default function StateExample(){
    // const [name,changestate1]=useState({lname:"cd",age:12});
    // const [person,changestate]=useState([{fname:"AB",lname:"CD",id:101,location:"kolkata"},
    // {fname:"RH",lname:"CJ",id:102,location:"kolkata"},
    // {fname:"MN",lname:"KL",id:103,location:"kolkata"}]);
    const [arr,changestate]=useState(["red","yellow","blue","white"])
   
    const handlechange=()=>{
       
        changestate(["new1","new2","new3","new4"])
//         changestate([{fname:"bg",lname:"gh",id:104,location:"kolkata"},
//     {fname:"RH",lname:"CJ",id:105,location:"kolkata"},
// {fname:"MN",lname:"KL",id:106,location:"kolkata"}]);
    }
    return(
        <div>
            
           <Childstate data={arr} fun={handlechange}></Childstate>
            </div>

    )
        }
