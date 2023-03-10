import img from "../img/home-background.jpg";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../components/style-home/home.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/esm/Container";
import '../components/style-home/generator.css'
const Generator = () => {
  return(
    <div style={{
      backgroundImage: `url(${img})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      objectFit: 'cover',
      width: '100vw',
      height: '100vh',
      margin: '0 0',

    }}>
      <div className = "nav-bar">
      <Navbar className = "bg-transparent" bg="dark" variant="dark">
        <Container className="nav-container mr = 20px">
          <Navbar.Brand className = "my-logo" href="#home">QWERTY</Navbar.Brand>
          <Nav className="me-auto">
              <Nav.Link className = "generator" href="#about-us">Generator</Nav.Link>
              <Nav.Link className = "passwords" href="#passwords">Passwords</Nav.Link>
              <Nav.Link className = "about-us" href="#about-us">About us</Nav.Link>
              <Nav.Link className = "sign-out" href="#sign-out">Sign Out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
    <div className="form-container">
  <Form className="form-div">
    <h1>Password Generator</h1>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
</div>
    </div>


  )
};

export default Generator;