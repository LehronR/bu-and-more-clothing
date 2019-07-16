import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './components/pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
      {/* <Homepage /> */}
    </div>
  );
}

export default App;
