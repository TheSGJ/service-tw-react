import "./App.css";
import * as React from 'react';
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="dark:bg-gray-900">
      
      <Router>
      <Navbar />
          <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          </Container>
      </Router>
      <Footer />

    </div>
  );
}

export default App;
