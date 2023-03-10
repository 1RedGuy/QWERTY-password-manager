import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../components/header/Header";
function SavePassword() {
  return (
    <div>
      <Header />
      <Form>
        <Form.Group className="mb-3" controlId="Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save password
        </Button>
      </Form>
    </div>
  );
}

export default SavePassword;
