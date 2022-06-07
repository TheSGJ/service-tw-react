import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavbarMenu from "./components/NavbarMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
      <NavbarMenu />
        <div>
          <h1>Hello, React Router!</h1>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
