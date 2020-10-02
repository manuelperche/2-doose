import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../ui/Navbar';
import { AuthProvider } from '../auth/AuthProvider';
import Dashboard from '../dashboard/Dashboard';
import Loading from '../ui/Loading';
import PrivateRoute from '../auth/PrivateRoute';

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
            <Suspense fallback={<Loading/>}>
              <Route exact path="/loading" component={Loading} />
              <Route exact path="/" component={Landing} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Suspense>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
