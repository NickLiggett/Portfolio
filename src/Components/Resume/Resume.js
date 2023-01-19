import "./Resume.css";
import resumePDF from "../../images/Nicholas Liggett Resume.pdf"

const Resume = () => {
  return (
    <embed
      className="resume"
      src={resumePDF}
      style={{width: '90%', height: '75rem'}}
    ></embed>
  );
};

export default Resume;
