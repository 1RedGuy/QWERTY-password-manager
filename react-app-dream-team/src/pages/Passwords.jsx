import Header from "../components/header/Header";
import "../components/style-home/passwords.css";
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import image from "../img/google-logo.png";
import image1 from "../img/twitter-logo.png";
import image2 from "../img/insta-logo.png";
function PassEditor() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleClick = () => setShowModal(true);

  const handleSave = (event) => {
    event.preventDefault();
    // Add code to save form data here
    setShowModal(false);
  };

  return (
    <div>
      <Header />
      <Button className="add-button square bg-primary rounded-circle position-absolute bottom-0 end-0" onClick={handleClick}>Add</Button>{' '}
      <div className="model-content">
        <Modal className="modal-editor" show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className = "text-center">Add account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSave}>
            <div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address/Username </Form.Label>
                <Form.Control type="email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicUrl">
                <Form.Label>URL</Form.Label>
                <Form.Control type="url" />
              </Form.Group>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="save-button" onClick={handleSave}>
              Save
            </Button>
          <Button className="close-button" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
      </div>
      <div className="container-1">
        <div className="container-div-1">
          <img src={image} alt="google-logo" className="google-logo"/>
        <label style={{
          marginLeft: "5px",
        }}>Google</label>
        <button className = "open-button" style = {{
          marginLeft: "195px",
          paddingBottom: "15px",
        }}> Open </button>
        </div>
      </div>
      
      <div className="container-2">
        <div className="container-div-2">
          <img src={image1} alt="twitter-logo" className="twitter-logo"/>
        <label>Twitter</label>
        <button className = "twitter-open-button"
        > Open </button>
        </div>
      </div>

      <div className="container-3">
        <div className="container-div-3">
          <img src={image2} alt="insta-logo" className="insta-logo"/>
        <label 
        >Instagram</label>
        <button className = "open-button"> Open </button>
        </div>
      </div>

    </div>
  );
}

export default PassEditor;
