import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { injectIntl } from 'react-intl';

import Icon from './Icon';
import SplashText from './SplashText';

const SplashStyle = styled.div`
  margin: 0 10%;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  animation: fade 1s linear ${props => props.fadeDelay}s 1 normal forwards;

  @keyframes fade {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

function Splash({ intl, setShowSplash }) {
  const [startTyping, setStartTyping] = useState(false);

  const typingSpeed = 50;
  const splashDuration = 2;
  const splashSustain = 1.5;
  const text = intl.formatMessage({ id: 'splash.text' });
  const cursor = intl.formatMessage({ id: 'text.cursor' });
  const fadeDelay =
    splashDuration + (text.length * typingSpeed) / 1000 + splashSustain;
  // TODO: add pause after period

  useEffect(() => {
    let typingTimer, splashTimer;
    if (!startTyping) {
      typingTimer = setTimeout(
        () => setStartTyping(true),
        splashDuration * 1000
      );
      splashTimer = setTimeout(
        () => setShowSplash(false),
        (fadeDelay + splashSustain) * 1000
      );
    }
    return function cleanUp() {
      clearTimeout(typingTimer);
      clearTimeout(splashTimer);
    };
  }, []);

  return (
    <SplashStyle fadeDelay={fadeDelay}>
      <Icon animate duration={splashDuration} />
      <SplashText
        text={text}
        cursor={cursor}
        startTyping={startTyping}
        typingSpeed={typingSpeed}
      />
    </SplashStyle>
  );
}

export default injectIntl(Splash);
