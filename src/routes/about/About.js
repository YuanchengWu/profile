import React from 'react';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';

import Map from './Map';
import Paragraph from '../../components/Paragraph';

const AboutStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 0 10%;
  overflow: visible;
`;

function About({ setDescription, intl }) {
  return (
    <AboutStyles>
      <Paragraph
        messageId="about.paragraph"
        messageDescription="About page text content"
      />
      <Map locale={intl.locale} />
    </AboutStyles>
  );
}

export default injectIntl(About);
