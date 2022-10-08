import { FunctionComponent, SVGAttributes } from 'react'
import { useIntl } from 'react-intl'
import styled from 'styled-components'

import { useDescription } from '../../contexts/DescriptionContext'

export interface ExperienceIconProps {
  Icon: FunctionComponent<SVGAttributes<SVGElement>>
}

export function ExperienceIcon({ Icon }: ExperienceIconProps) {
  const intl = useIntl()
  const { setDescription } = useDescription()

  function handleMouseEnter() {
    setDescription(
      intl.formatMessage({ id: `description.experience.${Icon.name}` })
    )
  }

  function handleMouseLeave() {
    setDescription(intl.formatMessage({ id: 'description.experience.default' }))
  }
  return (
    <IconContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Icon />
    </IconContainer>
  )
}

const IconContainer = styled.span`
  > svg {
    margin: 1em;
    filter: drop-shadow(0px 0px 8px ${(props) => props.theme.fill3})
      drop-shadow(0px 0px 16px ${(props) => props.theme.fill3});
    transition: filter 0.2s ease-in;

    &:hover {
      filter: drop-shadow(0 0 1px ${(props) => props.theme.fill3})
        drop-shadow(0 0 2px ${(props) => props.theme.fill4})
        drop-shadow(0 0 4px ${(props) => props.theme.fill5});
      transition: filter 0.2s ease;
    }
  }
`
