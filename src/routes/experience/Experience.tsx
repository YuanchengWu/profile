import { useEffect } from 'react'
import { useIntl } from 'react-intl'
import styled from 'styled-components'

import { useDescription } from '../../contexts/DescriptionContext'
import {
  Angular,
  GWT,
  Infosys,
  Intel,
  Python,
  React,
  ReactSpring,
  Redux,
  Storybook,
  Workday,
} from '../../svgs'
import { ExperienceItem } from './ExperienceItem'
import { SkillIcon } from '../../components/SkillIcon'

const ExperienceStyles = styled.section`
  margin: auto 10%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-evenly;
`

export function Experience() {
  const intl = useIntl()
  const { setDescription } = useDescription()

  useEffect(() => {
    setDescription(intl.formatMessage({ id: 'description.experience.default' }))
  }, [intl, setDescription])

  return (
    <ExperienceStyles>
      <ExperienceItem Icon={Intel}>
        <SkillIcon Icon={Python} />
      </ExperienceItem>
      <ExperienceItem Icon={Infosys}>
        <SkillIcon Icon={Angular} />
        <SkillIcon Icon={React} />
        <SkillIcon Icon={Redux} />
      </ExperienceItem>
      <ExperienceItem Icon={Workday} overrideStyles>
        <SkillIcon Icon={React} />
        <SkillIcon Icon={Redux} />
        <SkillIcon Icon={ReactSpring} />
        <SkillIcon Icon={Storybook} />
        <SkillIcon Icon={GWT} />
      </ExperienceItem>
    </ExperienceStyles>
  )
}
