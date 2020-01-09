import React, { useState } from 'react';
import {TextField} from '@material-ui/core';
import ButtonsHOC from './ButtonsHoc';
import http from '../http';

const EmailForm =({next,back,current,setEmail})=>{
  const [value, setvalue] = useState(0);
  const [error, setError] = useState(false);
  const handleChange=(e)=>{
    setvalue(e.target.value);
    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value))){
      setError(true);

    }else{
      setError(false);
    }
  }
  const submit=()=>{
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)){
      setEmail(value);
      return http.post('/log_sms',{
      email:value
    });
  }else{
    setError(true);
  }


  }

  let props ={
    next,back,current,submit
  }
    return (
      <form onSubmit={console.log}>
        <div>
          <TextField error={error}
            name="email"
            label="Email"
            onChange={handleChange}
            helperText={error ? "Incorrect email" : ''}
          />
        </div>
        <ButtonsHOC {...props}  />
      </form>
    );
  }



export default EmailForm;
