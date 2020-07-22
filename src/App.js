import React from 'react';
import logo from './logo.svg';
import Home from "./pages/Home";
// import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Container, Grid } from '@material-ui/core';

import './App.css';

function App() {
  return (
    <>
      {/* <Router> */}
      {/* <Container fullwidth>
        <Grid container >
          <Grid item xs={12}> */}
            {/* <Route > */}
            <Home />
            {/* </Route> */}
          {/* </Grid>
        </Grid>
      </Container> */}
      {/* </Router> */}
    </>
  );
}

export default App;
