import React from 'react'
import { Card, Container,Button,Row,Col} from 'react-bootstrap';
import { useParams,Link } from 'react-router-dom'
import ProductObj from '../Product.json'; 
import './PSCAT.css';


export default function PSCat() {
    let data=useParams();
    console.log("Received value in subcat:",data);

    let productdata=ProductObj.product1.find((x)=>x.P_name === data.prodname);
    console.log("product1: ",productdata);

  return (
    <>
     <Container>
     <h2>{productdata.p_name}:</h2>
     
       <Row xs={1} md={3}>
         {
          productdata.P_subcat.map((psub)=>(
          <Col key={psub.s_id}>
           <Card>
            <Card.Body>
              <Card.Title>{psub.s_name}</Card.Title>
              <Card.Text>{psub.desc}</Card.Text>
              <Button  variant="warning"><Link to={`/PDet/${data.prodname}/${psub.s_name}`}>Show details</Link></Button>
            </Card.Body>
         </Card>
         </Col>
           ))
     }
    </Row>
    </Container>
    </>
  )
}
