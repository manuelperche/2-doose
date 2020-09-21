import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../ui/Navbar';
import { AuthProvider } from '../auth/AuthProvider';
import Dashboard from '../dashboard/dashboard';
import Loader from 'react-loader-spinner';

const Landing = lazy(() => import ('../ui/Landing'));
const Register = lazy(() => import ('../auth/Register'));
const Login = lazy(() => import ('../auth/Login'));

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="app">
          <Switch>
            <Suspense fallback={<Loader type="Oval" color="#00BFFF" height={20} width={20}/>}>
              <Route exact path="/" component={Landing} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/dashboard" component={Dashboard} />
            </Suspense>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
