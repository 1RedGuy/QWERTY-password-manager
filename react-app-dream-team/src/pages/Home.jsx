import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import image from "../img/home-background.jpg";
import Button from 'react-bootstrap/Button';
import "../components/style-home/home.css";
const Home = () =>{
  return (
    <div style={{
      backgroundImage: `url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      objectFit: 'cover',
      width: '100vw',
      height: '100vh',
      margin: '0 0',      
    }} >
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
    <div className = "position-absolute top-50 start-50 translate-middle "> 
      <h1 className = "header text-white text-bold text-center">
      QWERTY PASSWORD MANAGER 
      </h1>
      <div className="small-header-div">
        <h4 className = "small-header text-white ">
        Do not ever forget your passwords again, we will keep them safe for you. 
      </h4>
      </div>
      <div style={{ textAlign: 'center' }}>
  <Button className="get-started-button mr-2">
    Get Started
  </Button>

  <Button className="learn-more-button">
    Learn More
    </Button>
  </div>
      </div>
    
    </div>
    
  );
}
export default Home;




