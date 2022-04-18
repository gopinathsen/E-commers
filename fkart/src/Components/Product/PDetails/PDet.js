import React from 'react'
import { useParams} from 'react-router-dom'
import {Card,Row,Col} from 'react-bootstrap'
import ProductObj from '../Product.json';
import'./PDet.css';

export default function PDet() {
  let value=useParams();
  console.log("Params value",value);

  let productData=ProductObj.Product.find((x)=>x.p_name === value.prodname);
  console.log("product in details",productData);

  let singleProduct=productData.p_subcat.find((y)=>y.s_name === value.subname);
  console.log("Single product:",singleProduct)
  return (
    <>
   <Card className='C'>
  <Card.Header>{singleProduct.s_id}</Card.Header>
  <Row xs={1} md={4} >
    <Col>
  <Card.Img variant="top" src={singleProduct.s_img} className='set' />
  <Card.Body>
    <Card.Title>{singleProduct.s_name}</Card.Title>
    <Card.Text>
      {singleProduct.s_desc}
    </Card.Text>
    <Card.Text>
      {singleProduct.s_price}
    </Card.Text>
   </Card.Body>
   </Col>
   </Row>
</Card>

    </>
  )
}
