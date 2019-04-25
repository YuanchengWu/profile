import React from 'react';
import styled from 'styled-components';

const PageStyle = styled.main`
  flex: 1;
`;

const PageContent = React.memo(
  props => {
    return <PageStyle>{props.children}</PageStyle>;
  },
  () => true
);

export default PageContent;
