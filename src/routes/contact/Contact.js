import React, { useEffect } from 'react';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';

const ContactStyles = styled.section`
  margin: 0 10%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  margin: auto 0;
`;

function Contact({ setDescription, intl }) {
  useEffect(() => {
    setDescription(intl.formatMessage({ id: 'description.contact.default' }));
  }, []);
  return <ContactStyles />;
}

export default injectIntl(Contact);
