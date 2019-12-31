import React from 'react';
import HorizontalLinearStepper from './components/stepper';
import StepperReusable from './components/StepperReusable';
import StepsForm from './components/StepsForms';

function App() {
  const arr=["leer libros","comer"];
  return (
    <div className="App">
      <StepsForm/>
    </div>
  );
}

export default App;
