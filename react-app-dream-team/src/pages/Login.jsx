import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import image from "../img/CyberSecurity.png";


const Login = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: 'cover',
        width: '100vw',
        height: '100vh',
        margin: '0 0'
      }}
      className=""
    >
      <Form className="border border-primary px-20 p-20 mx-20 position-absolute top-50 start-0 translate-middle-y translate-middle-x rounded">
         <Form.Group className="mb-1 py-3 " controlId="formBasicEmail">
          <Form.Label className="text-white">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3 py-3 " controlId="formBasicPassword">
          <Form.Label className="text-white ">Password</Form.Label>
          <Form.Control  type="password" placeholder="Password" />
        </Form.Group>
        <div className="d-grid gap-2">
        <Button className="btn btn-primary my-2" type="button">
          Log In
        </Button>
        <Button className="btn btn-primary px-5" type="button">
          Sign Up
        </Button>
        </div>
      </Form>
      </div>
     );
};

export default Login;
