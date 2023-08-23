import img from "../../assets/projects/02.jpg";
import BtnGitHub from "../BtnGitHub";


const Projectpage = () => {
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">Video service</h1>

          <img
            src={img}
            alt="img"
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>Skills: React, Node.js, MongoDB</p>
          </div>

          <BtnGitHub link="https://github.com"/>
        </div>
      </div>
    </main>
  );
};

export default Projectpage;
