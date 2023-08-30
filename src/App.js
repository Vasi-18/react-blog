import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Home from "./pages/Home";
import FSD from "./pages/FSD";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataScience from "./pages/DataScience";
import Cyber from "./pages/Cyber";
import Carrer from "./pages/Carrer";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FSD" element={<FSD />} />
        <Route path="/DataScience" element={<DataScience />} />
        <Route path="/Cyber" element={<Cyber />} />
        <Route path="/Carrer" element={<Carrer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
