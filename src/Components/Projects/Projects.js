import "./Projects.css";
import squadFinderGif from "../../images/SelectProfile-HomeScreen.gif";
import LotrGif from "../../images/WSTLOTR.gif";
import dndGif from "../../images/DNDCharGen.gif";
import randyTomGif from "../../images/randyTom.gif";
import overlookGif from "../../images/overlook.gif";

const Projects = () => {
  return (
    <div className="project-wrapper">
      <div className="project" id="project-1">
        <h2 className="project-title">SquadFinder</h2>
        <div className="project-details">
          <img className="squad-finder-gif" src={squadFinderGif} />
          <p className="project-blurb">
            <h3 className="description-title">Description</h3> <br></br> - This
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
            <br></br>
            <a
              className="link"
              target="_blank"
              href="https://github.com/Squadfinder/frontend"
            >
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
            <h3 className="description-title">Description</h3> <br></br> - This
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
            <br></br>
            <a
              className="link"
              target="_blank"
              href="https://nickliggett.github.io/WhoSaidThat-LOTR/"
            >
              View the Application
            </a>
            <br></br>
            <a
              className="link"
              target="_blank"
              href="https://github.com/NickLiggett/WhoSaidThat-LOTR"
            >
              View the GitHub repository
            </a>
          </p>
        </div>
      </div>
      <div className="project" id="project-3">
        <h2 className="project-title">Randy Tom Burritos</h2>
        <div className="project-details">
          <img className="randy-tom-gif" src={randyTomGif} />
          <p className="project-blurb">
            <h3 className="description-title">Description</h3>
            <br></br>- This project was a play off of Rotten Tomatoes and was
            built in React.
            <br></br>
            <br></br>- React Router was used to create dynamic endpoints based
            on a data structure received as a promise from a fetch call to a
            hosted REST API.
            <br></br>
            <br></br>- Created a robust End to End Testing Suite that thoroughly
            tests all functionality of the client-side application with Cypress.
            <br></br>
            <br></br>
            <br></br>
            <a
              className="link"
              target="_blank"
              href="https://nickliggett.github.io/RandyTomBurritos/"
            >
              View the Application
            </a>
            <br></br>
            <a
              className="link"
              target="_blank"
              href="https://github.com/NickLiggett/RandyTomBurritos"
            >
              View the GitHub repository
            </a>
          </p>
        </div>
      </div>
      <div className="project" id="project-4">
        <h2 className="project-title">Dungeons & Documents</h2>
        <div className="project-details">
          <img className="dnd-gif" src={dndGif} />
          <p className="project-blurb">
            <h3 className="description-title">Description</h3>
            <br></br>- This project was built in React using TypeScript.{" "}
            <br></br>
            <br></br>- React Router was used to create dynamic endpoints based
            on a data structure received as a promise from a fetch call to a
            hosted REST API.
            <br></br>
            <br></br>- Created a robust End to End Testing Suite that thoroughly
            tests all functionality of the client-side application with Cypress.
            <br></br>
            <br></br>
            <br></br>
            <a
              className="link"
              target="_blank"
              href="https://ant-shell.github.io/dnd-stretch-tech/"
            >
              View the Application
            </a>
            <br></br>
            <a
              className="link"
              target="_blank"
              href="https://github.com/Ant-Shell/dnd-stretch-tech"
            >
              View the GitHub repository
            </a>
          </p>
        </div>
      </div>
      <div className="project" id="project-5">
        <h2 className="project-title">Overlook Hotel</h2>
        <div className="project-details">
          <img className="overlook-gif" src={overlookGif} />
          <p className="project-blurb">
            <h3 className="description-title">Description</h3>
            <br></br>- This project was built in vanilla JavaScript.
            <br></br>
            <br></br>- Data from a REST API, running on a local server, was
            extracted using fetch calls.
            <br></br>
            <br></br>- Utilized Class to Class Interaction, Object Oriented
            Programming, and the Fetch API in order to successfully retrieve and
            add data to a REST API running on a local server.
            <br></br>
            <br></br>
            <br></br>
            <a
              className="link"
              target="_blank"
              href="https://ant-shell.github.io/dnd-stretch-tech/"
            >
              View the Application
            </a>
            <br></br>
            <a
              className="link"
              target="_blank"
              href="https://github.com/Ant-Shell/dnd-stretch-tech"
            >
              View the GitHub repository
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
