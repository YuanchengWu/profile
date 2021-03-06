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

export default function NodeJS() {
  return (
    <SVG viewBox="0 0 15 17" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.36 0c-.22 0-.45.06-.63.16L.63 3.68C.26 3.91 0 4.34 0 4.8v7.02c0 .46.25.89.64 1.12l1.6.91c.77.38 1.03.39 1.4.39 1.14 0 1.8-.7 1.8-1.9V5.38c0-.1-.08-.18-.18-.18H4.5c-.1 0-.19.08-.19.18v6.93c0 .54-.55 1.07-1.45.62L1.2 12a.21.21 0 0 1-.1-.18V4.8a.2.2 0 0 1 .1-.17l6.08-3.5a.18.18 0 0 1 .18 0l6.1 3.5c.05.04.08.1.08.17v7.02c0 .07-.03.14-.09.18l-6.09 3.5c-.05.04-.13.04-.18 0l-1.54-.93c-.07-.02-.13-.03-.17 0-.44.24-.52.29-.92.41-.1.04-.25.1.06.26l2.03 1.2a1.24 1.24 0 0 0 1.28 0l6.08-3.5c.4-.23.64-.66.64-1.12V4.8c0-.45-.25-.88-.64-1.1L8 .15A1.3 1.3 0 0 0 7.36 0zM9 5.03c-1.73 0-2.77.73-2.77 1.96 0 1.31 1.03 1.7 2.7 1.86 1.98.2 2.14.5 2.14.89 0 .68-.55.96-1.82.96-1.62 0-1.97-.4-2.1-1.2a.18.18 0 0 0-.17-.15h-.79c-.1 0-.17.08-.17.18 0 1.02.56 2.24 3.23 2.24 1.92 0 3.02-.76 3.02-2.08s-.88-1.66-2.75-1.92c-1.9-.24-2.08-.37-2.08-.82 0-.36.16-.85 1.56-.85 1.23 0 1.71.27 1.9 1.1.01.09.09.15.17.15h.8c.03 0 .08-.02.12-.06.03-.03.05-.08.04-.13C11.9 5.7 10.95 5.03 9 5.03z" />
    </SVG>
  );
}
