import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../components/style-home/home.css";
import "../components/style-home/generator.css";
import Header from "../components/header/Header";
import { useState } from "react";

const Generator = () => {
  const[generatedPassword, setGeneratedPassword] = useState("");
  const[allowNumbers, setAllowNumbers] = useState(false);
  const[allowUppercase, setAllowUppercase] = useState(false);
  const[allowSymbols, setAllowSymbols] = useState(false);
  const[allowLowercase, setAllowLowercase] = useState(false);

  const handleCheckboxChange = (e) => {
    const checkboxName = e.target.name;
    const isChecked = e.target.checked;
    switch (checkboxName) {
      case "num_checkbox":
        setAllowNumbers(isChecked);
        break;
      case "upc_checkbox":
        setAllowUppercase(isChecked);
        break;
      case "symb_checkbox":
        setAllowSymbols(isChecked);
        break;
      case "lwc_checkbox":
        setAllowLowercase(isChecked);
        break;
      default:
        break;
    }
  };
  const generatePassword = () => {
  let char = "";
  if (allowNumbers)char += "0123456789";
  if (allowUppercase)char += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (allowSymbols)char += "!@#$%^&*()+";
  if (allowLowercase)char += "abcdefghijklmnopqrstuvwxyz";
  let password = "";
  for (let i = 0; i < 10; i++) {
    password += char.charAt(Math.floor(Math.random() * char.length));
    }
    setGeneratedPassword(password);
  };
  return (
    <div className = "thingy">
      <Header />
      <div className="form-container">
        <Form className="form-div">
          <h1>Password Generator</h1>
          <Form.Group controlId="upper-part-form">
            <Form.Label >Generated password: </Form.Label>
            <Form.Control type="email" readOnly value = {generatedPassword}/>
          </Form.Group>
          <Form.Group className = "checkboxes">
            <Form.Check 
            type="checkbox"
            label="Allow Numbers (0-9)"
            name="num_checkbox"
            onChange={handleCheckboxChange}
             />
            <Form.Check 
            type="checkbox"
            label="Allow Uppercase (ABC)"
            name="upc_checkbox"
            onChange={handleCheckboxChange}
             />
            <Form.Check
            type="checkbox"
            label="Allow Symbols (!@#$%^&*()+)" 
            name="symb_checkbox"
            onChange={handleCheckboxChange}/>
            <Form.Check 
            type="checkbox" 
            label="Allow Lowercase (abc)"
            name="lwc_checkbox"
            onChange={handleCheckboxChange}
            />
          </Form.Group>
          <div>
            <Button className="generate-button"
            variant="primary"
            type="button"
            onClick={generatePassword}
            >
            Generate Password
          </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Generator;
