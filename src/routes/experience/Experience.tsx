import { useEffect } from 'react'
import styled from 'styled-components'
import { useIntl } from 'react-intl'

import { ExperienceItem } from './ExperienceItem'
import Intel from '../../svgs/Intel'
import Infosys from '../../svgs/Infosys'
import Python from '../../svgs/Python'
import Angular from '../../svgs/Angular'
import ReactJS from '../../svgs/React'
import Redux from '../../svgs/Redux'
import { useDescription } from '../../contexts/DescriptionContext'

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
        <ReactJS /> <Redux />
      </ExperienceItem>
    </ExperienceStyles>
  )
}
