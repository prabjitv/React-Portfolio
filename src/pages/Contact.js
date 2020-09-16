import React from "react";
import { Header, Project, Footer } from "../components";
import { Grid, Icon, Link } from '@material-ui/core';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Contact() {
  return (
    <div className="App">
      <div className="contact">
        <div className="viewheight">
          <div>
            <Container fluid={true}>
              <Row
                className="projectsheading justify-content-center">
                <Col
                  className="projectsheadingtitle"
                >
                  <h1>Contact Me</h1>
                </Col>
              </Row>
              <Row
                className="projectsheading justify-content-center">
                <Col
                  className="projectsheadingtitle justify-content-center"
                >
                  <a href="https://www.linkedin.com/in/prabjit/">Linked In</a>
                </Col>
              </Row>
              <Row className="projectsheading justify-content-center">
              <Col
                  className="projectsheadingtitle justify-content-center"
                >
                  <a href="https://github.com/prabjitv">Github</a>
                </Col>
              </Row>
              <Row className="projectsheading justify-content-center">
              <Col
                  className="projectsheadingtitle justify-content-center"
                >
                </Col>
              </Row>
            </Container>

            {/* <Grid container
              spacing={1}
              justify="center"
            >
              <Grid item>
                <Icon
                >
                  <Link href="https://twitter.com/prabgnosis" >
                    <img src="svg0.svg" />
                  </Link>
                </Icon>
              </Grid>
              <Grid item>
                <Icon
                >
                  <Link href="https://www.instagram.com/99prablems/" >
                    <img src="svg1.svg" />
                  </Link>
                </Icon>
              </Grid>
              <Grid item>
                <Icon
                >
                  <Link href="https://github.com/prabjitv" >
                    <img src="svg3.svg" />
                  </Link>
                </Icon>
              </Grid>
              <Grid item>
                <Icon
                >
                  <Link href="https://www.linkedin.com/in/prabjit/" >
                    <img src="svg9.svg" />
                  </Link>
                </Icon>
              </Grid>
            </Grid> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
