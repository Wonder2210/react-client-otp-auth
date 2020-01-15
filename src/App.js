import React from 'react';
import StepsForm from './components/StepsForms';
import {SignIn} from './components/SignIn';
import {BrowserRouter as Router,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/login" exact component={StepsForm}/>
        <Route exact path="/" component={SignIn}/>
      </Router>
    </div>
  );
}

export default App;
