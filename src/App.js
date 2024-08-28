import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ContextProvider from "./ContextProvider/ContextProvider";
import ContactPage from "./Components/ContactPage";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Header from "./Components/Header";
import Body from "./Components/Body";
//import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      <Router>
        <ContextProvider>
          <header>
            <Header />
          </header>
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/contact-me" element={<ContactPage />} />
            <Route path="/my-experience" element={<Experience />} />
            <Route path="/my-projects" element={<Projects />} />
          </Routes>
        </ContextProvider>
      </Router>
    </div>
  );
};

export default App;
