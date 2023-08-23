import githubIcon from "../assets/icons/gitHub-black.svg";

const BtnGitHub = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={githubIcon} alt="githubIcon" />
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
