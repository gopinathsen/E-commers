import React from 'react'
import { Row,Col, Container,Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Footer.css'



export default function Footer() {


return (
    <div className='footer'>
        <Container>
         <Row>
            <Col>
               <h4 className='header'>Get to Know Us</h4>
               <Card>
                 <Card.Body className='body'>
                       <Card.Link as={Link} to="/ContactPage/"  className="click1">Contact Us</Card.Link><br/>
                       <Card.Link as={Link} to="/Product/"  className="click2">Our Product</Card.Link><br/>
                       <Card.Link as={Link} to="/Feedback/"  className="click2">Feedback</Card.Link>

                      
                 </Card.Body>
              </Card>
           </Col>

            
            
            <Col>
                 <h4 className='header'>Our Contact</h4>
                 
                    <p className='contactpara'>Head Offices <br/>
                        EMAIL:f-kart@gmail.com <br/><br/>
                       <span className='footercolor'> 420 Street,2nd Floor,India</span> <br/>
                        TELL:7098409645
                    </p>
                 
            </Col>
         </Row>

      </Container>
    </div>
  )
}






