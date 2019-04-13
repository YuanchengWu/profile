import React from 'react';
import styled from 'styled-components';

// import Splash from './Splash';

const Title = styled.h2`
  font-family: tcsystem;
  font-size: 48px;
  color: ${props => props.theme.fill6};
  text-shadow: 0 0 15px ${props => props.theme.fill5};
`;

export default function MainMenu() {
  return (
    <div>
      {/* <Splash /> */}
      <Title>Main Menu</Title>
      <ul>
        <li>About</li>
      </ul>
    </div>
  );
}
