import React from 'react'
import { Container,Card } from 'react-bootstrap';

import { useParams } from 'react-router-dom';
import ProductObj from'../Product.json';

export default function PDet() {
   let value=useParams();
   console.log("Params value",value);
   
   let productdata=ProductObj.product1.find((x)=>x.P_name === value.p_name);
   console.log("Product in details: ", productdata);
    
   let singleproduct1=productdata.P_subcat.find((y)=>y.s_name === value.s_name);
   console.log("Single Product:",singleproduct1);


  return (

    <>
    <Container>
    
      <Card.Header>{singleproduct1.s_id}</Card.Header>
      <Card.Img varient="top" src={singleproduct1.s_img}></Card.Img>

       <Card.Body>
         <Card.Text>{singleproduct1.desc}</Card.Text>
         <Card.Text>Price: {singleproduct1.price}</Card.Text>
       </Card.Body>
    
    </Container>
    </>
   
  )
}
