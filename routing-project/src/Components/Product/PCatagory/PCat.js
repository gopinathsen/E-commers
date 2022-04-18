import React from 'react'
import { Button } from 'react-bootstrap';
import ProductObj from'../Product.json';
import { Link } from 'react-router-dom';

export default function PCat() {
  return (
    <>
      <h1>Different Products:</h1>
      {
          ProductObj.product1.map((prod)=>(
            <React.Fragment key = {prod.P_id}>
               <li><h2>{prod.P_name}</h2></li>
              <Button variant="outline-success">
                  <Link to ={`/subcat/${prod.P_name}`}>View Subcatagory</Link>
              </Button>
            </React.Fragment>
          ))
      }
    </>
  )
}
