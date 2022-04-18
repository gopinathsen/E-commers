import React from 'react'
import { useParams } from 'react-router-dom'
 function   About () {
   let data =useParams();
   console.log("Received value:",data);

  return (
    <div> 
           <h1> All About u  </h1>
            <h2>{data.value}</h2>
     </div>
  )
}
export default About
