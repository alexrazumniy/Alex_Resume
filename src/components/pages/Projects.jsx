import Project from "../Project";
import { projectslist } from "../../helpers/projectsList";

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projectslist.map((project, id) => {
            return <Project key={id} title={project.title} img={project.img} id={id}/>;
          })}
        </ul>
      </div>
    </main>
  );
};

export default Projects;
