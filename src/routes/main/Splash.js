import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { injectIntl } from 'react-intl';

import Icon from '../../components/Icon';
import SplashText from './SplashText';

const SplashStyle = styled.div`
  height: 100vh;
  justify-content: center;
  align-items: center;
  align-content: center;
  display: flex;
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

  if (!startTyping) {
    setTimeout(() => setStartTyping(true), splashDuration * 1000);
    setTimeout(() => setShowSplash(false), (fadeDelay + splashSustain) * 1000);
  }

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
