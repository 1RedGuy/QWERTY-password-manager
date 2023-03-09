import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Home.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <div className = "nav-bar">
      <Navbar className = "bg-transparent" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className = "Home text-dark" href="#home">Home</Nav.Link>
            <Nav.Link className = "Passwords" href="#features">Features</Nav.Link>
            <Nav.Link className = "About us" href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
export default ColorSchemesExample;




