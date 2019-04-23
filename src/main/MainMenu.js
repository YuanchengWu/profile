import React, { useState } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import Splash from './Splash';
import MenuItem from './MenuItem';

const MainWrapper = styled.div`
  /* padding-bottom: 2.5rem; */
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

export default function MainMenu({ showSplash, setShowSplash }) {
  const [didMouseOver, setDidMouseOver] = useState(false);

  return (
    <MainWrapper>
      {showSplash && <Splash setShowSplash={setShowSplash} />}
      {!showSplash && (
        <>
          <Title>
            <FormattedMessage
              id="main.title"
              defaultMessage="Main Menu"
              description="Main menu title text"
            />
          </Title>
          <MenuItemList>
            <MenuItem
              name="About"
              mouseState={{ didMouseOver, setDidMouseOver }}
            />
            <MenuItem
              name="Skills"
              mouseState={{ didMouseOver, setDidMouseOver }}
            />
            <MenuItem
              name="Projects"
              mouseState={{ didMouseOver, setDidMouseOver }}
            />
            <MenuItem
              name="Experience"
              mouseState={{ didMouseOver, setDidMouseOver }}
            />
            <MenuItem
              name="Contact"
              mouseState={{ didMouseOver, setDidMouseOver }}
            />
          </MenuItemList>
        </>
      )}
    </MainWrapper>
  );
}
