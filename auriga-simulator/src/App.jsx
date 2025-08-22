import './App.css'
import Home from "./pages/HomePage";
import Visualize from "./pages/VisualizePage";
import Auriga from "./pages/AurigaPage";
import About from "./pages/AboutPage";
import EscapeRoom from "./pages/EscapeRoomPage";
import Navbar from "./components/shared/NavbarTemp";
import { Routes, Route } from "react-router-dom";


function App() {
   return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/VisualizePage" element={<Visualize />} />
      <Route path="/AboutPage" element={<About />} />
      <Route path="AurigaPage" element={<Auriga />} />
      <Route path="/escape-room" element={<EscapeRoom />} />
    </Routes>
    </>
   );
}

export default App
