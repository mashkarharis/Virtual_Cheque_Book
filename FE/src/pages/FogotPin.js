import React, { useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, Checkbox, Link, Grid, Box, Typography, makeStyles, Container, FormControlLabel } from '@material-ui/core';
import SessionService from '../Services/SessionService';
import { Redirect } from 'react-router-dom';
import API_Service from '../Services/API_Service';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
        2021, All Rights Reserved | Designed by University of Moratuwa
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(20),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function FogotPin(props) {


  const classes = useStyles();
  const islogged = SessionService.isAuthenticated();
  console.log(islogged);

  if (!islogged) {
    return (
      <Redirect
        to={{ pathname: '/', state: { from: props.location } }}
      />
    );
  }

  var getpin = () => {

    API_Service.getpin(JSON.parse(SessionService.getdata()).customer_id + "", (result) => {
        console.log(result);
        props.history.push('/');      
    });
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>

        </Avatar>
        <Typography component="h1" variant="h5">
          Fogot Pin
        </Typography>
        
        
        <Grid item xs={12}>
          <p>After Click Fogot Pin You will receive notification on new pin. Check Notification Bar</p>
        </Grid>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={getpin}
        >
          Get New Pin
          </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
              </Link>
          </Grid>
          <Grid item>
            <Link href="./signup" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}