import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="portfolio">
      <header>
        <h1>Kishore Kuraganti</h1>
        <p>Web Developer | Data Science Enthusiast</p>
      </header>

      <section className="about-me">
        <h2>About Me</h2>
        <br></br>
        <br></br>
        <section id="id1">
          Hi! I'm Kishore Kuraganti, a intrested web developer and Data Science
          enthusiast. I am from Rajahmundry, Andhra Pradesh. I'm currently
          pursuing B.Tech in Computer Science. I completed my Intermediate
          Narayana Junior College,RJY. I am Enthusiastic Computer Science
          student with a passion for learning and applying emerging
          technologies.Strong problem-solving skills and a collaborative
          mindset, eager to contribute to innovative software solutions.
        </section>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <br></br>
        <br></br>
        <ul>
          <li>Java</li>
          <li>React</li>
          <li>Python</li>
          <li>R programming</li>
          <li>HTML & CSS</li>
          <li>DSA</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <br></br>
        <br></br>
        <ul>
          <li>Solar pannel Sun Tracker</li>
          <li>Driver Drowsiness Detection System</li>
          <li>Google play store data Analysis</li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <br></br>
        <br></br>
        <p>
          Email:{" "}
          <a href="mailto:krishnakishore9347@gmail.com">
            krishnakishore9347@gmail.com
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/kishore-kuraganti-669b70188">
            LinkedIn
          </a>
        </p>
        <p>
          GitHub: <a href="https://github.com/kishorekuraganti">Github</a>
        </p>
      </section>
    </div>
  );
}
