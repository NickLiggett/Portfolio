import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <NavLink to="/Portfolio">
        <div className="nav-link">About Me</div>
      </NavLink>
      <NavLink to="/Portfolio/resume">
        <div className="nav-link">Resume</div>
      </NavLink>
      <NavLink to="/Portfolio/projects">
        <div className="nav-link">Projects</div>
      </NavLink>
      <div>
        <a className="nav-link" href="https://github.com/NickLiggett">
          GitHub
        </a>
      </div>
      <div>
        <a
          className="nav-link"
          href="https://www.linkedin.com/in/nick-liggett/"
        >
          LinkedIn
        </a>
      </div>
    </nav>
  );
};

export default Nav;
