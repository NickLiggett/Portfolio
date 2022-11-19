import "./App.css";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import AboutMe from "../AboutMe/AboutMe";
import Resume from "../Resume/Resume";
import Projects from "../Projects/Projects";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <main>
      <Header />
      <Nav />
      <Switch>
        <Route exact path="/Portfolio" component={AboutMe}></Route>
        <Route exact path="/Portfolio/resume" component={Resume}></Route>
        <Route exact path="/Portfolio/projects" component={Projects}></Route>
      </Switch>
    </main>
  );
}

export default App;
