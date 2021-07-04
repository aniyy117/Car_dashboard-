import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AccessibleNavigationAnnouncer from "./Components/AccessibleNavigationAnnouncer";
import Layout from "./Container/Layout";

function PublicRoute({ component: Component, ...rest }) {
  return <Route {...rest} render={(props) => <Component {...props} />} />;
}

function App(props) {
  return (
    <React.Fragment>
      <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
          <PublicRoute path="/" component={Layout} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
