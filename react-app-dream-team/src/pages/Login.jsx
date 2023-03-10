import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import image from "../img/CyberSecurity.png";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const handleSignIn = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "cover",
        width: "100vw",
        height: "100vh",
        margin: "0 0",
      }}
      className=""
    >
      <div
        className="loginform rounded px-20 p-20 mx-20 mb-5 
    position-absolute top-50 start-0 translate-middle-y translate-middle-x "
        style={{
          boxShadow: "1px 1px 50px rgba(0, 0, 0, 0.4)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          backgroundColor: "rgba(0,0,0, 0.3)",
        }}
      >
        <Form>
          <h1 className="text-center text-white position-top-50">
            Log in/Sign up
          </h1>
          <Form.Group className="mb-1 p-1 width:10 " controlId="formBasicEmail" >
            <Form.Label className="text-white">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3 py-3 " controlId="formBasicPassword">
            <Form.Label className="text-white ">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button className="btn btn-primary my-2  " type="submit" onClick={handleSignIn}>
              Log In
            </Button>
            <Button className="btn btn-primary " type="submit" onClick={handleSignUp}>
              Sign Up
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
