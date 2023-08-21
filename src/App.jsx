import "./styles/main.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import ContactInfo from "./components/ContactInfo";
import Skills from "./components/Skills";
import Education from "./components/Education";
// import Loader from "./components/Loader";

const App = () => {
  return (
    <div className="container">
      <Header />
      <AboutMe />
      <ContactInfo />
      <Education />
      <Skills />
      {/* <Loader /> */}
    </div>
  );
};

export default App;
