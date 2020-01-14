import React, {useState} from 'react';
import {TextField} from '@material-ui/core';
import ButtonsContainer from './ButtonsContainer';
import http from '../http';
import PropTypes from 'prop-types';

const EmailForm = ({next, back, current, setEmail}) => {
  const errorMessage="fail to send sms";
  const [value, setvalue] = useState(0);
  const [error, setError] = useState(false);
  const [request, setRequest] = useState({error: false, loading: false,});
  const handleChange = (e) => {
    setvalue(e.target.value);
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value))) {
      setError(true);

    } else {
      setError(false);
    }
  }
  const handleCloseSnackBar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setRequest({error:false,loading:false});

  };
  const submit = async () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      setRequest({error: false, loading: true,});
      try {
        await http.post('/log_sms', {email: value});
        setEmail({email:value});
        next();

      } catch (e) {
        setRequest(lastState => ({error: true, loading: true,}));

      }
    } else {
      setError(true);
    }

  }
  const {loading, error: errorRequest} = request;
  let props = {
    back,
    current,
    submit,
    loading,
    errorRequest,
    handleCloseSnackBar,
    message: errorMessage
  }
  return (<form onSubmit={console.log}>
    <div>
      <TextField error={error} name="email" label="Email" onChange={handleChange} helperText={error
        ? "Incorrect email"
        : ''}/>
    </div>
    <ButtonsContainer {...props}/>
  </form>);
}
EmailForm.propTypes={
  next:PropTypes.func,
  back:PropTypes.func,
  current:PropTypes.number,
  setEmail:PropTypes.func,
}

export default EmailForm;
