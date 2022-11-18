import "./AboutMe.css";
import mountainPic from "../../images/mountain-nick.jpeg"

const AboutMe = () => {
  return (
    <div className="about-me">
      <img className="mountainPic" src={mountainPic}/>
      <p className="about-me-blurb">
        Hello! My name is Nicholas Liggett, a Denver based Front End Software
        Developer. I have experience in Property Management as a Lead
        Maintenance Technician, in Health Insurance as a Licensed Agent, and in
        the Restaurant Business as a Back of House Kitchen Manager. I am
        passionate about creating dynamic Front End user experiences and
        currently seeking a Software Engineer/Developer position with an
        organization focused on client solutions. My programming experience
        includes JavaScript, React, React Native, TypeScript, and Node,
        utilizing Test-Driven Development.
      </p>
    </div>
  );
};
export default AboutMe;
