import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";

const myImg = process.env.PUBLIC_URL + "/images/portfolioimg.jpeg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Technology Management student and aspiring Software
              Developer based in Vaughan, Ontario. My focus spans
              <span className="purple"> Technology</span>,
              <span className="purple"> Software Development</span>, and
              <span className="purple"> Cybersecurity</span>.
              <br />
              <br />
              I build accessible, secure web apps with
              <b className="purple"> JavaScript</b>,
              <b className="purple"> TypeScript</b>,
              <b className="purple"> Node.js</b>,
              <b className="purple"> Express</b>, and
              <b className="purple"> MongoDB</b>, adding auth, role-based access,
              and WCAG/AODA compliance.
              <br />
              <br />
              On the security side: I work with Kali Linux labs (network
              spoofing, steganography, applied cryptography, password auditing,
              DDoS analysis/mitigation) and bake security practices into every
              project.
              <br />
              <br />
              I collaborate in agile sprints and value teamwork, accessibility,
              and security in everything I build.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
