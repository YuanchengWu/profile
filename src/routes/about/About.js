import React, { useEffect } from 'react';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';

import Map from './Map';
import Paragraph from '../../components/Paragraph';

const AboutStyles = styled.section`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: auto 10%;
  overflow: visible;
`;

function About({ setDescription, intl }) {
  useEffect(() => {
    setDescription(intl.formatMessage({ id: 'description.default' }));
  }, []);
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
