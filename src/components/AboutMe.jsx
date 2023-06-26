import user_photo from "../assets/my_photo.jpg";

const AboutMe = () => {
  return (
    <div className="about flex">
      <img className="user_photo" src={user_photo} alt="user_photo" />
      <div>
        <h1>Rozumniy Oleksii</h1>
        <h2>Front-end Developer</h2>
        <h4 className="about_me">
          I am a beginner frontend developer. My goal as a developer is to apply
          my technical skills to web development, creating interesting
          applications, cool user interfaces, and vivid, memorable web pages
          that you want to visit again and again. I am a team player open to
          change and will strive to bring success to the company by developing
          optimal algorithms and approaches that will solve problems that arise
          in Frontend development. <br/> I read technical literature in English, watch
          shows and listen to podcasts.
        </h4>
      </div>
    </div>
  );
};

export default AboutMe;
