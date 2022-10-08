import { FunctionComponent, SVGAttributes } from 'react'
import styled from 'styled-components'

export interface SkillIconProps {
  Icon: FunctionComponent<SVGAttributes<SVGElement>>
}

export function SkillIcon({ Icon }: SkillIconProps) {
  return (
    <IconContainer>
      <Icon />
    </IconContainer>
  )
}

const IconContainer = styled.span`
  > svg {
    min-width: 18px;
    height: 18px;
    margin-right: 0.5em;
    filter: drop-shadow(0px 0px 8px ${(props) => props.theme.fill3})
      drop-shadow(0px 0px 16px ${(props) => props.theme.fill3});

    .dark {
      fill: ${(props) => props.theme.fill4};
    }

    .light {
      fill: ${(props) => props.theme.fill6};
    }
  }
`
