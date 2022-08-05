import { useEffect } from 'react'
import styled from 'styled-components'
import { FormattedMessage, useIntl } from 'react-intl'

import { SkillItem } from './SkillItem'
import { Paragraph } from '../../components/Paragraph'

import * as icons from '../../svgs'
import { progLangList, libFmwList, Skill } from './skillList'
import { useDescription } from '../../contexts/DescriptionContext'

const SkillsStyles = styled.section`
  margin: auto 10%;
  display: flex;
  flex-direction: column;
`

const SkillColumns = styled.div`
  margin: 0 -2em;
  margin-bottom: 2em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const SkillColumn = styled.div`
  margin: 0 2em;
  display: flex;
  flex-direction: column;
  flex: 1;
  /* max-width: 38vw; */
  min-width: 450px;
`

const ColumnTitle = styled.h4`
  font-family: 'T.C.SYSTEM', sans-serif;
  font-size: 16px;
  font-weight: normal;
  color: ${(props) => props.theme.fill6};
  text-shadow: 0 0 5px ${(props) => props.theme.fill3},
    0 0 10px ${(props) => props.theme.fill4},
    0 0 15px ${(props) => props.theme.fill5};
  text-transform: uppercase;
  margin-bottom: 16px;

  &:before {
    content: '[ ';
  }

  &:after {
    content: ' ]';
  }
`

function getSkillItem(skill: Skill) {
  return <SkillItem key={skill.name} Icon={icons[skill.name]} skill={skill} />
}

export function Skills() {
  const intl = useIntl()
  const { setDescription } = useDescription()

  useEffect(() => {
    setDescription(intl.formatMessage({ id: 'description.default' }))
  })

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
          {progLangList.map((lang) => getSkillItem(lang))}
        </SkillColumn>
        <SkillColumn>
          <ColumnTitle>
            <FormattedMessage
              id="skills.column2"
              description="Libraries & frameworks column title"
            />
          </ColumnTitle>
          {libFmwList.map((lib) => getSkillItem(lib))}
        </SkillColumn>
      </SkillColumns>
      <Paragraph
        messageId="skills.paragraph"
        messageDescription="Skills page text"
      />
    </SkillsStyles>
  )
}
