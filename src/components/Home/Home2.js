import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m an AI/ML Engineer passionate about transforming ideas into
              reliable, scalable pipelines. Over time, I’ve explored several
              technologies and found my passion in building high-performance
              systems and intuitive user experiences.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple"> Python, C, Node.js, and Java </b>
              </i>
              — and comfortable working across both backend and frontend stacks.
              <br />
              <br />
              My work spans
              <b className="purple"> AI/ML pipelines, full-stack web development, and semantic systems </b>
              <i> with a focus on efficiency, performance, and innovation.</i>
              <br />
              <br />
          Whenever possible, I enjoy exploring and building projects using  
          <b className="purple"> trending technologies</b> and experimenting with 
          <i>
            <b className="purple"> emerging tools, frameworks, and AI/ML topics</b>
          </i> to stay at the forefront of this fast-evolving industry.            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;