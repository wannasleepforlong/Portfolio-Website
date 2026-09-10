import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Research from "./components/Research/Research";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import ThemeToggle from "./components/ThemeToggle";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "warm";
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === "warm" ? "night" : "warm"
    );
  }

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/project" element={<Projects theme={theme} />} />
          <Route path="/experience" element={<Experience theme={theme} />} />
          <Route path="/research" element={<Research theme={theme} />} />
          <Route path="/about" element={<About theme={theme} />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </div>
    </Router>
  );
}

export default App;
