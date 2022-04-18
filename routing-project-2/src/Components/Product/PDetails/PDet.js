import React,{useEffect,useState} from 'react'
import { Container,Card } from 'react-bootstrap';

import { useParams,Link } from 'react-router-dom';
import ProductObj from'../Product.json';
import './PDet.css';
import axios from 'axios';

export default function PDet() {
   let data=useParams();
   console.log("Received value in PDet:",data);
   
   const [subcatState,setSubCat]=useState({subProduct:[]})

      
   useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${data.p_id}`)
    .then(res=>{
      console.log("Axios res in PDet:",res)
      setSubCat({subProduct:res.data})  
    })
    .catch(err=>{
    console.log("Axios error in subcat:",err)
    })
  },[setSubCat,data.p_id])

  //  let productdata=ProductObj.product1.find((x)=>x.P_name === value.p_name);
  //  console.log("Product in details: ", productdata);
    
  //  let singleproduct1=productdata.P_subcat.find((y)=>y.s_name === value.s_name);
  //  console.log("Single Product:",singleproduct1);


  return (

    <>
    {/* <Container>
    
      <Card.Header>{singleproduct1.s_id}</Card.Header>
      <Card.Img varient="top" src={singleproduct1.s_img}></Card.Img>

       <Card.Body>
         <Card.Text>{singleproduct1.desc}</Card.Text>
         <Card.Text>Price: {singleproduct1.price}</Card.Text>
       </Card.Body>
    
    </Container> */}

    <Container>
    
      {/* <Card.Header>{subcatState.subProduct.p_id}</Card.Header> */}
      <Card.Img varient="top" src={subcatState.subProduct.image}></Card.Img>

       <Card.Body>
         <Card.Text>{subcatState.subProduct.title}</Card.Text>
         {/* <Card.Text>Price: {singleproduct1.price}</Card.Text> */}
       </Card.Body>
    
    </Container>
    </>
   
  )
}
