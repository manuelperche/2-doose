import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from '../register/Register';
import Landing from '../ui/Landing';
import Navbar from '../ui/Navbar';

const App: React.FC  = () => {
  return (
    <Router>
      <Navbar/>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/register" component={Register}/>
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
