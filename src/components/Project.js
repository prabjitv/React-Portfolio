import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import ButtonBase from '@material-ui/core/ButtonBase';

const images = [
  {
    url: '/static/images/grid-list/breakfast.jpg',
    title: 'Breakfast',
    width: '40%',
  },
  {
    url: '/static/images/grid-list/burgers.jpg',
    title: 'Burgers',
    width: '30%',
  },
  {
    url: '/static/images/grid-list/camera.jpg',
    title: 'Camera',
    width: '30%',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.6,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '1px solid #7143a5',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 10,
    bottom: 0,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    color: theme.palette.common.black,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
    borderRadius: 5,
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.white,
    opacity: 0.1,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 5,
    width: 5,
    backgroundColor: theme.palette.common.black,
    position: 'absolute',
    bottom: -1,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  space: {
    margin: theme.spacing(1),
    borderRadius: 50,
  },
  radius: {
    borderRadius: 10,
  },
  heroContent: {
    backgroundColor: 'transparent',
    padding: theme.spacing(8, 0, 6),
    textColor: theme.palette.common.white
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
    background: 'transparent',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },

}));


export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Welcome
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              View my work at a glance.<br></br>
              Get it touch via gmail at prabjitv<hr></hr>
            </Typography>
            <div className={classes.heroButtons}>
              {/* <Grid container
                spacing={2}
                justify="center"
                className={classes.space}

              >
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid> */}
            </div>
          </Container>
        </div>


        <Container className={classes.cardGrid} maxWidth="sm">
          {/* End hero unit */}
          <Grid container
            spacing={2}
            justify="center"
            direction="row"
          >
            <Grid item
              xs={10} md={12}
            >
              <Link href="http://www.swaddle.care/" >
                <div className={classes.root}>
                  <ButtonBase
                    focusRipple
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                      width: 600,
                      height: 300
                    }}
                  >
                    <span
                      className={classes.imageSrc}
                      style={{
                        backgroundImage: `url(${"Banner.png"})`,
                      }}
                    />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                      <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        className={classes.imageTitle}
                      >
                        SWADDLE SWAN
                        <span className={classes.imageMarked} />
                      </Typography>
                    </span>
                  </ButtonBase>
                </div>
              </Link>
            </Grid>

            <Grid item
              xs={10} md={12}
            >
              <Link href="https://lvarnum.github.io/Recipe-Search/" >
                <div className={classes.root}>
                  <ButtonBase
                    focusRipple
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                      width: 600,
                      height: 300
                    }}
                  >
                    <span
                      className={classes.imageSrc}
                      style={{
                        backgroundImage: `url(${"cocktails-n-meals-combo.png"})`,
                      }}
                    />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                      <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        className={classes.imageTitle}
                      >
                        COCKTAILS AND MEALS PAIRING
                        <span className={classes.imageMarked} />
                      </Typography>
                    </span>
                  </ButtonBase>
                </div>
              </Link>
            </Grid>

            <Grid item
              xs={10} md={12}
            >
              <Link href="https://prabjitv.github.io/Weather-Dashboard/" >
                <div className={classes.root}>
                  <ButtonBase
                    focusRipple
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                      width: 600,
                      height: 300
                    }}
                  >
                    <span
                      className={classes.imageSrc}
                      style={{
                        backgroundImage: `url(${"weather-icons-collection.png"})`,
                      }}
                    />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                      <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        className={classes.imageTitle}
                      >
                        WEATHER SLICE
                        <span className={classes.imageMarked} />
                      </Typography>
                    </span>
                  </ButtonBase>
                </div>
              </Link>
            </Grid>


            <Grid item
              xs={10} md={12}
            >
              <Link href="https://secure-river-88188.herokuapp.com/" >
                <div className={classes.root}>
                  <ButtonBase
                    focusRipple
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                      width: 600,
                      height: 300
                    }}
                  >
                    <span
                      className={classes.imageSrc}
                      style={{
                        backgroundImage: `url(${"CashMap.png"})`,
                      }}
                    />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                      <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        className={classes.imageTitle}
                      >
                        CASH MAP
                        <span className={classes.imageMarked} />
                      </Typography>
                    </span>
                  </ButtonBase>
                </div>
              </Link>
            </Grid>

            <Grid item
              xs={10} md={12}
            >
              <Link href="https://github.com/prabjitv/employee-directory" >
                <div className={classes.root}>
                  <ButtonBase
                    focusRipple
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                      width: 600,
                      height: 300
                    }}
                  >
                    <span
                      className={classes.imageSrc}
                      style={{
                        backgroundImage: `url(${"2020-07-22-02_25_57-prabjitv_employee-directory.png"})`,
                      }}
                    />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                      <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        className={classes.imageTitle}
                      >
                        SORTING EMPLOYEES
                        <span className={classes.imageMarked} />
                      </Typography>
                    </span>
                  </ButtonBase>
                </div>
              </Link>
            </Grid>

            <Grid item
              xs={10} md={12}
            >
              <Link href="https://prabjitv.github.io/Work-Day-Scheduler/" >
                <div className={classes.root}>
                  <ButtonBase
                    focusRipple
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                      width: 600,
                      height: 300
                    }}
                  >
                    <span
                      className={classes.imageSrc}
                      style={{
                        backgroundImage: `url(${"work-day-crop.png"})`,
                      }}
                    />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                      <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        className={classes.imageTitle}
                      >
                        WORK DAY SCHEDULER
                        <span className={classes.imageMarked} />
                      </Typography>
                    </span>
                  </ButtonBase>
                </div>
              </Link>
            </Grid>

          </Grid>
        </Container>
      </main>
    </React.Fragment >
  );
}