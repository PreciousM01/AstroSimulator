import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
      <Route path="/VisualizePage" element={<Visualize />} />
      <Route path="/AboutPage" element={<About />} />
      <Route path="AurigaPage" element={<Auriga />} />
    </Routes>
    <div className="bg-red-500 text-white p-8 text-2xl">
      TEST - This should be red with white text
    </div>
    </>
   );
}

export default App
