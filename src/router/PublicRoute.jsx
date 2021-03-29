import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import routes from '../constants/route';

export default function PublicRoute({ component: Component, restricted, ...rest }) {
  const accessToken = useSelector((state) => state.auth.accessToken);

  return (
    <Route
      {...rest}
      render={(props) =>
        accessToken && restricted ? (
          <Redirect to={routes.HOME} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}
