import React, { useState } from 'react';
import styled from 'styled-components/macro';

import Icon from '../components/Icon';

const typingDelay = 50;
const splashDuration = 2;
const splashSustain = 1.5;
const text = 'Hi, my name is John. I’m a web developer';
const fadeDelay =
  splashDuration + (text.length * typingDelay) / 1000 + splashSustain;

const SplashStyle = styled.div`
  height: 100vh;
  justify-content: center;
  align-items: center;
  align-content: center;
  display: flex;
  flex-wrap: wrap;
  animation: fade 1s linear ${fadeDelay}s 1 normal forwards;

  @keyframes fade {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

const SplashText = styled.h1`
  font-family: 'Chakra Petch', sans-serif;
  font-size: 48px;
  font-weight: normal;
  width: 50%;
  min-width: 300px;
  margin: 0;
  color: ${props => props.theme.fill6};
  text-shadow: 0 0 5px ${props => props.theme.fill3},
    0 0 10px ${props => props.theme.fill4},
    0 0 15px ${props => props.theme.fill5};
`;

// TODO: add pause after period
let counter = 0;

/**
 * Icon and splash text components
 * @param {Object} props
 */
export default function Splash(props) {
  const [typedText, setTypedText] = useState('');
  const [startTyping, setStartTyping] = useState(false);

  if (!startTyping) {
    setTimeout(() => setStartTyping(true), splashDuration * 1000);
    setTimeout(() => dismiss(), (fadeDelay + splashSustain) * 1000);
  }

  // typing effect
  if (startTyping && counter < text.length) {
    const char = text.charAt(counter);
    setTimeout(
      () => setTypedText(typedText.slice(0, counter++) + char + '▌'),
      typingDelay
    );
  }

  /**
   * unmount splash components after animation
   */
  function dismiss() {
    props.unmount();
  }

  return (
    <SplashStyle>
      <Icon animate duration={splashDuration} />
      <SplashText>{typedText}</SplashText>
    </SplashStyle>
  );
}
