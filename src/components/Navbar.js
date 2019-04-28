import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';

const StyledNavLink = styled(NavLink)`
  font-family: 'T.C.SYSTEM';
  font-size: 28px;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 1.1em;
  height: 1.4em;
  padding: 0.2em;
  margin: 0.2em;
  color: ${props => props.theme.fill5};
  text-shadow: 0 0 8px ${props => props.theme.fill3},
    0 0 16px ${props => props.theme.fill3};
  border: 2px solid ${props => props.theme.fill6};
  box-shadow: 0 0 8px ${props => props.theme.fill3},
    0 0 16px ${props => props.theme.fill3};
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 0 5px ${props => props.theme.fill3},
      0 0 10px ${props => props.theme.fill4},
      0 0 15px ${props => props.theme.fill5};
    color: ${props => props.theme.fill6};
    text-shadow: 0 0 5px ${props => props.theme.fill3},
      0 0 10px ${props => props.theme.fill4},
      0 0 15px ${props => props.theme.fill5};
    transition: box-shadow 0.2s ease, color 0.2s ease, text-shadow 0.2s ease;
  }

  &.active {
    color: ${props => props.theme.fill3};
    background-color: ${props => props.theme.fill6};
    text-shadow: none;
    box-shadow: 0 0 5px ${props => props.theme.fill3},
      0 0 10px ${props => props.theme.fill4},
      0 0 15px ${props => props.theme.fill5};
  }
`;

function Navbar({ intl }) {
  const links = ['about', 'skills', 'projects', 'experience', 'contact'].map(
    name => (
      <StyledNavLink key={name} to={'/' + name}>
        {intl.formatMessage({ id: `nav.${name}` })}
      </StyledNavLink>
    )
  );
  return (
    <>
      <StyledNavLink exact to="/" style={{ padding: '0.2em 0.4em' }}>
        {'<'}
      </StyledNavLink>
      {links}
    </>
  );
}

export default injectIntl(Navbar);
