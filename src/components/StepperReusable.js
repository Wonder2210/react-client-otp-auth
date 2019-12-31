import React,{useState} from 'react';
import PropTypes from 'prop-types';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';


const StepperReusable = ({steps,content}) => {
  const [activeStep,setActiveStep] = useState(0);
  const rSteps= steps;
  const rContent =  content;

  const handleNext=()=>{
    setActiveStep(prevStep=> prevStep + 1 );
  }
  const handleBack=()=>{
    if(activeStep>0){
      setActiveStep(prevStep=> prevStep - 1 );
    }
  }


  return (
    <div>
      <Stepper activeStep={activeStep}>
        {rSteps.map((label,index)=>{
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );

        })}
      </Stepper>
      <div>
        {rContent[activeStep]}
        <Button
          variant="contained"
          color="primary"
          onClick={handleBack}
          disabled={activeStep==0}
        > &laquo; Back </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleNext}
        > Next &raquo;</Button>
      </div>
    </div>
  )
};

Stepper.propTypes={
  steps:PropTypes.array.isRequired,
  content:PropTypes.array.isRequired
}

export default StepperReusable;
