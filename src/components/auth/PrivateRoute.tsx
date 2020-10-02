import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import Loading from '../ui/Loading';

const PrivateRoute = ({ component: RouteComponent, ...rest }: any) => {
  const { authenticated, loadingAuthState } = useContext(AuthContext);
  if (loadingAuthState) {
    return <Loading />;
  }
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        authenticated ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { prevPath: rest.path } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
