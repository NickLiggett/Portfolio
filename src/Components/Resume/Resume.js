import "./Resume.css";
import resume from "../../images/Nicholas Liggett Resume.pdf";

const Resume = () => {
  return (
    <embed
      className="resume"
      src={resume}
      style={{width: "80%", height: "100%"}}
    ></embed>
  );
};

export default Resume;
