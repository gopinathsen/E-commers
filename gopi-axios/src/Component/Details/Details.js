import React, {useState,useEffect} from 'react'
import './Details.css';
import axios from 'axios';

export default function Details() {

  const [employeeState,setEmployee]=useState({employeeData:[]})

  
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>{
      console.log("Axios res:",res)
      setEmployee({employeeData:res.data})
    })
    .catch(err=>{
      console.log("Axios error:",err)
    })
  
  },[setEmployee]);





  return (
    <>
        <h1>Employee Details :</h1>

        <ul>
          {employeeState.employeeData.map((emp) => (
            <React.Fragment key={emp.id}>
                <li>{emp.id}</li>
                <li>{emp.name}</li>
                <li>{emp.username}</li>
                <li>{emp.email}</li>
             
             </React.Fragment>
          ))}
        </ul>
    </>
  )
}
