import "./styles/main.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import ContactInfo from "./components/ContactInfo";
import Skills from "./components/Skills";
import Education from "./components/Education";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Header />

      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM,
                BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
            </li>
          </ul>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <ul className="social">
              <li className="social__item">
                <a href="#!">
                  <img src="./img/icons/vk.svg" alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src="./img/icons/instagram.svg" alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src="./img/icons/twitter.svg" alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src="./img/icons/gitHub.svg" alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src="./img/icons/linkedIn.svg" alt="Link" />
                </a>
              </li>
            </ul>
            <div className="copyright">
              <p>© 2023 frontend-dev.com</p>
            </div>
          </div>
        </div>
      </footer>
      <AboutMe />
      <ContactInfo />
      <Education />
      <Skills />
    </div>
  );
};

export default App;
