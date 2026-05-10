import React from "react";
import Card from "react-bootstrap/Card";

function ExperienceCard(props) {
  return (
    <Card className="project-card-view" style={{ textAlign: "left" }}>
      <Card.Body>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap" }}>
          <div>
            <Card.Title style={{ fontWeight: "bold", fontSize: "1.5rem", color: "var(--accent-strong)" }}>{props.company}</Card.Title>
            <Card.Subtitle style={{ paddingBottom: "10px", color: "var(--muted-text)" }}>{props.title} | {props.location}</Card.Subtitle>
          </div>
          <div style={{ color: "var(--muted-text)", textAlign: "right" }}>
            <span>{props.date}</span>
          </div>
        </div>
        
        <Card.Text style={{ textAlign: "justify", marginTop: "15px", color: "var(--text-color)" }}>
          <ul>
            {props.description.map((point, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>{point}</li>
            ))}
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
