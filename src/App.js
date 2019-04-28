import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { IntlProvider, addLocaleData } from 'react-intl';

import { GlobalStyle, themes } from './GlobalStyle';
import { cookieService } from './services/cookieService';

import MainMenu from './main/MainMenu';
import PageContent from './layout/PageContent';
import { Footer } from './layout/Footer';
import { Background } from './layout/Background';
import DefaultPage from './layout/DefaultPage';
import LocaleSlider from './components/LocaleSlider';
import Description from './components/Description';

import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import messagesEN from './i18n/en.json';
import messagesZH from './i18n/zh.json';

addLocaleData([...en, ...zh]);
const messages = {
  en: messagesEN,
  zh: messagesZH
};

function App() {
  // TODO: add session variables to store theme and locale
  const localeCookie = cookieService.getCookie('locale');
  const [language, setLanguage] = useState(localeCookie ? localeCookie : 'en');
  const [showSplash, setShowSplash] = useState(true);
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
            <PageContent showSplash={showSplash}>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <MainMenu
                      {...props}
                      showSplash={showSplash}
                      setShowSplash={setShowSplash}
                      setDescription={setDescription}
                    />
                  )}
                />
                <Route
                  render={props => (
                    <DefaultPage
                      {...props}
                      setShowSplash={setShowSplash}
                      setDescription={setDescription}
                    />
                  )}
                />
              </Switch>
            </PageContent>
            {!showSplash && (
              <Footer>
                {/* https://medium.com/styled-components/styled-components-getting-started-c9818acbcbbd */}
                {/* <div>theme switch</div> */}
                <Description description={description} />
                <LocaleSlider changeLanguage={setLanguage} />
              </Footer>
            )}
          </Background>
        </>
      </IntlProvider>
    </ThemeProvider>
  );
}

export default App;
