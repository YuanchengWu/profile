import React, { useContext } from 'react';
import styled from 'styled-components';
import { FormattedMessage, injectIntl } from 'react-intl';

import { DescriptionContext } from '../App';

const Item = styled.a`
  font-family: 'T.C.SYSTEM';
  font-size: 32px;
  text-transform: uppercase;
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

function MenuItem({ name, href, mouseState, intl }) {
  const { setDescription } = useContext(DescriptionContext);
  const nameLower = name.toLowerCase();

  // set default message before user interaction
  if (!mouseState.didMouseOver) {
    setDescription(intl.formatMessage({ id: 'description.main' }));
  }

  function handleMouseEnter() {
    setDescription(intl.formatMessage({ id: `description.${nameLower}` }));
    mouseState.setDidMouseOver(true);
  }

  function handleMouseLeave() {
    setDescription(intl.formatMessage({ id: 'description.main' }));
  }

  return (
    <ListItem>
      <Item
        href={href}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <FormattedMessage
          id={'main.' + nameLower}
          defaultMessage="{name}"
          description="Menu item text for {name}"
          values={{ name }}
        />
      </Item>
    </ListItem>
  );
}

export default injectIntl(MenuItem);
