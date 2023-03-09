import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import ListGroup from 'react-bootstrap/ListGroup';
const About_us = () =>{
    return(
    <div className="container">
        <h1 className="fs-1 text-center mt-20">Who are we and what is our idea?</h1>
        <div className="row">
            <div className="col-4">
            <ListGroup>
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
    </ListGroup>
            </div>
            <div className="col-4">

            </div>
            <div className="col-4">

            </div>
        </div>
    </div>

    );
}
export default About_us;