import "./Resume.css";
import resume from "../../images/Resume.png";
import resumePDF from "../../images/Nicholas Liggett Resume.pdf"

const Resume = () => {
  return (
    <embed
      className="resume"
      src={resumePDF}
      style={{width: '90%', height: '75rem'}}
    ></embed>
    // <img src={resume} style={{width: "60%"}}/>
  );
};

export default Resume;
