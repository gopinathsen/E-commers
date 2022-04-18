import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap';
import {Link } from 'react-router-dom';

import './Header.css';

export default function Header() {
  return (

    <Navbar bg="primary" varient="dark">
      <Navbar.Brand className='edite'> fkart </Navbar.Brand>
      <Container className='new'>
      
        <Nav className='me-auto'>
          <Nav.Link as={Link} to ={`/HomePage/`}>Home</Nav.Link>
         
          <Nav.Link as={Link} to ={`/Product/`}>Product</Nav.Link>
          <Nav.Link as={Link} to ={`/ContactPage/`}>Contact</Nav.Link>
          <Nav.Link as={Link} to ={`/Feedback/`}>Feedback</Nav.Link>
          <Nav.Link as={Link} to ={`/Loginpage/`}>Login</Nav.Link>
          <Nav.Link as={Link} to ={`/SignUpPage/`}>SignUp</Nav.Link>
          

         

        </Nav>
        
      </Container>
    </Navbar>
  )
}
