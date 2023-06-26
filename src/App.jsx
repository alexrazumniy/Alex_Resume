import "./styles/main.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import ContactInfo from "./components/ContactInfo";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
// import Loader from "./components/Loader";

const App = () => {
  return (
    <div className="container">
      <Header />
      <AboutMe />
      <ContactInfo />
      <Experience />
      <Skills />
      {/* <Loader /> */}
    </div>
  );
};

export default App;
