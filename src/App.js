import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import { Navbar } from 'responsive-navbar-react'
import 'responsive-navbar-react/dist/index.css'

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
        link: '/'
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
      <Router>
      <Navbar {...props}/>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
