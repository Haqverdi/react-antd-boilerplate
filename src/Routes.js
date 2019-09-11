import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = React.lazy(() => import('./containers/Home'));

// authorized routes
function Routes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />
      </Switch>
    </Suspense>
  );
}

export default Routes;
