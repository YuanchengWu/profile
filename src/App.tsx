import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { IntlProvider } from 'react-intl'

import { GlobalStyle, themes } from './GlobalStyle'
import { useLocalStorage } from './hooks/useLocalStorage'

// TODO: index these
import { MainMenu } from './routes/main/MainMenu'
import { Info } from './routes/info/Info'
import { NoMatch } from './routes/404/NoMatch'
import { About } from './routes/about/About'
import { Contact } from './routes/contact/Contact'
import { Experience } from './routes/experience/Experience'
import { Projects } from './routes/projects/Projects'
import { Skills } from './routes/skills/Skills'
import PageContent from './layout/PageContent'
import { Footer } from './layout/Footer'
import { Background } from './layout/Background'
import { DefaultPage } from './layout/DefaultPage'
import { Language, LocaleSlider } from './components/LocaleSlider'
import { Description } from './components/Description'

import messagesEN from './i18n/en.json'
import messagesKO from './i18n/ko.json'
import messagesZH from './i18n/zh.json'
import { usePageTracking } from './hooks/usePageTracking'
import { DescriptionProvider } from './contexts/DescriptionContext'

type IntlMessageKeys = keyof typeof messagesEN

const messages: Record<Language, Record<IntlMessageKeys, string>> = {
  en: messagesEN,
  ko: messagesKO,
  zh: messagesZH,
}

function App() {
  // TODO: add theme to local storage
  const [locale, setLocale] = useLocalStorage('locale', 'en')
  const [showSplash, setShowSplash] = useState(true)

  const location = useLocation()
  usePageTracking()

  return (
    // TODO: make theme switcher and use dynamic themes
    <ThemeProvider theme={themes.dark.blue}>
      <IntlProvider key={locale} locale={locale} messages={messages[locale]}>
        <>
          <GlobalStyle />
          <DescriptionProvider>
            <Background>
              <PageContent showSplash={showSplash}>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <MainMenu
                        showSplash={showSplash}
                        setShowSplash={setShowSplash}
                      />
                    }
                  />
                  <Route
                    path="/info"
                    element={<Info setShowSplash={setShowSplash} />}
                  />
                  <Route
                    element={<DefaultPage setShowSplash={setShowSplash} />}
                  >
                    <Route path="/about" element={<About />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route element={<NoMatch />} />
                  </Route>
                </Routes>
              </PageContent>
              {!showSplash && (
                <Footer>
                  {/* https://medium.com/styled-components/styled-components-getting-started-c9818acbcbbd */}
                  {/* <div>theme switch</div> */}
                  {location.pathname !== '/info' && <Description />}
                  <LocaleSlider changeLanguage={setLocale} />
                </Footer>
              )}
            </Background>
          </DescriptionProvider>
        </>
      </IntlProvider>
    </ThemeProvider>
  )
}

export default App
