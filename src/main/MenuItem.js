import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';

import Typer from '../components/Typer';

const StyledLink = styled(Link)`
  font-family: 'T.C.SYSTEM';
  font-size: 32px;
  text-transform: uppercase;
  text-decoration: none;
  color: ${props => props.theme.fill4};
  text-shadow: 0 0 8px ${props => props.theme.fill3},
    0 0 16px ${props => props.theme.fill3};

  :hover {
    color: ${props => props.theme.fill6};
    text-shadow: 0 0 5px ${props => props.theme.fill3},
      0 0 10px ${props => props.theme.fill4},
      0 0 15px ${props => props.theme.fill5};
  }
`;

const ListItem = styled.li`
  list-style: none;
  margin-bottom: 32px;
`;

function MenuItem({ name, path, setDescription, intl }) {
  function handleMouseEnter() {
    setDescription(intl.formatMessage({ id: `description.${name}` }));
  }

  function handleMouseLeave() {
    setDescription(intl.formatMessage({ id: 'description.main' }));
  }

  return (
    <ListItem>
      <StyledLink
        to={path}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Typer
          fullText={intl.formatMessage({ id: `main.${name}` })}
          typingSpeed={25}
        />
      </StyledLink>
    </ListItem>
  );
}

export default injectIntl(MenuItem);
