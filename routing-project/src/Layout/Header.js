import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


export default function Header() {
  const word="Hello"
  const Navigate=useNavigate
  const loggingout=()=>{
    window.localStorage.clear();
    alert("You have successfuly logged out your account.")
    Navigate('/login');
  }
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
      <Navbar.Brand as={Link} to = "Home" >Navbar</Navbar.Brand>
        <Nav className="me-auto">
          {/* <Nav.Link as={Link} to ="">Home</Nav.Link> */}
          <Nav.Link as={Link} to ={`/AboutPage/${word}`}>Features</Nav.Link>
          <Nav.Link as={Link} to ="/ContactPage">Pricing</Nav.Link>
          {/* <Nav.Link as={Link} to ="/PCatpage">Product</Nav.Link> */}
          <Nav.Link as={Link} to ="/Feedback">Feedback</Nav.Link>
          <Nav.Link as={Link} to ="/Registration">Registration</Nav.Link>
          {/* <Nav.Link as={Link} to ="/Login">Login</Nav.Link> */}
        </Nav>
      </Container>
    </Navbar>
  )
}
