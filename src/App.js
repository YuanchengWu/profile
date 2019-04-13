import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { dark } from './themes';
import { GlobalStyles } from './GlobalStyles';

import MainMenu from './main/MainMenu';
import About from './about/About';
import NoMatch from './404/NoMatch';

function App() {
  return (
    // TODO: make theme switcher and use dynamic themes
    <ThemeProvider theme={dark.blue}>
      <>
        <GlobalStyles />
        <Switch>
          <Route exact path="/" component={MainMenu} />
          <Route path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch>
        <div>theme switch</div>
      </>
    </ThemeProvider>
  );
}

export default App;
