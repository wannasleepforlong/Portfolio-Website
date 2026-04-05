import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgFileDocument } from "react-icons/cg";

function ResearchCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Body style={{ display: "flex", flexDirection: "column" }}>
        <Card.Title style={{ fontWeight: "bold", fontSize: "1.3rem", color: "#c770f0" }}>{props.title}</Card.Title>
        <div style={{ margin: "10px 0", color: "white", textAlign: "left" }}>
          {props.role && <div><strong>Role:</strong> {props.role}</div>}
          {props.conference && <div><strong>Conference:</strong> {props.conference}</div>}
        </div>
        <Card.Text style={{ textAlign: "justify", marginTop: "10px", flexGrow: 1, color: "white" }}>
          {props.description}
        </Card.Text>
        <div style={{ marginTop: "20px" }}>
          <Button variant="primary" href={props.link} target="_blank">
            <CgFileDocument /> &nbsp;
            Read Paper
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ResearchCard;
