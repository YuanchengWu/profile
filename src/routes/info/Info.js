import React, { useEffect } from 'react';
import styled from 'styled-components';

const InfoStyles = styled.article`
  margin: 4em 10%;
  font-family: 'Chakra Petch', sans-serif;
  white-space: pre-wrap;
  color: ${props => props.theme.fill6};
  text-shadow: 0 0 5px ${props => props.theme.fill3},
    0 0 10px ${props => props.theme.fill4},
    0 0 15px ${props => props.theme.fill5};
`;

const H1 = styled.h1`
  font-family: 'T.C.SYSTEM';
  font-size: 48px;
  font-weight: normal;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const P = styled.p`
  font-size: 24px;
`;

export default function Info({ setShowSplash }) {
  useEffect(() => {
    setShowSplash(false);
  });

  return (
    <InfoStyles>
      <H1>Behind the logo</H1>
      {/* eslint-disable-next-line */}
      <P>I'm a horsy person. 🐴</P>
    </InfoStyles>
  );
}
