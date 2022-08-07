import { useEffect } from 'react'
import { useIntl } from 'react-intl'
import styled from 'styled-components'

import { useDescription } from '../../contexts/DescriptionContext'
import { Angular, Infosys, Intel, Python, React, Redux } from '../../svgs'
import { ExperienceItem } from './ExperienceItem'

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
  })

  return (
    <ExperienceStyles>
      <ExperienceItem Icon={Intel}>
        <Python />
      </ExperienceItem>
      <ExperienceItem Icon={Infosys}>
        <Angular />
        <React />
        <Redux />
      </ExperienceItem>
    </ExperienceStyles>
  )
}
