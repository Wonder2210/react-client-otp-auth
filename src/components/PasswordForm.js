import React, { useState } from 'react';
import {TextField} from '@material-ui/core';
import ButtonsContainer from './ButtonsContainer';
import PropTypes from 'prop-types';

import http from '../http';

const PasswordForm =({next,back,current,email})=>{

  const [value,setValue]=useState('');
  const [request,setRequest] = useState({
    error:false,
    loading:false
  });
  const failMessage = "fail to verify code";
  const handleCloseSnackBar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setRequest({error:false,loading:false});

  };
  const submit=async ()=>{
    setRequest({error:false,loading:true});
    try {
    const {data} = await http.post('/login',{
      email:email.email,
      token:value

    });
    localStorage.setItem('token',data.token);
    next();


    } catch (e) {
      setRequest(lastState=>({
        error:true,
        loading:true
      }))

    }


  }
  const handleChange=(e)=>{
   setValue(e.target.value);
  }
  const {loading,error:errorRequest} = request;
  const props ={
    back,
    current,
    submit,
    loading
    ,errorRequest,
    handleCloseSnackBar,
    message:failMessage
  }
    return (
    <form  onSubmit={console.log}>
      <TextField
        name="code"
        label="code"
        helperText={"SMS code here"}
        onChange={handleChange}
      />

      <ButtonsContainer {...props}  />
    </form>
    );
}

PasswordForm.propTypes={
  next:PropTypes.func,
  back:PropTypes.func,
  current:PropTypes.number,
  email:PropTypes.string,
}

export default PasswordForm;
