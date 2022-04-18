import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import './Header.css'

export default function Header() {


  const navigate=useNavigate();
  
  const LogOut =()=>{
    window.sessionStorage.clear()
    alert("You have successfully logged out your account. ")
    navigate('/LoginPage')
  }

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
    
          <Navbar.Brand as={Link}  to = "Home" >Navbar</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link as={Link} to="/HomePage">Home</Nav.Link> */}

            <Nav.Link as={Link} to="/DetailsPage">Employee Deatils</Nav.Link>
            <Nav.Link as={Link} to="/RegPage">Registration</Nav.Link>
            <Nav.Link as={Link} to="/LoginPage">Login</Nav.Link>

            <button onClick={LogOut}>Log Out</button>


          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
