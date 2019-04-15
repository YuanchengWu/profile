import React from 'react';
import styled from 'styled-components';

// import Splash from './Splash';
import MenuItem from './MenuItem';

const Title = styled.h2`
  font-family: 'T.C.SYSTEM';
  font-size: 32px;
  font-weight: normal;
  color: ${props => props.theme.fill6};
  text-shadow: 0 0 5px ${props => props.theme.fill3},
    0 0 10px ${props => props.theme.fill4},
    0 0 15px ${props => props.theme.fill5};
  text-transform: uppercase;
  margin: 0;
`;

export default function MainMenu() {
  return (
    <div>
      {/* <Splash /> */}
      <Title>Main Menu</Title>
      <ul>
        <MenuItem name="About" />
        <MenuItem name="Skills" />
        <MenuItem name="Projects" />
        <MenuItem name="Experience" />
        <MenuItem name="Contact" />
      </ul>
    </div>
  );
}
