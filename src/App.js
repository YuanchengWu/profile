import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, themes } from './GlobalStyle';

import MainMenu from './main/MainMenu';
import About from './about/About';
import NoMatch from './404/NoMatch';
import { Background } from './components/Background';

function App() {
  return (
    // TODO: make theme switcher and use dynamic themes

    <ThemeProvider theme={themes.dark.blue}>
      <>
        <GlobalStyle />
        <Background>
          <Switch>
            <Route exact path="/" component={MainMenu} />
            <Route path="/about" component={About} />
            <Route component={NoMatch} />
          </Switch>
          {/* https://medium.com/styled-components/styled-components-getting-started-c9818acbcbbd */}
          <div>theme switch</div>
        </Background>
      </>
    </ThemeProvider>
  );
}

export default App;
