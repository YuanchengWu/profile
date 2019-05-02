import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  margin: 3em;
  justify-content: center;
`;

export default React.memo(Header, () => true);
