import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { Grid, Icon, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  space: {
    margin: theme.spacing(1),
    borderRadius: 50,
  },
  radius: {
    borderRadius: 10,
  },
}));


function Header() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <div className="App">
      <header className="App-header">
        <p>Hi. I'm Prabjit Virdee
          <hr></hr>
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
        </p>
      </header>
    </div>
  );
}

export default Header;
