import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  const pdfUrl = process.env.PUBLIC_URL + "/AEFAaronResume2026-2027.pdf";

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Container>
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button
              variant="primary"
              href={pdfUrl}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>

          <Row style={{ justifyContent: "center", paddingTop: "50px" }}>
            <Col md={10} lg={8} style={{ paddingBottom: "50px" }}>
              <embed
                src={pdfUrl + "#toolbar=0&navpanes=0&scrollbar=0"}
                type="application/pdf"
                width="100%"
                height="1100px"
                style={{ border: "none", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}
              />
            </Col>
          </Row>

          <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
            <Col md={10} lg={8} className="resume-content">
              <h2 className="resume-title">Certifications</h2>
              <ul>
                <li>
                  <b>Cybrary — Defensive Security Operations</b> (Issued Dec 2024) — Credential ID: CC-d1c80aca-8376-4c6f-928b-74e3062ebcdd — Skills: Cyber Defense
                </li>
                <li>
                  <b>Cybrary — Defensive Security and Cyber Risk</b> (Issued Dec 2024) — Credential ID: CC-43dfb99b-dd5c-4b4c-b4c1-c68e7f705fb9 — Skills: Defensive Security, Cyber Risk
                </li>
                <li>
                  <b>Simplilearn — Machine Learning Using Python</b> (Issued Nov 2024) — Credential ID: 19301
                </li>
                <li>
                  <b>Dataquest.io — Python Programming for Data Science</b> (Issued Jun 2024) — Credential ID: WJFW7373IB6E8XL8OELA — Skills: Python
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
