import "./portfolio.css";

import IMG1 from "../../assets/WanderLust Online Marketplace.png";
import IMG2 from "../../assets/Weather.png";
import IMG3 from "../../assets/apnaGPT.png";
import IMG4 from "../../assets/a.jpeg";
import IMG5 from "../../assets/Sigmon.png";
import IMG6 from "../../assets/My Video Call App.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Zerodha Clone – Trading Platform",
      img: IMG4,
      description:
        "A responsive Zerodha-inspired trading platform clone built using JavaScript, SCSS, Less, CSS, and HTML. It replicates the UI/UX of Zerodha’s interface with interactive charts, smooth layouts, and a modern dashboard for a real trading-like experience.",
      technologies: "MongoDB | Express | React.js | Node.js",
      link: "https://github.com/manish-kumar0/Zerodha",
      github: "https://github.com/manish-kumar0/Zerodha",
    },
    {
      id: 2,
      title: "WanderLust - Travel Listing App ",
      img: IMG1,
      description:
        "WanderLust is a modern travel listing app where users can browse destinations, explore unique stays, compare prices, and book accommodations with ease. It connects travelers with verified hosts and provides a smooth, intuitive booking experience.",
      technologies: "Node.js | Express | MongoDB",
      link: "https://wanderlust-ad54.onrender.com",
      github: "https://github.com/manish-kumar0/WanderLust",
    },
    {
      id: 3,
      title: "Weather App",
      img: IMG2,
      description: "A simple and responsive weather app that provides real-time temperature, humidity, wind speed, and updated conditions through a clean UI, smooth layout, and accurate live data integration.",
      technologies: "React.js",
      link: "https://weather-20jz.onrender.com/",
      github: "https://github.com/manish-kumar0/Weather-App",
    },
    {
      id: 4,
      title: "apnaGPT",
      img: IMG3,
      description:
        "ApnaGPT is a simple ChatGPT-like AI chat application built using the MERN stack. It sends user prompts to an AI API and returns smart, conversational responses in real time through a clean and minimal chat interface.",
      technologies: "MongoDB | Express | React.js | Node.js",
      link: "https://apnagpt.onrender.com",
      github: "https://github.com/manish-kumar0/apnaGPT",
    },
    {
      id: 5,
      title: "My Video Call App",
      img: IMG6,
      description:
        "A MERN stack video calling app that uses WebRTC and Socket.io to enable real-time video, audio, and room-based meetings through a simple and responsive interface.",
      technologies: "MongoDB | Express | React.js | Node.js",
      link: "https://zoom-video-call-1e45.onrender.com",
      github: "https://github.com/manish-kumar0/zoom-video-call",
    },
    {
      id: 6,
      title: "Simon - Game",
      img: IMG5,
      description:
        "A simple Simon memory game built using HTML, CSS, and JavaScript, where players repeat the growing sequence of colors and sounds to test their memory skills.",
      technologies: "HTML | CSS | JavaScript",
      link: "https://github.com/manish-kumar0/Simon-Game",
      github: "https://github.com/manish-kumar0/Simon-Game",
    },
  ];

  return (
    <section id="projects">
      <h5>My Work</h5>
      <h2>Projects</h2>

      <div className="container projects__container">
        {soloProjects.map((pro) => (
          <article className="projects__item" key={pro.id}>
            <div className="projects__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="projects__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="projects__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
