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
        margin: '0 0',
      }}
      className=""
    >
      <div
    className="loginform rounded px-20 p-20 mx-20 mb-5 
    position-absolute top-50 start-0 translate-middle-y translate-middle-x "
      style={{
        boxShadow: '1px 1px 50px rgba(0, 0, 0, 0.4)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}
      >
      <Form>
        <h1 className="text-center text-white position-top-50">Log in/Sign up</h1>
         <Form.Group className="mb-1 p-1 width:10 " controlId="formBasicEmail">
          <Form.Label className="text-white">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3 py-3 " controlId="formBasicPassword">
          <Form.Label className="text-white ">Password</Form.Label>
          <Form.Control  type="password" placeholder="Password" />
        </Form.Group>
        <div className="d-grid gap-2">
        <Button className="btn btn-primary my-2  " type="button">
          Log In
        </Button>
        <Button className="btn btn-primary " type="button">
          Sign Up
        </Button>
        </div>
      </Form>
      </div>
      </div>
     );
};

export default Login;
