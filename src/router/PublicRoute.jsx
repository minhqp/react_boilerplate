import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ROUTE from '@src/constants/route';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const accessToken = useSelector((state) => state.auth.accessToken);

  return (
    <Route
      {...rest}
      render={(props) =>
        accessToken && restricted ? (
          <Redirect to={ROUTE.HOME} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
