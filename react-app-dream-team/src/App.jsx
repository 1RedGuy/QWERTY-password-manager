import "./firebase.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./pages/Home";
import Home from "./pages/Home";
import "./pages/Login";
import Login from "./pages/Login";
import About_us from "./pages/About_us.jsx";
import Generator from "./pages/Generator.jsx";
import Passwords from "./pages/Passwords.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/header/Header.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about-us",
    element: <About_us />,
  },
  {
    path: "/generator",
    element: <Generator />,
  },
  {
    path: "/sign-out",
    element: <Login />,
  },
  {
    path: "/learn-more",
    element: <About_us />,
  },
  {
    path: "/get-started",
    element: <Passwords />,
  },
]);
console.log(router.path);

const App = () => {
  return (
    <div className="application-styling">
      {router.path == "/" ? <Header /> : null}
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
