/* eslint-disable prettier/prettier */

import { Route, Switch } from 'react-router-dom';

const Dashboard = React.lazy(
  () =>
    import(
      /* webpackPrefetch: true */
      /* webpackChunkName: "dashboard" */ '../pages/Dashboard'
      ),
);
const Repo = React.lazy(
  () =>
    import(
      /* webpackPrefetch: true */
      /* webpackChunkName: "repo" */ '../pages/repo'
      ),
);
import React from 'react';


export const Routes: React.FC = () => {
  return (
    <React.Suspense fallback={'Loading...'}>
      <Switch>
        <Route component={Dashboard} path="/" exact />
        <Route component={Repo} path="/repositories/:repository+" />
      </Switch>
    </React.Suspense>
  );
};
