import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I’m <span className="purple">Aaron Fernandez</span>, based in
            <span className="purple"> Vaughan, Ontario</span>.
            <br />
            I’m focused on <span className="purple">Technology</span>,
            <span className="purple"> Software Development</span>, and
            <span className="purple"> Cybersecurity</span> — building accessible,
            secure web applications and automations.
            <br />
            <br />
            <span className="purple">Education</span>: Bachelor of Information
            Technology, Technology Management — Ontario Tech University
            (Expected Apr 2028)
            <br />
            <br />
          </p>

          <p style={{ textAlign: "justify" }}>
            Outside of coding, I love engaging in activities that keep me creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Immersing myself in anime — exploring narratives that blend philosophy, world-building, and character depth
            </li>
            <li className="about-activity">
              <ImPointRight /> Pushing my limits at the gym, building discipline and mental resilience through fitness
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling to new places, discovering cultures, cuisines, and perspectives that broaden my worldview
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build accessible, secure solutions that help people."
          </p>
          <footer className="blockquote-footer">Aaron</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
