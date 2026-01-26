import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { Presets } from "react-component-transition";

function ProjectCards(props) {
  return (
    <Presets.TransitionFade duration={600}>
      <Card className="project-card-view">
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt={props.imgAlt || "project image"}
          onError={(e) => {
            if (props.fallbackImg && e.currentTarget.src !== props.fallbackImg) {
              e.currentTarget.src = props.fallbackImg;
            }
          }}
        />
        <Card.Body style={{ position: "relative", zIndex: 2 }}>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          {props.techStack && (
            <div style={{ marginBottom: "10px", fontSize: "0.85em" }}>
              <span className="purple" style={{ fontWeight: "600" }}>Tech: </span>
              <span style={{ color: "#a588c0" }}>{props.techStack}</span>
            </div>
          )}
          <div>
            {!props.isBlog && props.demoLink && (
              <Presets.TransitionScale duration={300}>
                <Button
                  variant="primary"
                  onClick={() => window.open(props.demoLink, "_blank")}
                  style={{ position: "relative", zIndex: 3, cursor: "pointer" }}
                >
                  <CgWebsite /> &nbsp;
                  {"Demo"}
                </Button>
              </Presets.TransitionScale>
            )}
          </div>
        </Card.Body>
      </Card>
    </Presets.TransitionFade>
  );
}
export default ProjectCards;
