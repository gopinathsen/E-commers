import React from 'react'
import { Carousel,Card,Col,Row} from 'react-bootstrap'
import './Home.css'


export default function Home() {
 
  return (
    <ul>
    
    <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="im"
      src="../../../../IMG/1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Mobile Product</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="im"
      src="../../../../IMG/4.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Laptop</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="im"
      src="../../../../IMG/7.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Book Product</h3>
      
    </Carousel.Caption>
  </Carousel.Item>

<Carousel.Item>
    <img
      className="im"
      src="../../../../IMG/11.jpg"
      alt="Fouth slide"
    />

    <Carousel.Caption>
      <h4>Men Clothing</h4>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="im"
      src="../../../../IMG/13.jpg"
      alt="Fifth slide"
    />

    <Carousel.Caption>
      <h4>Kid Toy</h4>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="im"
      src="../../../../IMG/16.jpg"
      alt="Sixth slide"
    />

    <Carousel.Caption>
      <h4>Grocery Product</h4>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="im"
      src="../../../../IMG/19.jpg"
      alt="Seventh slide"
    />

    <Carousel.Caption>
      <h4>Furniture</h4>
      
    </Carousel.Caption>
  </Carousel.Item>



</Carousel>


<Row xs={1} md={4} className="g-4">
  
    <Col>
      <Card classname='bag3'>
        <Card.Img variant="top"  src="../../../../IMG/1.jpg" />
        <Card.Body>
          <Card.Title>Mobile Product</Card.Title>
          <Card.Text>
          Samsung Galaxy M33 5G (Deep Ocean Blue, 6GB, 128GB Storage) | 5nm Processor | 6000mAh Battery | Voice Focus | Upto 12GB RAM with RAM Plus
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card classname='bag3'> 
        <Card.Img variant="top" src="../../../../IMG/4.jpg" />
        <Card.Body>
          <Card.Title>Laptop Product</Card.Title>
          <Card.Text>
          HP 15s- Ryzen 5- 8GB RAM/512GB SSD 15.6 Inches FHD, Micro-Edge, Anti-Glare Display (Natural Silver/AMD Radeon Graphics/Alexa/Dual Speakers/Fast Charge/Windows 11/MS Office)
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  

  
    <Col >
      <Card classname='bag3'>
        <Card.Img variant="top" src="../../../../IMG/7.jpg" />
        <Card.Body>
          <Card.Title> Book Product</Card.Title>
          <Card.Text>
          The Richest Man in Babylon (Deluxe Hardbound Edition
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  

  
    <Col >
      <Card classname='bag3'>
        <Card.Img variant="top" src="../../../../IMG/11.jpg" />
        <Card.Body>
          <Card.Title> Men Clothing</Card.Title>
          <Card.Text>
          Diverse Men's Cotton Kurta
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  

<Col >
      <Card classname='bag3'>
        <Card.Img variant="top" src="../../../../IMG/13.jpg" />
        <Card.Body>
          <Card.Title> Kid Toy</Card.Title>
          <Card.Text>
          VEBETO Dancing Cactus Talking Toy Plush Toy Wriggle & Singing Recording Repeat What You Say Funny Education Toys for Babies Children Playing Home Decoration
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  
<Col >
      <Card classname='bag3'>
        <Card.Img variant="top" src="../../../../IMG/16.jpg" />
        <Card.Body>
          <Card.Title> Grocery</Card.Title>
          <Card.Text>
          Fresh Produce Society Leaf Masala Tea 500G Water Bottle
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
  




</ul>

     
    
  )
}
