import "bootstrap/dist/css/bootstrap.min.css";
import Demo from "./Comps/Demo";
import Navigation from "./Comps/Navigation";
import Carousel from "./Comps/Carousel";
import ResponsiveAutoExample from "./Comps/ResponsiveAutoExample";
import HorizontalMarginStartExample from "./Comps/Yuxarisi";
import ButtonsExample from "./Comps/Btns";
import { Button } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navbar";
import About from "./Pages/About";
import Users from "./Pages/Users";
import Slider from "./Components/Slider";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        {/* <Button variant="primary">Web Dev log</Button> */}
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Users />} path="/users" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
