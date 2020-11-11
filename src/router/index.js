import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import PublicRoute from '../components/PublicRoute';
import PrivateRoute from '../components/PrivateRoute';

import Login from '../pages/Login';
import Home from '../pages/Home';

import routes from '../constants/route';

const appRoutes = [
  {
    path: routes.LOGIN,
    component: Login,
    exact: true,
    restricted: true,
    isPrivate: false,
  },
  {
    path: routes.HOME,
    component: Home,
    exact: true,
    restricted: false,
    isPrivate: true,
  },
];

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
                render={Component}
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
