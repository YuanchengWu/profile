import React from 'react';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';

import Map from './Map';

const AboutStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 0 10%;
  overflow: visible;
`;

const P = styled.p`
  font-family: 'Chakra Petch', sans-serif;
  font-size: 16px;
  margin: 0;
  color: ${props => props.theme.fill6};
  text-shadow: 0 0 5px ${props => props.theme.fill3},
    0 0 10px ${props => props.theme.fill4},
    0 0 15px ${props => props.theme.fill5};
`;

function About({ setDescription, intl }) {
  return (
    <AboutStyles>
      <P>
        Bacon ipsum dolor amet leberkas short ribs tongue beef ribs rump
        tri-tip, filet mignon bresaola spare ribs corned beef hamburger strip
        steak. Kevin hamburger shankle pancetta t-bone swine frankfurter. Short
        ribs picanha tongue porchetta pig sausage strip steak pork chop
        andouille bacon alcatra. Short loin t-bone ribeye fatback kevin ball tip
        tongue chicken. Leberkas ham turkey landjaeger sausage chicken meatloaf
        tongue porchetta salami strip steak pork loin flank pork belly pork
        chop. Salami pastrami shank flank, pork ground round t-bone sausage pork
        chop landjaeger.
      </P>
      <Map locale={intl.locale} />
    </AboutStyles>
  );
}

export default injectIntl(About);
