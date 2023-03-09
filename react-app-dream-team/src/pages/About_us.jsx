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
        <Col><img src="../img/profile-icon.png"/></Col>
        <Col xs={6}>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </div>

    );
}
export default About_us;