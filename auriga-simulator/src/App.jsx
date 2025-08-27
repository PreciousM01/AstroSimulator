import './App.css'
import Home from "./pages/HomePage";
import Visualize from "./pages/VisualizePage";
import Auriga from "./pages/AurigaPage";
import About from "./pages/AboutPage";
import Navbar from "./components/shared/NavbarTemp";
import { Routes, Route } from "react-router-dom";


function App() {
   return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/visualize" element={<Visualize />} />
      <Route path="/about" element={<About />} />
      <Route path="/auriga" element={<Auriga />} />

    </Routes>
    </>
   );
}

export default App