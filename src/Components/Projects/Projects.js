import "./Projects.css";
import squadFinderGif from "../../images/SelectProfile-HomeScreen.gif";
import LotrGif from "../../images/WSTLOTR.gif";

const Projects = () => {
  return (
    <div className="project-wrapper">
      <div className="project" id="project-1">
        <h2 className="project-title">SquadFinder</h2>
        <div className="project-details">
          <img className="squad-finder-gif" src={squadFinderGif} />
          <p className="project-blurb">
            <h3 className="description-title">Description:</h3> <br></br> - This
            project's Front End was built with React Native and was nominated
            for Turing School of Software and Design's Demo Competition.
            <br></br>
            <br></br> - The Back End team utilized an external REST API provided
            by RAWG to parse through and create endpoints that the Front End
            team used to fetch appropriate data in order to build the User
            Interface.
            <br></br>
            <br></br> - Basic Component Testing was done with React Native
            Testing Library and Jest Native.<br></br>
            <br></br> - The use of iOS Simulators and Android Emulators were
            used in the development stage. <br></br>
            <br></br> - React Native Navigation was used for the application's
            navigation functionality.<br></br>
            <br></br> - CircleCI was used to setup Continuous
            Integration/Continuous Development.<br></br>
            <br></br> - Heroku was used by the Back End to setup the parsed REST
            API. <br></br>
            <br></br>
            <a href="https://github.com/Squadfinder/frontend">
              View the GitHub repository
            </a>
          </p>
        </div>
      </div>
      <div className="project" id="project-2">
        <h2 className="project-title">Who Said That? Lord of The Rings</h2>
        <div className="project-details">
          <img className="lotr-gif" src={LotrGif} />
          <p className="project-blurb">
            <h3 className="description-title">Description:</h3> <br></br> - This
            project was built in React.
            <br></br>
            <br></br> - A hidden API key was used to retrieve data from a hosted
            REST API. <br></br>
            <br></br> - React Router was used to create dynamic endpoints based
            on a data structure received as a promise from a fetch call to a
            hosted REST API. <br></br>
            <br></br> - Fixtures were utilized in order to successfully
            intercept and stub fetch calls for End to End Testing with Cypress.{" "}
            <br></br>
            <br></br>
            <a href="https://nickliggett.github.io/WhoSaidThat-LOTR/">
              View the Application
            </a>
            <br></br>
            <a href="https://github.com/NickLiggett/WhoSaidThat-LOTR">
              View the GitHub repository
            </a>
          </p>
        </div>
      </div>
      <div className="project" id="project-3">
        Randy Tom Burritos
      </div>
      <div className="project" id="project-4">
        D&D Character Generator
      </div>
      <div className="project" id="project-5">
        Who Said That?
      </div>
    </div>
  );
};

export default Projects;
