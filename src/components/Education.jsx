import student_cap from "../assets/student_cap.svg";

const Education = () => {
  return (
    <div className="education">
      <h2>Education</h2>
      <div className="university flex">
        <img src={student_cap} />
        <h3>-------------------Donetsk National Technical University</h3>
      </div>
      <div className="course flex">
        <img src={student_cap} />
        <h3>-------------------Byte IT Education</h3>
      </div>
    </div>
  );
};
export default Education;
