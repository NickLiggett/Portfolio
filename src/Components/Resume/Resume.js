import "./Resume.css";
import resume from "../../images/Resume.png";

const Resume = () => {
  return (
    // <embed
    //   className="resume"
    //   src={resume}
    // ></embed>
    <img src={resume} style={{width: "60%"}}/>
  );
};

export default Resume;
