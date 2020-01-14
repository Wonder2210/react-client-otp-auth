import React,{Fragment} from 'react';
import {Button} from '@material-ui/core';
import Autorenew from '@material-ui/icons/Autorenew';
import Check from '@material-ui/icons/Check';


const Footer = ({classes,handleSubmit,error,redirect,success}) => {

  if(error & !success){
    return (
      <Fragment>

        <Button variant="contained" size="large" onClick={handleSubmit} className={classes.button} endIcon={<Autorenew/>} color="secondary" >
          Oops try again
        </Button>

      </Fragment>
    );
    }
  else if (success) {
    return (
      <Fragment>

        <Button variant="contained" size="large" onClick={redirect} className={classes.button} endIcon={<Check/>} color="primary" >
          Succesful sign up
        </Button>

      </Fragment>
    );
}
  else if (!error & !success){
    return (
      <Fragment>

        <Button variant="contained" onClick={handleSubmit} size="large" className={classes.button}  color="primary" >
          Sign Up
        </Button>

      </Fragment>
    );
  }


}
export default Footer;
