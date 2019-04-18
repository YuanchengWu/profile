import React from 'react';
import styled from 'styled-components/macro';

import Icon from '../components/Icon';

const SplashStyle = styled.div`
  height: 100vh;
  justify-content: center;
  align-items: center;
  align-content: center;
  display: flex;
  flex-wrap: wrap;
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
  }
`;

export default function Splash() {
  return (
    <SplashStyle>
      <Icon />
      <SplashText>Hi, my name is John. I’m a web developer_</SplashText>
    </SplashStyle>
  );
}
