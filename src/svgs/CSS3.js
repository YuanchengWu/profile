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

export default function CSS3() {
  return (
    <SVG viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.814 17.97l9.017-2.999L19.824 0H2.932L2.29 3.34h13.537l-.422 2.133H1.848l-.663 3.34h13.537l-.743 3.825-5.463 1.79-4.72-1.79.322-1.67H.784L0 14.97l7.814 3" />
    </SVG>
  );
}
