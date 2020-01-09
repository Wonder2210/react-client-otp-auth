import React, {useState, Fragment} from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import {Paper} from '@material-ui/core';
import PasswordForm from './PasswordForm';
import SuccessLogin from './SuccessLogin';
import EmailForm from './EmailForm';
import {makeStyles} from '@material-ui/core/styles';

const getSteps = () => ["Email", "Password", "Login info"];

const forms = (props, index) => {
  const forms = [  (<EmailForm {...props}/>),( <PasswordForm {...props}/>), (<SuccessLogin {...props}/>)];

  return forms[index];
}

const useStyles = makeStyles({
  paper: {
    width: '45%',
    margin: '10% 50%',
    transform: 'translateX(-50%)',
    minHeight:'100%'
  },
  content: {
    width: '100%',

    '& > form': {
      width: '100%',
      minHeight:'100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',

      '&  .MuiFormControl-root': {
        marginBottom: '15px',

      }

    }
  }
})
const StepsForms = ({}) => {

  const styles = useStyles();

  const [activeStep, setActiveStep] = useState(2);
  const [email, setEmail] = useState(0);
  const steps = getSteps();
  const nextStep = (email='') => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);

    if(email) setEmail(email);
  }

  const backStep = () => {
    setActiveStep(prevActiveStep => (
      prevActiveStep >= 1
      ? prevActiveStep - 1
      : prevActiveStep));
  }

  return (<Paper className={styles.paper}>
    <Stepper activeStep={activeStep} className={styles.stepper}>
      {
        steps.map((label, index) => {
          return (<Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>);
        })
      }
    </Stepper>
    <div className={styles.content}>
      {
        forms({
          next: nextStep,
          current: activeStep,
          back: backStep,
          email:email,
          setEmail:setEmail,
        }, activeStep)
      }
    </div>
  </Paper>);
}

export default StepsForms;
