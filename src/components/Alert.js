import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import styled from 'styled-components';

const AlertStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 9em;
  width: 25em;
  padding: 2em;
  border: 2px solid ${props => props.theme.fill6};
  box-shadow: 0 0 8px ${props => props.theme.fill3},
    0 0 16px ${props => props.theme.fill3};
  background-image: linear-gradient(
    -45deg,
    ${props => props.theme.fill4 + '60'} 25%,
    transparent 25%,
    transparent 50%,
    ${props => props.theme.fill4 + '60'} 50%,
    ${props => props.theme.fill4 + '60'} 75%,
    transparent 75%,
    transparent
  );
  background-size: 50px 50px;
  animation: open 0.8s ease-out, move 3s linear infinite;

  @keyframes open {
    0% {
      height: 0;
      width: 0;
      padding: 0;
    }
    50% {
      width: 0;
      padding: 0;
    }
  }

  @keyframes move {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 50px 50px;
    }
  }
`;

const AlertIcon = styled.svg`
  height: 5em;
  fill: ${props => props.theme.fill6};
  filter: drop-shadow(0px 0px 8px ${props => props.theme.fill3})
    drop-shadow(0px 0px 16px ${props => props.theme.fill3});
`;

const AlertMessage = styled.span`
  font-family: 'Chakra Petch', sans-serif;
  font-size: 24px;
  line-height: 42px;
  color: ${props => props.theme.fill6};
  text-shadow: 0 0 5px ${props => props.theme.fill3},
    0 0 10px ${props => props.theme.fill4},
    0 0 15px ${props => props.theme.fill5};
  margin: 0 auto;
`;

function Alert({ messageId, intl }) {
  const [showMessage, setShowMessage] = useState(false);

  if (!showMessage) {
    setTimeout(() => setShowMessage(true), 800);
  }

  let translatedMessage = intl.formatMessage({ id: messageId });

  return (
    <AlertStyles>
      <AlertIcon viewBox="0 0 120 99" xmlns="http://www.w3.org/2000/svg">
        <path d="M60 0l60 99H0L60 0zm1.45 67.47V45.45H58.4v22.02h3.05zM58.4 76.6h3.05v-3.04H58.4v3.04z" />
      </AlertIcon>
      <AlertMessage>{showMessage && translatedMessage}</AlertMessage>
    </AlertStyles>
  );
}

export default injectIntl(Alert);
