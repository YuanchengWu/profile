import React from 'react';
import './App.css';

import MainMenu from './main/MainMenu';
import Splash from './splash/Splash';

function App() {
  return (
    <>
      <Splash />
      {/* this should be a route */}
      <MainMenu />
    </>
  );
}

export default App;
