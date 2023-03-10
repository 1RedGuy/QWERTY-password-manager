import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import image from "../img/home-background.jpg";
import Button from 'react-bootstrap/Button';
import "../components/style-home/home.css";
import  Header from "../components/header/Header";
const Home = () =>{
  return (
    <div >
    <Header/>
    <div className = "position-absolute top-50 start-50 translate-middle "> 
      <h1 className = "header text-white text-bold text-center">
      QWERTY PASSWORD MANAGER 
      </h1>
      <div className="small-header-div">
        <h4 className = "small-header text-white ">
        Do not ever forget your passwords again, we will keep them safe for you. 
      </h4>
      </div>
      <div style={{ textAlign: 'center' }}>
  <Button className="get-started-button mr-2">
    Get Started
  </Button>

  <Button className="learn-more-button">
    Learn More
    </Button>
  </div>
      </div>
    
    </div>
    
  );
}
export default Home;




