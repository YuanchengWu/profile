import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import SkillItem from './SkillItem';
import * as icons from '../../svgs/index';
import { progLangList, libFmwList } from './skillList';

const SkillsStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillColumns = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SkillColumn = styled.div`
  margin: 2em;
  display: flex;
  flex-direction: column;
  min-width: 40vw;
`;

const ColumnTitle = styled.h4`
  font-family: 'T.C.SYSTEM';
  font-size: 16px;
  font-weight: normal;
  color: ${props => props.theme.fill6};
  text-shadow: 0 0 5px ${props => props.theme.fill3},
    0 0 10px ${props => props.theme.fill4},
    0 0 15px ${props => props.theme.fill5};
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const progLanguages = progLangList.map(lang => getSkillItem(lang));

const libFrameworks = libFmwList.map(lib => getSkillItem(lib));

function getSkillItem(skill) {
  return (
    <SkillItem
      key={skill.name}
      Icon={icons[skill.name]}
      skillName={skill.name}
      skillLevel={skill.level}
    />
  );
}

export default function Skills() {
  return (
    <SkillsStyles>
      <SkillColumns>
        <SkillColumn>
          <ColumnTitle>
            <FormattedMessage
              id="skills.column1"
              description="Programming languages column title"
            />
          </ColumnTitle>
          {progLanguages}
        </SkillColumn>
        <SkillColumn>
          <ColumnTitle>
            <FormattedMessage
              id="skills.column2"
              description="Libraries & frameworks column title"
            />
          </ColumnTitle>
          {libFrameworks}
        </SkillColumn>
      </SkillColumns>
    </SkillsStyles>
  );
}
