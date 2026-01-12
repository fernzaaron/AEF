import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Aaron Fernandez</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} AF</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://aef-sigma.vercel.app/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <CgWebsite />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:aaron.fernandez547@gmail.com"
                style={{ color: "white" }}
                rel="noopener noreferrer"
              >
                <AiOutlineMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="tel:+16478388803"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillPhone />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
