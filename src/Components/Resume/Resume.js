import "./Resume.css"
import resume from "../../images/Nicholas Liggett Resume.pdf"

const Resume = () => {
    return (
            <embed className="resume" src={resume}></embed>
    )
}

export default Resume