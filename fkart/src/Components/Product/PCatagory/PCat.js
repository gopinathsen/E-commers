import React from 'react'
import ProductObj from '../Product.json'
import { Button,Card,Col,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import'./PCat.css';


export default function PCat() {
  return (
    <ul className='bag'>
        <h1>Different Product:</h1>
        <Row xs={1} md={4} className="g-4">
        {
          
            ProductObj.Product.map((prod)=>(
                <Col  key={prod.p_id}>
                <Card style={{width : '18rem'}}>
                <Card.Img variant="top" className='box' src={prod.p_img} />
                <Card.Body>
                <Card.Title className='text'>{prod.p_name}</Card.Title>
                <Card.Text>{prod.p_desc}</Card.Text>
                    <Button variant="outline-danger" className='mybutton'>
                        <Link to={`/subcat/${prod.p_name}`}> Sub Catagory</Link>
                    </Button>

                
                </Card.Body>
                </Card>
                </Col>

            ))
           
        }
         </Row>
        
        </ul>
            
  )
}
