import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



const Footer = () => (
  <footer className="fixed-bottom">
    <Row className="text-center">
      <Col xs={12}>
        Coded by Jacob Schaefer&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/cuppajake"
        >
          GitHub
          {/* TODO: sign your name and put your GitHub username above */}
        </a>
      </Col>
    </Row>
  </footer>
);

export default Footer;