import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainMenu from './main/MainMenu';
import NoMatch from './404/NoMatch';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={MainMenu} />
      <Route component={NoMatch} />
    </Switch>
  );
}

export default App;
