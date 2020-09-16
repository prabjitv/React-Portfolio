import React from "react";
import { Carousel, Project, Footer } from "../components";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function About() {
  return (
    <div className="App">
      <div className="about">
        <div className="viewheight">
          <Container fluid={true}>
            <Row
              className="projectsheading justify-content-center">
              <Col
                className="projectsheadingtitle"
              >
                <h1>Work in Progress</h1>
              </Col>
            </Row>
            <Row className="projectsheading justify-content-center">
              <Col className="justify-content-center">
                <img src="/postboot.png" />
              </Col>
            </Row>
            <Row
              className="projectsheading justify-content-center">
              <Col
                className="projectsheadingtitle"
              >
                <h1>Past work</h1>
              </Col>
            </Row>
            <Row className="projectsheading">
              <Col>
                <Carousel />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default About;
