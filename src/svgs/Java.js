import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  min-width: 18px;
  height: 18px;
  margin-right: 0.5em;
  fill: ${props => props.theme.fill6};
  filter: drop-shadow(0px 0px 8px ${props => props.theme.fill3})
    drop-shadow(0px 0px 16px ${props => props.theme.fill3});
`;

export default function Java() {
  return (
    <SVG viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 18h18v-2H0v2zM18 5h-2V2h2v3zm0-5H2v10a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V7h2a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
    </SVG>
  );
}
