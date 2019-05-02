import React from 'react';
import styled from 'styled-components';

import Typer from '../../components/Typer';

const SplashTextWrapper = styled.h1`
  font-family: 'Chakra Petch', sans-serif;
  font-size: 48px;
  font-weight: normal;
  white-space: pre-wrap;
  width: 45vw;
  margin: 0;
  color: ${props => props.theme.fill6};
  text-shadow: 0 0 5px ${props => props.theme.fill3},
    0 0 10px ${props => props.theme.fill4},
    0 0 15px ${props => props.theme.fill5};
`;

export default function SplashText({ text, cursor, startTyping, typingSpeed }) {
  return (
    <SplashTextWrapper>
      {startTyping && (
        <Typer fullText={text} typingSpeed={typingSpeed} cursor={cursor} />
      )}
    </SplashTextWrapper>
  );
}
