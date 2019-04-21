import React, { useState } from 'react';
import styled from 'styled-components';

const SplashTextWrapper = styled.h1`
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

// let counter = 0;

export default function SplashText({ text, cursor, startTyping, typingDelay }) {
  const [typedText, setTypedText] = useState('');

  // typing effect
  if (startTyping && typedText.length <= text.length) {
    // compensate for cursor character
    const char =
      typedText.length === 0
        ? text.charAt(typedText.length)
        : text.charAt(typedText.length - 1);
    setTimeout(
      () =>
        setTypedText(typedText.slice(0, typedText.length - 1) + char + cursor),
      typingDelay
    );
  }

  return <SplashTextWrapper>{typedText}</SplashTextWrapper>;
}
