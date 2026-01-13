import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I'm <span className="purple">Aaron Fernandez</span>, a 
            <span className="purple"> full-stack developer</span> and 
            <span className="purple"> cybersecurity enthusiast</span> based in
            <span className="purple"> Vaughan, Ontario</span>.
            <br />
            I specialize in building <span className="purple">secure, accessible web applications</span> using
            <span className="purple"> JavaScript, Node.js, and MongoDB</span>.
            <br />
            <br />
            <span className="purple">Education</span>: Bachelor of Information
            Technology, Technology Management  Ontario Tech University
            (Expected Apr 2028)
            <br />
            <br />
          </p>

          <p style={{ textAlign: "justify" }}>
            <strong>Technical Focus:</strong>
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Full-stack web development with modern frameworks and best practices
            </li>
            <li className="about-activity">
              <ImPointRight /> Application security, WCAG accessibility compliance, and secure authentication
            </li>
            <li className="about-activity">
              <ImPointRight /> Working with Kali Linux for network security and vulnerability assessment
            </li>
            <li className="about-activity">
              <ImPointRight /> Agile development and collaborative teamwork in production environments
            </li>
          </ul>

          <p style={{ textAlign: "justify", marginTop: "20px" }}>
            <strong>Interests Outside Coding:</strong>
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Anime & storytelling  exploring complex narratives and world-building
            </li>
            <li className="about-activity">
              <ImPointRight /> Fitness & discipline  pushing limits and maintaining mental resilience
            </li>
            <li className="about-activity">
              <ImPointRight /> Travel & exploration  discovering new cultures and perspectives
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", marginTop: "20px" }}>
            "Build accessible, secure solutions that help people."
          </p>
          <footer className="blockquote-footer">Aaron</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
