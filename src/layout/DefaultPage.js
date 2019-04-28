import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { injectIntl } from 'react-intl';

import Header from './Header';

import About from '../routes/about/About';
import Skills from '../routes/skills/Skills';
import NoMatch from '../routes/404/NoMatch';
import Navbar from '../components/Navbar';

function DefaultPage({ setShowSplash, setDescription, intl }) {
  useEffect(() => {
    setShowSplash(false);
    setDescription(intl.formatMessage({ id: 'description.default' }));
  }, []);
  return (
    // TODO: put scroll fading here
    <>
      <Header>
        <Navbar />
      </Header>
      <Switch>
        <Route
          path="/about"
          render={props => <About {...props} setDescription={setDescription} />}
        />
        <Route
          path="/skills"
          render={props => (
            <Skills {...props} setDescription={setDescription} />
          )}
        />
        <Route
          render={props => (
            <NoMatch {...props} setDescription={setDescription} />
          )}
        />
      </Switch>
    </>
  );
}

export default injectIntl(DefaultPage);
