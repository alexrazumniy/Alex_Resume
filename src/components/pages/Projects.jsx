import img01 from "./../../assets/projects/01.jpg"
import img02 from "./../../assets/projects/02.jpg"
import img03 from "./../../assets/projects/03.jpg"
import img04 from "./../../assets/projects/04.jpg"
import img05 from "./../../assets/projects/05.jpg"
import img06 from "./../../assets/projects/06.jpg"

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          <li className="project">
            <a href="./project-page.html">
              <img
                src={img01}
                alt="Project img"
                className="project__img"
              />
              <h3 className="project__title">Gaming streaming portal</h3>
            </a>
          </li>
          <li className="project">
            <a href="./project-page.html">
              <img
                src={img02}
                alt="Project img"
                className="project__img"
              />
              <h3 className="project__title">Video service</h3>
            </a>
          </li>
          <li className="project">
            <a href="./project-page.html">
              <img
                src={img03}
                alt="Project img"
                className="project__img"
              />
              <h3 className="project__title">Video portal</h3>
            </a>
          </li>

          <li className="project">
            <img
              src={img04}
              alt="Project img"
              className="project__img"
            />
            <h3 className="project__title">Dating app</h3>
          </li>
          <li className="project">
            <img
              src={img05}
              alt="Project img"
              className="project__img"
            />
            <h3 className="project__title">Landing</h3>
          </li>
          <li className="project">
            <img
              src={img06}
              alt="Project img"
              className="project__img"
            />
            <h3 className="project__title">Gaming community</h3>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Projects;
