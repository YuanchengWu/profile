import React, { useEffect } from 'react';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';

import Intel from '../../svgs/Intel';
import Infosys from '../../svgs/Infosys';

const ExperienceStyles = styled.section`
  margin: 0 10%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  margin: auto 0;
`;

function Experience({ setDescription, intl }) {
  useEffect(() => {
    setDescription(
      intl.formatMessage({ id: 'description.experience.default' })
    );
  }, []);
  return (
    <ExperienceStyles>
      <Intel setDescription={setDescription} />
      <Infosys setDescription={setDescription} />
    </ExperienceStyles>
  );
}

export default injectIntl(Experience);
