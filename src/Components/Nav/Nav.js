import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <NavLink className="nav-link" to="/Portfolio">
        <div id="about-me">About Me</div>
      </NavLink>
      <NavLink className="nav-link" to="/Portfolio/resume">
        <div>Resume</div>
      </NavLink>
      <NavLink className="nav-link" to="/Portfolio/projects">
        <div>Projects</div>
      </NavLink>
      <div>
        <a
          className="nav-link"
          target="_blank"
          href="https://github.com/NickLiggett"
        >
          GitHub
        </a>
      </div>
      <div>
        <a
          className="nav-link"
          target="_blank"
          href="https://www.linkedin.com/in/nick-liggett/"
        >
          LinkedIn
        </a>
      </div>
    </nav>
  );
};

export default Nav;
