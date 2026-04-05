import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Abhinav Painuli</span>{" "}
            from <span className="purple">Uttarakhand, India</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">AI/ML Engineer</span> at{" "}
            <span className="purple">NiyamR AI</span>.
            <br />I hold an B.Tech. in{" "}
            <span className="purple">Information Technology and Mathematical Innovation</span> from{" "}
            <span className="purple">Cluster Innovation Centre, University of Delhi</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Cooking food 👨‍🍳
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing guitar 🎸
            </li>
            <li className="about-activity">
              <ImPointRight /> Sleeping 💤
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to complete work at time so you can goof off later!"{" "}
          </p>
          <footer className="blockquote-footer">Abhinav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
