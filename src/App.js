import React from 'react';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import './App.css';

import Footer from './components/Footer'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Prabjit",
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
      ],
      home: {
        title: 'Genuine Connenction',
        subTitle: 'Projects serving my community',
        text: 'See my work below'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Talk'
      }
    }
  }


  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Prabjit Virdee</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-toggle" className="border-0" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact render={() => <Home title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/" render={() => <About title={this.state.about.title} />} />
          <Route path="/" render={() => <Contact title={this.state.contact.title} />} />
          {/* <Home /> */}
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
