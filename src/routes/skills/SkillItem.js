import React from 'react';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';

const SkillItemStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.5em;
`;

const SkillName = styled.h3`
  font-family: 'T.C.SYSTEM';
  font-size: 22px;
  font-weight: normal;
  color: ${props => props.theme.fill6};
  text-shadow: 0 0 5px ${props => props.theme.fill3},
    0 0 10px ${props => props.theme.fill4},
    0 0 15px ${props => props.theme.fill5};
  text-transform: uppercase;
  margin-right: 0.5em;
`;

const SkillBar = styled.div`
  height: 100%;
  width: ${props => props.size}%;
  opacity: 0.9;
  background-color: ${props => props.theme.fill5};
  box-shadow: 0 0 8px ${props => props.theme.fill3},
    0 0 16px ${props => props.theme.fill3};
  animation: grow 2s cubic-bezier(0.26, 0.57, 0, 1);

  @keyframes grow {
    from {
      width: 0;
    }
  }
`;

const SkillBarBackground = styled.div`
  height: 18px;
  width: 50%;
  min-width: 150px;
  border: solid ${props => props.theme.fill6};
  border-width: 0 1px 1px 1px;
  margin-left: auto;
`;

function SkillItem({ Icon, skillName, skillLevel, setDescription, intl }) {
  function handleMouseEnter() {
    setDescription(
      intl.formatMessage({ id: `description.skills.${skillName}` })
    );
  }

  function handleMouseLeave() {
    setDescription(intl.formatMessage({ id: 'description.default' }));
  }

  return (
    <SkillItemStyles
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Icon />
      <SkillName>{skillName}</SkillName>
      <SkillBarBackground>
        <SkillBar size={skillLevel} />
      </SkillBarBackground>
    </SkillItemStyles>
  );
}

export default injectIntl(SkillItem);
