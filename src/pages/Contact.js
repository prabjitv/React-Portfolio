import React from "react";
import { Header, Project, Footer } from "../components";
import { Grid, Icon, Link } from '@material-ui/core';

function Contact() {
  return (
    <div className="App">
      <div className="contact">
        <div className="viewheight">
          <div>
            <Grid container
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
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
