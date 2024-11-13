import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contectus from "./pages/Contectus";
import ScrollToTop from "./pages/ScrollToTop";
function App() {
  return (
    <>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Layout />}>
           <Route path="/" element={<Home />} />
           <Route path="services" element={<Services />} />
           <Route path="about" element={<About />} />
           <Route path="contect" element={<Contectus />} />
         </Route>
       </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
