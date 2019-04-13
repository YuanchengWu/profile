import React from 'react';
import styled from 'styled-components/macro';

const SplashText = styled.h1`
  font-family: ChakraPetch-light;
  font-size: 48px;
  color: ${props => props.theme.fill6};
  text-shadow: 0 0 15px ${props => props.theme.fill5};
`;

export default function Splash() {
  return <SplashText>Hi, my name is John. I'm a web developer_</SplashText>;
}
