import React ,{useEffect}from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
import { Link, useLocation  } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


export default function Header() {
  const word="Hello"
  const Navigate=useNavigate
  
  
     const loggingOut=()=>{
    window.sessionStorage.clear();
    alert("You have successfuly logged out your account.")
    Navigate('/login');
  }
  // let name="Webskitter";
  // const data = 'Webskitter';
  // let location=useLocation
  // useEffect(() => {
  //  console.log("Location:",location,"\npathname:",location.pathname)
  // },[location]);
  
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
      <Navbar.Brand as={Link} to = "Home" >Navbar</Navbar.Brand>
        <Nav className="me-auto">
          {/* <Nav.Link as={Link} to ="">Home</Nav.Link> */}
          <Nav.Link as={Link} to ={`/AboutPage/${word}`}>About</Nav.Link>
          <Nav.Link as={Link} to ="/ContactPage">Contact</Nav.Link>
          <Nav.Link as={Link} to ="/PCatpage">Product</Nav.Link>
          <Nav.Link as={Link} to ="/Feedback">Feedback</Nav.Link>
          <Nav.Link as={Link} to ="/Registration">Registration</Nav.Link>
          <Nav.Link as={Link} to ="/Login">Login</Nav.Link>
          <Nav.Link as={Link} to ="/Mui">Mui</Nav.Link>
          <button onClick={loggingOut}>Log out</button>
        </Nav>
      </Container>
    </Navbar>
  )
}
