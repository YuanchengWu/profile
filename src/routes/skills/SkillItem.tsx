import { ReactNode } from 'react'
import { useIntl } from 'react-intl'
import styled, { keyframes } from 'styled-components'

import { useDescription } from '../../contexts/DescriptionContext'
import { Skill } from './skillList'

const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1;
  }
`

const SkillItemStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.5em;
  z-index: 1;

  &:hover {
    filter: drop-shadow(0px 0px 1px ${(props) => props.theme.fill4});
  }
`

const SkillName = styled.h3`
  font-family: 'T.C.SYSTEM', sans-serif;
  font-size: 22px;
  font-weight: normal;
  color: ${(props) => props.theme.fill6};
  text-shadow: 0 0 5px ${(props) => props.theme.fill3},
    0 0 10px ${(props) => props.theme.fill4},
    0 0 15px ${(props) => props.theme.fill5};
  text-transform: uppercase;
  margin-right: 0.5em;
`

const SkillBar = styled.div<{ level: number }>`
  position: relative;
  display: inline-block;
  height: 100%;
  width: calc(33.33% - 1px);
  background-color: ${(props) => props.theme.fill5}f0;
  animation: ${fadeIn} 200ms ease-out ${(props) => props.level * 200}ms
    backwards;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    box-shadow: 0 0 8px ${(props) => props.theme.fill3},
      0 0 16px ${(props) => props.theme.fill3};
  }
`

const SkillBarBackground = styled.div`
  display: flex;
  gap: 2px;
  height: 18px;
  width: 50%;
  min-width: 150px;
  border: solid ${(props) => props.theme.fill6};
  border-width: 0 1px 1px 1px;
  margin-left: auto;
  padding: 0 2px 2px 2px;
  box-sizing: content-box;
`

interface SkillItemProps {
  Icon(): JSX.Element
  skill: Skill
}

export function SkillItem({ Icon, skill }: SkillItemProps) {
  const intl = useIntl()
  const { setDescription } = useDescription()

  function handleMouseEnter() {
    setDescription(
      intl.formatMessage({ id: `description.skills.${skill.name}` })
    )
  }

  function handleMouseLeave() {
    setDescription(intl.formatMessage({ id: 'description.default' }))
  }

  return (
    <SkillItemStyles
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Icon />
      <SkillName>{skill.label ?? skill.name}</SkillName>
      <SkillBarBackground>
        {Array.from<ReactNode>({ length: skill.level }).map((_, i) => (
          <SkillBar level={i} />
        ))}
      </SkillBarBackground>
    </SkillItemStyles>
  )
}
