import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function SkillBars() {
  const skills = [
    { name: "Full-Stack Development", level: 95 },
    { name: "React & JavaScript", level: 90 },
    { name: "Python & Django", level: 88 },
    { name: "Cybersecurity", level: 85 },
    { name: "Cloud & DevOps", level: 82 },
    { name: "Database Design", level: 87 }
  ];

  return (
    <Container className="skill-bars-container">
      <h1 className="project-heading" style={{ paddingBottom: "30px" }}>
        Technical <strong className="purple">Proficiency</strong>
      </h1>
      <Row>
        <Col md={8} className="mx-auto">
          {skills.map((skill, index) => (
            <div className="skill-bar" key={index}>
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar-track">
                <div 
                  className="skill-bar-fill" 
                  style={{ 
                    width: `${skill.level}%`,
                    animationDelay: `${index * 0.2}s`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default SkillBars;
