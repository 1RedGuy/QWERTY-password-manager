import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../components/style-home/home.css";
import "../components/style-home/generator.css";
import Header from "../components/header/Header";
const Generator = () => {
  return (
    <div className = "thingy">
      <Header />
      <div className="form-container">
        <Form className="form-div">
          <h1>Password Generator</h1>
          <Form.Group controlId="formBasicEmail">
            <Form.Label >Generated password: </Form.Label>
            <Form.Control type="email" readOnly/>
          </Form.Group>
          <Form.Group className = "checkboxes" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Allow Numbers (0-9)" />
            <Form.Check type="checkbox" label="Allow Uppercase (ABC)" />
            <Form.Check type="checkbox" label="Allow Symbols (!@#$%^&*()+)" />
            <Form.Check type="checkbox" label="Allow Lowercase (abc)" />
          </Form.Group>
          <div>
            <Button className="generate-button" variant="primary" type="submit">
            Generate Password
          </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Generator;
