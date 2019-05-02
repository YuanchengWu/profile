import React, { useEffect } from 'react';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';

import ExperienceItem from './ExperienceItem';
import Intel from '../../svgs/Intel';
import Infosys from '../../svgs/Infosys';
import Python from '../../svgs/Python';
import Angular from '../../svgs/Angular';
import ReactJS from '../../svgs/React';
import Redux from '../../svgs/Redux';

const ExperienceStyles = styled.section`
  margin: auto 10%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-evenly;
`;

function Experience({ setDescription, intl }) {
  useEffect(() => {
    setDescription(
      intl.formatMessage({ id: 'description.experience.default' })
    );
  });

  return (
    <ExperienceStyles>
      <ExperienceItem Icon={Intel} setDescription={setDescription}>
        <Python />
      </ExperienceItem>
      <ExperienceItem Icon={Infosys} setDescription={setDescription}>
        <Angular />
        <ReactJS /> <Redux />
      </ExperienceItem>
    </ExperienceStyles>
  );
}

export default injectIntl(Experience);
