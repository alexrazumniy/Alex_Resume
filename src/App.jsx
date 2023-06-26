import "./styles/main.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
// import Loader from "./components/Loader";

const App = () => {
  return (
    <div className="container">
      <Header />
      <AboutMe />
      {/* <Loader /> */}
    </div>
  );
};

export default App;
