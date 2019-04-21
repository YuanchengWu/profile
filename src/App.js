import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { IntlProvider, addLocaleData } from 'react-intl';

import { GlobalStyle, themes } from './GlobalStyle';

import MainMenu from './main/MainMenu';
import About from './about/About';
import NoMatch from './404/NoMatch';
import { Background } from './components/Background';
import LocaleSlider from './components/LocaleSlider';

import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import messagesEN from './translations/en.json';
import messagesZH from './translations/zh.json';

addLocaleData([...en, ...zh]);
const messages = {
  en: messagesEN,
  zh: messagesZH
};

function App() {
  const [language, setLanguage] = useState('en');

  function onChangeLanguage(lang) {
    console.log('changing to', lang);
    setLanguage(lang);
  }

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
            <Switch>
              <Route exact path="/" component={MainMenu} />
              <Route path="/about" component={About} />
              <Route component={NoMatch} />
            </Switch>
            {/* https://medium.com/styled-components/styled-components-getting-started-c9818acbcbbd */}
            {/* <div>theme switch</div> */}
            <LocaleSlider changeLanguage={onChangeLanguage} />
          </Background>
        </>
      </IntlProvider>
    </ThemeProvider>
  );
}

export default App;
