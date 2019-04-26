import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: center;
`;

export default React.memo(Header, () => true);
