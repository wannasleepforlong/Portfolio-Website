import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiJupyter,
  SiKeras,
  SiOpencv,
  SiNumpy,
  SiAnaconda,
  SiOpenai,
  SiPostman,
} from "react-icons/si";
import { FaGitAlt, FaDocker, FaAws } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* ML / Python stack */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPython fontSize={"50px"} />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow fontSize={"50px"} />
        <div className="tech-icons-text">TensorFlow</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch fontSize={"50px"} />
        <div className="tech-icons-text">PyTorch</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn fontSize={"50px"} />
        <div className="tech-icons-text">Scikit-learn</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas fontSize={"50px"} />
        <div className="tech-icons-text">Pandas</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy fontSize={"50px"} />
        <div className="tech-icons-text">NumPy</div>
      </Col>

      {/* Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter fontSize={"50px"} />
        <div className="tech-icons-text">Jupyter</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKeras fontSize={"50px"} />
        <div className="tech-icons-text">Keras</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpencv fontSize={"50px"} />
        <div className="tech-icons-text">OpenCV</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda fontSize={"50px"} />
        <div className="tech-icons-text">Anaconda</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai fontSize={"50px"} />
        <div className="tech-icons-text">OpenAI</div>
      </Col>

      {/* Dev / Cloud Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <FaGitAlt fontSize={"50px"} />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDocker fontSize={"50px"} />
        <div className="tech-icons-text">Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws fontSize={"50px"} />
        <div className="tech-icons-text">AWS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman fontSize={"50px"} />
        <div className="tech-icons-text">Postman</div>
      </Col>
    </Row>
  );
}

export default Techstack;