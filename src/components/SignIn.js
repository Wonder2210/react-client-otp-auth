import React,{Fragment,useState} from 'react';
import {TextField} from '@material-ui/core';
import {Paper} from '@material-ui/core';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import {Button} from '@material-ui/core';
import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Phone';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';

const useStyles= makeStyles({
  paper: {
    width: '45%',
    margin: '10% 50%',
    transform: 'translateX(-50%)',
    minHeight:'100%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    '& > div.inputs':{
      padding:'0 0 35px 0',

      '& > .MuiGrid-container':{
        paddingTop:'15px'
      }

    },
    '& > .header':{
      paddingTop:'15px'
    },

  },
  button:{
    width:'80%',
    marginBottom:'15px'
  },
  grow:{
    flexGrow:1
  }
})

const SignIn = ({}) =>{
  const [email,setEmail] = useState({
    email:''
  });
  const [phone,setPhone] = useState({
    phone:''
  });

  const styles= useStyles();

  const onChangeEmail =(e)=>{
    setEmail({email:e.target.value});
  }
  const onChangePhone=(value, data, event)=>{
  this.setState({ rawPhone: value.replace(/[^0-9]+/g,'').slice(data.dialCode.length) })
}
  return  (
    <Paper className={styles.paper}>
      <Typography variant="h4" className="header">
        Sign Up
      </Typography>
      <div className="inputs">
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <Email/>
          </Grid>
          <Grid item className={styles.grow}>
            <div className="grow">
              <TextField
                id="input-with-icon-grid"
                label="Email addres"
                name="email"
                onChange={onChangeEmail}
                fullWidth={true}
              />
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <Phone />
            </Grid>
            <Grid item>
              <PhoneInput
              />
            </Grid>
          </Grid>

      </div>
      <Button variant="contained" size="large" className={styles.button} color="secondary" >
        Sign Up
      </Button>
    </Paper>
  );
}

export default SignIn;
