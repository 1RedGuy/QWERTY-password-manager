import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Button from "react-bootstrap/Button";
import "../components/style-home/home.css";
import Header from "../components/header/Header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="position-absolute top-50 start-50 translate-middle ">
        <h1 className="header text-white text-bold text-center">
          QWERTY PASSWORD MANAGER
        </h1>
        <div className="small-header-div">
          <h4 className="small-header text-white ">
            Do not ever forget your passwords again, we will keep them safe for
            you.
          </h4>
        </div>
        <div style={{ textAlign: "center" }}>
          <Link to={"/get-started"}>
            <Button className="get-started-button mr-2">Get Started</Button>
          </Link>
          <Link to={"/learn-more"}>
            <Button className="learn-more-button ">Learn More</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
