import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

import Layout from '@src/containers/Layout';
import ROUTE from '@src/constants/route';
import { getCookie } from '@src/utils/cookie';

import appRoutes from './appRoutes';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const PrivateApp = () => {
  const privateRoutes = appRoutes.filter((route) => route.isPrivate);

  return (
    <Layout>
      <Switch>
        {privateRoutes.map((privateRoute) => (
          <PrivateRoute
            path={privateRoute.path}
            component={privateRoute.component}
            exact
            key={privateRoute.path}
          />
        ))}
        <Redirect to={ROUTE.HOME} />
      </Switch>
    </Layout>
  );
};

const AppRouter = () => {
  const [isFirstTime, setIsFirstTime] = useState(true);

  const { accessToken, verifying } = useSelector((state) => state.auth);

  if (!nprogress.isStarted()) nprogress.start();

  useEffect(() => {
    nprogress.done();
  });

  useEffect(() => {
    if (!accessToken) {
      const accessTokenFromCookie = getCookie('accessToken');
      if (accessTokenFromCookie) {
        // TODO dispatch action verify token
      }
    }

    setIsFirstTime(false);
  }, []);

  if (isFirstTime || verifying) {
    return 'loading';
  }

  const publicRoutes = appRoutes.filter((route) => !route.isPrivate);

  return (
    <BrowserRouter>
      <Switch>
        {publicRoutes.map((publicRoute) => (
          <PublicRoute
            exact
            path={publicRoute.path}
            component={publicRoute.component}
            restricted={publicRoute.restricted}
            key={publicRoute.path}
          />
        ))}

        <PrivateRoute component={PrivateApp} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
