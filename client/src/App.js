import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Sidebar from "./components/Sidebar/Sidebar";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";


function App() {
  return (
    <>
    
    <Sidebar/>
   
     
      <main className="main-content" style={{ marginLeft: "220px", padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
           
        </Routes>

      </main>
      </>
      
      
    
  );
}

export default App;
