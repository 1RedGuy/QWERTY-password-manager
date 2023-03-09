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
      <Form className="border  border-0.5 py-5 px-7 mx-20 position-absolute top-50 start-0 translate-middle-y translate-middle-x rounded">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-white">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-white">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit" className="">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
