import "./styles/main.css";
import Navbar from "./components/Navbar";
// import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";

import AboutMe from "./components/AboutMe";
import ContactInfo from "./components/ContactInfo";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      {/* <Home/> */}
      <Projects/>
      <Footer />

      <AboutMe />
      <ContactInfo />
      <Education />
      <Skills />
    </div>
  );
};

export default App;
