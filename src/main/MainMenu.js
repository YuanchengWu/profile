import React, { useState } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import Splash from './Splash';
import MenuItem from './MenuItem';
import Description from '../components/Description';

const MainWrapper = styled.div`
  /* height: 100vh; */
`;

const Title = styled.h2`
  font-family: 'T.C.SYSTEM';
  font-size: 32px;
  font-weight: normal;
  color: ${props => props.theme.fill6};
  text-shadow: 0 0 5px ${props => props.theme.fill3},
    0 0 10px ${props => props.theme.fill4},
    0 0 15px ${props => props.theme.fill5};
  text-transform: uppercase;
  margin: 72px 0 0 72px;
`;

const MenuItemList = styled.ul`
  margin: 96px 0 0 120px;
  padding: 0;
`;

export default function MainMenu() {
  const [showSplash, setShowSplash] = useState(false);

  function handleSplashUnmount() {
    setShowSplash(false);
  }

  return (
    <MainWrapper>
      {/* {showSplash && <Splash unmount={handleSplashUnmount} />} */}
      {!showSplash && (
        <Title>
          <FormattedMessage
            id="main.title"
            defaultMessage="Main Menu"
            description="Main menu title text"
          />
        </Title>
      )}
      {!showSplash && (
        <MenuItemList>
          <MenuItem name="About" />
          <MenuItem name="Skills" />
          <MenuItem name="Projects" />
          <MenuItem name="Experience" />
          <MenuItem name="Contact" />
        </MenuItemList>
      )}
      {!showSplash && <Description />}
    </MainWrapper>
  );
}
