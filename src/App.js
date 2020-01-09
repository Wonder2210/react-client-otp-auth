import React from 'react'; 
import StepsForm from './components/StepsForms';
import SignIn from './components/SignIn';
import {Switch,BrowserRouter as Router,Route} from 'react-router-dom';

function App() {
  const arr=["leer libros","comer"];
  return (
    <div className="App">
      <Router>
        <Route path="/user" exact component={StepsForm}/>
        <Route path="/" component={SignIn}/>
      </Router>
    </div>
  );
}

export default App;
