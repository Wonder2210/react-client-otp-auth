import React, { useState } from 'react';
import {TextField} from '@material-ui/core';
import ButtonsHOC from './ButtonsHoc';

import http from '../http';

const PasswordForm =({next,back,current,email})=>{

  const [value,setValue]=useState(0);
  const [error,setError]=useState(false);
  const submit=()=>{
    return http.post('/login',{})
  }
  const handleChange=(e)=>{
   setValue(e.target.value);
  }
  const props ={
    next,back,current,submit
  }
    return (
    <form  onSubmit={console.log}>
      <TextField
        name="code"
        label="code"
        helperText={"SMS code here"}
        onChange={handleChange}
      />

      <ButtonsHOC {...props}  />
    </form>
    );


}

export default PasswordForm;
