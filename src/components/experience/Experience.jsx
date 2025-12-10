import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './experience.css';

const Experience = () => {
  return (
    <section id="skill">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container skill__container">
        <div className="skill__Full-Stack Developer">
          <h3>Full-Stack Developer</h3>
          <div className="skill__content">
          <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>HTML / CSS</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>Java</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>Bootstrap, Tailwind</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>React, Vite JS</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>MongoDB</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>SQL</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>Node.js, Express.js</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>Python</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>Git, Github</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>Postman, VS Code</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>Redux, Redux-toolkit, Context API</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience