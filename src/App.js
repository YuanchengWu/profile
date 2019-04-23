import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { IntlProvider, addLocaleData } from 'react-intl';

import { GlobalStyle, themes } from './GlobalStyle';

import MainMenu from './main/MainMenu';
import About from './about/About';
import NoMatch from './404/NoMatch';
import { PageContent } from './layout/PageContent';
import { Footer } from './layout/Footer';
import { Background } from './layout/Background';
import LocaleSlider from './components/LocaleSlider';
import Description from './components/Description';

import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import messagesEN from './translations/en.json';
import messagesZH from './translations/zh.json';

addLocaleData([...en, ...zh]);
const messages = {
  en: messagesEN,
  zh: messagesZH
};

export const DescriptionContext = React.createContext('');

function App() {
  // TODO: add session variables to store theme and locale
  const [language, setLanguage] = useState('en');
  const [showSplash, setShowSplash] = useState(false);
  const [description, setDescription] = useState();

  return (
    // TODO: make theme switcher and use dynamic themes
    <ThemeProvider theme={themes.dark.blue}>
      <IntlProvider
        key={language}
        locale={language}
        messages={messages[language]}
      >
        <>
          <GlobalStyle />
          <Background>
            <DescriptionContext.Provider
              value={{ description, setDescription }}
            >
              <PageContent>
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={props => (
                      <MainMenu
                        {...props}
                        showSplash={showSplash}
                        setShowSplash={setShowSplash}
                      />
                    )}
                  />
                  <Route path="/about" component={About} />
                  <Route component={NoMatch} />
                </Switch>
              </PageContent>
              {!showSplash && (
                <Footer>
                  {/* https://medium.com/styled-components/styled-components-getting-started-c9818acbcbbd */}
                  {/* <div>theme switch</div> */}
                  <Description />
                  <LocaleSlider changeLanguage={setLanguage} />
                </Footer>
              )}
            </DescriptionContext.Provider>
          </Background>
        </>
      </IntlProvider>
    </ThemeProvider>
  );
}

export default App;
