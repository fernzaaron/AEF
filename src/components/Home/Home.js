import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Techstack from "../About/Techstack";
import Github from "../About/Github";
import { AiOutlineMail, AiFillPhone, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import Button from "react-bootstrap/Button";
import ScrollGallery from "../ScrollGallery";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        {/* Animated Background Elements */}
        <div className="floating-orb floating-orb-1"></div>
        <div className="floating-orb floating-orb-2"></div>
        <div className="floating-orb floating-orb-3"></div>
        <div className="geometric-shape triangle"></div>
        <div className="geometric-shape square"></div>
        <div className="geometric-shape circle"></div>
        
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> AARON FERNANDEZ</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid home-logo-image"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Contact & Social</h1>
            <p>
              Connect with me on <span className="purple">GitHub</span>,
              <span className="purple"> LinkedIn</span>, or reach out via
              <span className="purple"> email</span> and <span className="purple">phone</span>.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/fernzaaron"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  title="GitHub Profile"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aaronfernandez547/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  title="LinkedIn Profile"
                >
                  <AiFillLinkedin />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://aef-sigma.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  title="Portfolio Website"
                >
                  <CgWebsite />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:aaron.fernandez547@gmail.com"
                  className="icon-colour  home-social-icons"
                  title="Send Email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="tel:+16478388803"
                  className="icon-colour  home-social-icons"
                  title="Call"
                >
                  <AiFillPhone />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <ScrollGallery />
    </section>
  );
}

export default Home;
