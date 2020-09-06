import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Jumbotron } from 'react-bootstrap';



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://prabjit.netlify.app/">
        Prabjit.com
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  // main: {
  //   marginTop: theme.spacing(8),
  //   marginBottom: theme.spacing(2),
  // },
  footer: {
    // padding: theme.spacing(3, 2),
    marginTop: 'auto',
    // backgroundColor:
    //   theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function Hero(props) {
  const classes = useStyles();

  return (
    <Jumbotron className="bg-transparent jumbotron-fluid p-0">
      <Container fluid={true}>
        <Row className="justify-content-center py-5">
          <Col sm={12} md={9} >
            {props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1>}
            {props.subTitle && <h5 className="display-4 font-weight-light">{props.subTitle}</h5>}
            {props.text && <h5 className="lead font-weight-light">{props.text}</h5>}
          </Col>
        </Row>
      </Container>

    </Jumbotron>
  );
}