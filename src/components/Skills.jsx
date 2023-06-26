import html from "../assets/skills-icons/html.svg";
import bootstrap from "../assets/skills-icons/bootstrap.svg";
import coreldraw from "../assets/skills-icons/coreldraw.svg";
import css from "../assets/skills-icons/css.svg";
import gulp from "../assets/skills-icons/gulp.svg";
import git from "../assets/skills-icons/git.svg";
import js from "../assets/skills-icons/js.svg";
import node from "../assets/skills-icons/node.svg";
import photoshop from "../assets/skills-icons/photoshop.svg";
import premiere from "../assets/skills-icons/premiere.svg";
import react from "../assets/skills-icons/react.svg";
import redux from "../assets/skills-icons/redux.svg";
import sass from "../assets/skills-icons/sass.svg";
import webpack from "../assets/skills-icons/webpack.svg";

const Skills = () => {
  return (
    <div className="skills">
      <h2 className="skills_header">Skills</h2>
      <div className="skills_info">
        <img className="skills__item" src={html} />
        <img className="skills__item" src={css} />
        <img className="skills__item" src={js} />
        <img className="skills__item" src={git} />
        <img className="skills__item" src={sass} />
        <img className="skills__item" src={node} />
        <img className="skills__item" src={react} />
        <img className="skills__item" src={redux} />
        <img className="skills__item" src={bootstrap} />
        <img className="skills__item" src={gulp} />
        <img className="skills__item" src={webpack} />
        <img className="skills__item" src={coreldraw} />
        <img className="skills__item" src={photoshop} />
        <img className="skills__item" src={premiere} />
      </div>
    </div>
  );
};

export default Skills;
