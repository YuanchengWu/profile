import React, { useEffect } from 'react';
import styled from 'styled-components';

const InfoStyles = styled.div`
  margin: 4em 10%;
  font-family: 'Chakra Petch', sans-serif;
`;

const H1 = styled.h1`
  font-size: 48px;
  font-weight: normal;
  white-space: pre-wrap;
  color: ${props => props.theme.fill6};
  text-shadow: 0 0 5px ${props => props.theme.fill3},
    0 0 10px ${props => props.theme.fill4},
    0 0 15px ${props => props.theme.fill5};
`;

export default function Info({ setShowSplash }) {
  useEffect(() => {
    setShowSplash(false);
  }, []);

  return (
    <InfoStyles>
      <H1>Behind the logo</H1>
    </InfoStyles>
  );
}
