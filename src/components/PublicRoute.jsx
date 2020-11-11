import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../utils';

export default function PublicRoute({ Component, ...rest }) {
  return (
    <Route {...rest} render={props => (
      isLogin() && restricted ? <Redirect to="/" /> : <Component {...props} />
    )} />
  );
}
