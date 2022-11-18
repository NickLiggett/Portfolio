import "./App.css";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import AboutMe from "../AboutMe/AboutMe";
import Resume from "../Resume/Resume";
import Projects from "../Projects/Projects";
import { Route } from "react-router-dom";

function App() {
  return (
    <main>
      <Header />
      <Nav />
      <Route exact path="/Portfolio">
        <AboutMe />
      </Route>
      <Route exact path="/Portfolio/resume">
        <Resume />
      </Route>
      <Route exact path="/Portfolio/projects">
        <Projects />
      </Route>
    </main>
  );
}

export default App;
