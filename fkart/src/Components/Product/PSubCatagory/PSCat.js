import React from 'react';
import { useParams,Link } from 'react-router-dom';
import ProductObj from '../Product.json';
import {Card,Button,Container,Row,Col} from 'react-bootstrap';
import './PSCat.css';

export default function PSCat() {
    let data=useParams();
    console.log("Recived value in subcat: ",data);

    let productData=ProductObj.Product.find((x)=>x.p_name === data.prodname);
    console.log("Product:",productData);
  
  return (
    <ul className = 'back' >
      <Container>
        <h2>{productData.p_name}:</h2>
        <br/>
        <Row xs={1} md={3}>
        {
            productData.p_subcat.map((psub)=>(
                <Col>
                <Card Key={psub.s_id}>
                <Card.Img variant="top" className='box2' src={psub.s_img} />
                <Card.Body>
                <Card.Title>{psub.s_name}</Card.Title>
                <Card.Text>{psub.desc}</Card.Text>
                <Button variant="info"><Link to ={`/Details/${data.prodname}/${psub.s_name}`}>Show Details</Link></Button>
                </Card.Body>
                </Card>
            </Col>
            ))
        }
        </Row>
        </Container>
    </ul>
  )
}
