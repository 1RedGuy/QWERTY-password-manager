import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import image from "../img/profile-icon.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image1 from "../img/home-background.jpg";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/esm/Container";
import "./About_us.css";

const About_us = () => {
  return (
    <div
      className=""
    >
    
      <div  className="about-us-container text-light text-center">
        <div className="component-container">
          <h1 className=" py-10 fs-1 ">
            Who are we and what is our idea?
          </h1>
        </div>

        <div className="component-container">
          <Row className="about-us-profiles">
            <Col className="">
              <img src={image} className="profile-img" />
              <h2>Vladimir Demirev</h2>
            </Col>

            <Col className="  ">
              <img
                src={image}
                className="profile-img"
              />
              <h2>Georgi Baladzhanov</h2>
            </Col>

            <Col className="">
              <img
                src={image}
                className="profile-img"
              />
              <h2>Petar Kerezov</h2>
            </Col>
          </Row>
        </div>

        <div className=" info component-container text-center"> 
          <p className="">
            We are students from Tues at age of 14/15 , creating a website for
            secure saving of passwords.Each of us have created different parts
            of the design and the code for the website to work properly. Our
            technologies are Bootstrap and React for our website.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About_us;
