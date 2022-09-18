import "bootstrap/dist/css/bootstrap.min.css";
import Navbarscomp from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Aboutus from "./Components/Aboutus";
import Contactus from "./Components/contactus";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/aboutus" element={<Aboutus />} />
          <Route exact path="/contactus" element={<Contactus />} />
        </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
