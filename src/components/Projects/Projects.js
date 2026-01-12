import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import lostfoundSvg from "../../Assets/Projects/lostfound.svg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Featured <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          A selection of projects aligned with my focus areas.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={process.env.PUBLIC_URL + "/images/lost-and-found-software.webp"}
              fallbackImg={lostfoundSvg}
              imgAlt="Lost and Found Hub — custom project image"
              isBlog={false}
              title="Lost and Found Hub"
              description="Full-stack app with Node.js, Express, MongoDB. Secure user authentication with bcrypt, role-based access control, RESTful APIs. Deployed on Render."
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
              description="Responsive portfolio site showcasing skills, experience, and projects. Built with React, deployed on Render."
              demoLink="https://port-web-personal.onrender.com"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
