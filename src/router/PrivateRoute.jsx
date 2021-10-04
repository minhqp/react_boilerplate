import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ROUTE from '@src/constants/route';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const accessToken = useSelector((state) => state.auth.accessToken);

  return (
    <Route
      {...rest}
      render={(props) =>
        accessToken ? <Component {...props} /> : <Redirect to={ROUTE.LOGIN} />
      }
    />
  );
};

export default PrivateRoute;
