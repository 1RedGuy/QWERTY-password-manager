import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar  className="header-navbar">
          <Container className="nav-container mr = 20px">
            <Navbar.Brand className="my-logo" href="/home">
              QWERTY
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link className="generator" href="/generator">
                Generator
              </Nav.Link>
              <Nav.Link className="passwords" href="#passwords">
                Passwords
              </Nav.Link>
              <Nav.Link className="about-us" href="/about-us">
                About us
              </Nav.Link>
              <Nav.Link className="sign-out" href="/sign-out">
                Sign Out
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
  );
};
export default Header;
