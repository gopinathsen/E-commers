
import React,{useState,useEffect} from 'react'
import { Button } from 'react-bootstrap';
// import ProductObj from'../Product.json';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function PCat() {
  const[productState,setproduct]=useState({productData:[]})
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then(res=>{
      console.log("Axios res:",res.data);
      setproduct({productData: res.data})
    })
    .catch(err=>{
      console.log("Axios res:",err)
    });

  },[setproduct]);
  //dependency array
  return (
    <>
      {/* <h1>Different Products:</h1>
      {
          ProductObj.product1.map((prod)=>(
            <React.Fragment key = {prod.P_id}>
               <li><h2>{prod.P_name}</h2></li>
              <Button variant="outline-success">
                  <Link to ={`/subcat/${prod.P_name}`}>View Subcatagory</Link>
              </Button>
            </React.Fragment>
          ))
      } */}
      <ul>
        {productState.productData.map((prod) => (
        <React.Fragment key={prod.id}>
            <li>{prod.title}</li>

          <Button variant="outline-success">
                  <Link to ={`/subcat/${prod.category}`}>View Subcatagory</Link>
              </Button>
              </React.Fragment>
        ))}
      </ul>
    </>
  )
}
