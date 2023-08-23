import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Projectpage from "./components/pages/Projectpage";
import Contacts from "./components/pages/Contacts";
// import AboutMe from "./components/AboutMe";
// import ContactInfo from "./components/ContactInfo";
// import Skills from "./components/Skills";
// import Education from "./components/Education";
import Footer from "./components/Footer";

import ScrollToTop from "./components/utils/scrollToTop";

const App = () => {
  return (
    <div className="container">
      <Router>
        <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Projectpage />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>

        <Footer />

        {/* <AboutMe /> */}
        {/* <ContactInfo /> */}
        {/* <Education /> */}
        {/* <Skills /> */}
      </Router>
    </div>
  );
};

export default App;
