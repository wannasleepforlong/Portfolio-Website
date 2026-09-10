import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "var(--text-color)",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="wannasleepforlong"
        blockSize={30}
        blockMargin={10}
        color="#0e8072"
        fontSize={20}
      />
    </Row>
  );
}

export default Github;
