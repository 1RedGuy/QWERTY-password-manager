import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import image from "../img/profile-icon.png";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const About_us = () =>{
    return(
    <div className="container">
        <h1 className="fs-1 text-center mt-20">Who are we and what is our idea?</h1>
        <Row md={4}>
        <Col className="position-absolute top-50 start-0 translate-middle-y">
            <img src={image} className="img-fluid"/>
              <h2>Vladimir Demirev</h2>     
            </Col>
        <Col className="position-absolute top-50 start-50 translate-middle" xs={6}>
            <img src={image} className="img-fluid" />
            <h2>Georgi Baladzhanov</h2>
            </Col>
        <Col className="position-absolute top-50 end-0 translate-middle-y">
            <img src={image} className="img-fluid" />
            <h2>Petar Kerezov</h2>
            </Col>
      </Row>
      <p
       className= "lh-sm text-center fs-4 text position-absolute bottom-0 start-50 translate-middle-x"
       >We are students from Tues at age of 14/15 , creating a website for secure saving of passwords.Each of us have created different parts of the design and the code for the website to work properly.
        Our technologies are Bootstrap and React for our website.
      </p>
    </div>

    );
}
export default About_us;