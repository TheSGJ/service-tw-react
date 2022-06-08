import "./App.css";
import * as React from 'react';
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from 'responsive-navbar-react'
import 'responsive-navbar-react/dist/index.css'
import Contact from "./components/Contact";
import { Container } from "@mui/material";
function App() {
  const props = {
    items: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'About',
        link: '/about'
      },
      {
        text: 'Contact',
        link: '/contact'
      }
    ],
    logo: {
      text: 'Service - TW',
      link: '/'
    },
    style: {
      barStyles: {
        background: '#171c24'
      },
      sidebarStyles: {
        background: '#222',
        buttonColor: 'white'
      }
    }
  }

  return (
    <div className="dark:bg-gray-900">
      <Navbar {...props}/>
      <Router>
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
