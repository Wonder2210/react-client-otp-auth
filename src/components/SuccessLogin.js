import React, { Component } from 'react';
import {TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Check from '@material-ui/icons/Check';

const useStyles=makeStyles({
  root:{
    padding:'65px'
  }
});

const SuccessLogin =({email})=>{
  const styles=useStyles();
  return (
    <div>
      <Typography variant="h5" align="center" className={styles.root}>
        Success Full login ! <Check/>
      </Typography>
  </div>);
}

export default SuccessLogin;
