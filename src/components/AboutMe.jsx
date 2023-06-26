import user_photo from "../assets/my_photo.jpg";

const AboutMe = () => {
  return (
    <div className="flex">
      <img className="user_photo" src={user_photo} alt="user_photo" />
      <div>
        <h1>Rozumniy Oleksii</h1>
        <h2>Front-end Developer</h2>
        <h3>Kharkiv, Ukraine +380996335644 ncecoexp@gmail.com</h3>
      </div>
    </div>
  );
};

export default AboutMe;
