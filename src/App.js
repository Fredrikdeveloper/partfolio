import React from "react";
import {Route , Routes} from "react-router-dom"
import Project from "./components/project/Project";
import Home from "./pages/home/Home";
import Technology from "./components/technology/Technology";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Techstack from "./pages/techstack/Techstack";
import Header from "./components/header/Header";
import Contact from "./pages/contact/Contact";
import MyProjects from "./pages/myProjectjs/MyProjects";
import About from "./pages/about/About";
function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/technology" element={<Technology />} />
          <Route path="/project" element={<Project />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/techstack" element={<Techstack />} />
          <Route path="/" element={<Home />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/header" element={<Header />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/myProjects" element={<MyProjects />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
