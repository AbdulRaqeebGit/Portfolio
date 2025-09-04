import React from "react";
import   "../styles/About.css";

// Font Awesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSchool,
  faGraduationCap,
  faChalkboardTeacher,
  faLaptopCode,
  faCode,
  faDatabase,
  faToolbox,
  faTerminal,
  faPalette,
  faFolderOpen
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="about-container">
      {/* Experience */}
      <div className="about-section">
        <h1>Experience</h1>
        <ul>
          <li>
            <FontAwesomeIcon icon={faChalkboardTeacher} />
            <div>
              <b>HH Grammar School</b>
              <br />15 months in Teaching of MS Office
            </div>
          </li>
        </ul>
      </div>

      {/* Education */}
      <div className="about-section">
        <h1>My Education</h1>
        <ul>
          <li>
            <FontAwesomeIcon icon={faSchool} />
            <div>
              <b>Matric</b>
              <br />Govt Boys Secondary School Anjam Colony
            </div>
          </li>
          <li>
            <FontAwesomeIcon icon={faGraduationCap} />
            <div>
              <b>Intermediate</b>
              <br />Govt Boys Degree College Syedabad
            </div>
          </li>
        </ul>
      </div>

      {/* Courses */}
      <div className="about-section">
        <h1>Courses</h1>
        <ul>
          <li>
            <FontAwesomeIcon icon={faLaptopCode} />
            <div>
              <b>MS Office</b> - HH Computer Center
              <br />
              Word, PowerPoint, Excel, Inpage
            </div>
          </li>
          <li>
            <FontAwesomeIcon icon={faCode} />
            <div>
              <b>Web Development</b> - SMIT
              <br />
              HTML, CSS, JavaScript, React
            </div>
          </li>
        </ul>
      </div>

      {/* Tools & Tech */}
      <div className="about-section">
        <h1>Tools & Technologies</h1>
        <ul>
          <li>
            <FontAwesomeIcon icon={faDatabase} />
            MongoDB
          </li>
          <li>
            <FontAwesomeIcon icon={faTerminal} />
            Node.js & Express
          </li>
          <li>
            <FontAwesomeIcon icon={faToolbox} />
            Git & GitHub
          </li>
          <li>
            <FontAwesomeIcon icon={faPalette} />
            Bootstrap
          </li>
          <li>
            <FontAwesomeIcon icon={faFolderOpen} />
            Frontend (HTML, CSS, JavaScript, React)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
