import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import lostfoundSvg from "../../Assets/Projects/lostfound.svg";
import ScrollGallery from "../ScrollGallery";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Featured <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Showcasing full-stack applications with a focus on security, accessibility, and user experience.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={process.env.PUBLIC_URL + "/images/lost-and-found-software.webp"}
              fallbackImg={lostfoundSvg}
              imgAlt="Lost and Found Hub — custom project image"
              isBlog={false}
              title="Lost and Found Hub"
              description="Full-stack web application for reporting and tracking lost/found items. Features secure user authentication with bcrypt, role-based access control (RBAC), RESTful APIs, and MongoDB database. Implements WCAG accessibility standards and deployed on Render."
              techStack="Node.js, Express, MongoDB, React, JWT Auth"
              demoLink="https://lost-and-found-hub.onrender.com/users/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={process.env.PUBLIC_URL + "/images/portfolio-icon.jpg"}
              fallbackImg={editor}
              imgAlt="Personal Portfolio — custom project image"
              isBlog={false}
              title="Personal Portfolio"
              description="Modern, responsive portfolio website showcasing technical skills, projects, and professional experience. Built with React and Bootstrap, featuring smooth animations, dark theme design, and optimized performance. Deployed on Vercel."
              techStack="React, Bootstrap, React Icons, Vercel"
              demoLink="https://aef-sigma.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={process.env.PUBLIC_URL + "/images/phishing-detector.webp"}
              fallbackImg={editor}
              imgAlt="Phishing URL Detector — custom project image"
              isBlog={false}
              title="Phishing URL Detector"
              description="Real-time phishing detection system using multi-signal verification with 88.89% accuracy. Features 5-signal verification (URL Structure, DNS Resolution, SSL Certificate, Domain Age, Reputation), risk scoring on 0-100 scale, and intuitive web interface. Tested on 99 synthetic URLs covering 5 phishing tactics."
              techStack="Flask, Flask-CORS, Python 3.13, JavaScript"
              demoLink="https://cyp-1-iwms.vercel.app/"
            />
          </Col>
          
        </Row>
      </Container>
      <ScrollGallery />
    </Container>
  );
}

export default Projects;
