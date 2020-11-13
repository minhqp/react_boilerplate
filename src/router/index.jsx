import React from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import routes from '../constants/route';

import appRoutes from './appRoutes';

export default () => (
  <BrowserRouter>
    <Switch>
      {appRoutes.map(
        ({
          path,
          exact = true,
          component: Component,
          isPrivate = false,
          ...rest
        }) => {
          if (!isPrivate) {
            return (
              <PublicRoute
                key={path}
                exact={exact}
                path={path}
                component={Component}
                {...rest}
              />
            );
          }
          return (
            <PrivateRoute
              key={path}
              exact={exact}
              path={path}
              component={Component}
              {...rest}
            />
          );
        },
      )}
      <Redirect to={routes.HOME} />
    </Switch>
  </BrowserRouter>
);
