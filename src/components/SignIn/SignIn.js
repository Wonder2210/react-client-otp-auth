import React,{Component} from 'react';
import {Paper} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import http from '../../http';
import Inputs from './Inputs';
import Footer from './footer';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import 'react-phone-input-2/lib/material.css';
import {useStyles} from './_styles';

class SignIn extends Component {
  constructor(props){
    super(props);
    this.state={
      phone:'',
      email:'',
      countryCode:'us',
      role:'',
      error:false,
      success:false
    }
  }
  onChangeInput =(e)=>{
    this.setState({[e.target.name]:e.target.value});
  }

  onChangePhone=(value,data,event)=>{
    if(data.countryCode !== this.state.countryCode){
      const {countryCode}= data;
      this.setState({
        phone: value.replace(/[^0-9]+/g,'').slice(data.dialCode.length) ,
       countryCode:countryCode.toUpperCase()
     })
    }
    else{
      this.setState({ phone: value.replace(/[^0-9]+/g,'').slice(data.dialCode.length) })

    }
}

  handleSubmit=()=>{
    this.setState(e=>({error:false}));

    const {phone,email,countryCode,role}=this.state;
    if(!phone || !email || !role){
      this.setState({error:true});
      return;
    }
    http.post('/signup',{phone,email,countryCode,role})
    .then(res=>{
      this.setState({success:true});

    })
    .catch(err=>{
      this.setState({error:true,success:false});

    })
  }
  redirect=()=>{
    this.props.history.push('/login');
  }
  render(){
      const {classes:styles}=this.props;
      return  (
        <Paper className={styles.paper}>
          <Typography variant="h4" className="header">
            Sign Up
          </Typography>
          <div className="inputs">
            <Inputs onChangeInput={this.onChangeInput}
              onChangePhone={this.onChangePhone}
              phone={this.state.phone}
              classes={this.props.classes}
            />
            <Typography className="link" variant='body1'>
              <Link component={RouterLink} to={'/login'}>
                Log in
              </Link>
            </Typography>
          </div>
          <Footer
            error={this.state.error}
            success={this.state.success}
            handleSubmit={this.handleSubmit}
            classes={this.props.classes}
            redirect={this.redirect}
          />

        </Paper>
      );
    }
}

export default withStyles(useStyles)(SignIn);
