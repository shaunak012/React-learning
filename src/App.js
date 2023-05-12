//Components
import Headers from "./MyComponents/Headers";
import { Footer } from "./MyComponents/Footer";
import { Home } from "./MyComponents/Home";
import { About } from "./MyComponents/About"
//CSS
import "./App.css";


//React Router- to be written 
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
      <Headers tittle="Hi Mummy!!" />
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
