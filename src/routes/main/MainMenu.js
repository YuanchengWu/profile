import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';

import Splash from './Splash';
import MenuItem from './MenuItem';
import Typer from '../../components/Typer';

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

const SVG = styled.svg`
  position: absolute;
  top: 3em;
  right: 3em;
  height: 6em;
  padding-bottom: 1em;
  stroke: ${props => props.theme.fill6};
  filter: drop-shadow(0px 0px 8px ${props => props.theme.fill3})
    drop-shadow(0px 0px 16px ${props => props.theme.fill3});
  transition: filter 0.2s ease-in;

  &:hover {
    filter: drop-shadow(0 0 1px ${props => props.theme.fill3})
      drop-shadow(0 0 2px ${props => props.theme.fill4})
      drop-shadow(0 0 4px ${props => props.theme.fill5});
    transition: filter 0.2s ease;
  }
`;

function MainMenu({ setDescription, showSplash, setShowSplash, intl }) {
  // set default message before user interaction
  useEffect(() => {
    setDescription(intl.formatMessage({ id: 'description.main' }));
  }, []);

  function handleMouseEnter() {
    setDescription(intl.formatMessage({ id: 'description.main.info' }));
  }

  function handleMouseLeave() {
    setDescription(intl.formatMessage({ id: 'description.main' }));
  }

  return (
    <MainWrapper>
      {showSplash && <Splash setShowSplash={setShowSplash} />}
      {!showSplash && (
        <>
          <Title>
            <Typer
              fullText={intl.formatMessage({ id: 'main.title' })}
              typingSpeed={25}
            />
          </Title>
          <Link to="/info">
            <SVG
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1264 800"
            >
              <g fill="none" fillRule="evenodd" strokeWidth="16">
                <path
                  className="horse"
                  d="M910 117l29-21h-49V72l-19 17-23-8h-63l-58 30h-22l8 12-86 40 26 17-50 40 24 18-29 33 22 9 29-1-18 16-61 19-37 5-39 25-28 34-42 34-28 30-31 90-36 54 29-15-42 83 22-11-6 25 39-22 49-51 25-39 8-104 39 66-28 53 61 121 18 2-3 31 19 11 43-1-24-48-23-19-31-57 5-37 15-9 38 22 42 48-2 32 22 26 22-32-7-47-63-60-1-20 16-29v-31l93-15 82-39 36 8 73 2 11 14-22 36-21 5-17-11-17 21-2 21 56-4 27-32 6 27-25 21 2 22 17 20 27-30 11-39-13-64 12-22-14-19-60-45-1-42-25-37-3-45 10-18 17 24 3 26 28 6 19-12 6-24-12-52 3-32-8-28z"
                />
                <path
                  className="right-bracket"
                  d="M1008 52h100l56 56v232l60 60-60 60v232l-56 56h-100"
                />
                <path
                  className="left-bracket"
                  d="M256 52H156l-56 56v232l-60 60 60 60v232l56 56h100"
                />
              </g>
            </SVG>
          </Link>
          <MenuItemList>
            {['about', 'skills', 'projects', 'experience', 'contact'].map(
              name => (
                <MenuItem
                  key={name}
                  name={name}
                  path={`/${name}`}
                  setDescription={setDescription}
                />
              )
            )}
          </MenuItemList>
        </>
      )}
    </MainWrapper>
  );
}

export default injectIntl(MainMenu);
