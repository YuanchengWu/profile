import { ReactNode, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { useIntl } from 'react-intl'

import { Typer } from '../../components/Typer'

interface ExperienceItemProps {
  Icon(): JSX.Element
  children: ReactNode
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const ExperienceItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.5s;
`

const Technologies = styled.div`
  margin-left: 1em;
  height: 80px;
`

const TechnologiesTitle = styled.h4`
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

const TechnologyIcons = styled.div`
  align-self: flex-start;
  margin-top: 2em;
  transform-origin: left;
  transform: scale(2);
  animation: ${fadeIn} 0.5s linear 0.5s;
  animation-fill-mode: backwards;
`

export function ExperienceItem({ Icon, children }: ExperienceItemProps) {
  const intl = useIntl()
  const [isHovering, setIsHovering] = useState(false)

  function handleMouseEnter() {
    setIsHovering(true)
  }

  function handleMouseLeave() {
    setIsHovering(false)
  }

  return (
    <ExperienceItemStyles
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Icon />
      <Technologies>
        {isHovering && (
          <>
            <TechnologiesTitle>
              <Typer
                fullText={intl.formatMessage({ id: 'experience.title' })}
                typingSpeed={10}
              />
            </TechnologiesTitle>
            <TechnologyIcons>{children}</TechnologyIcons>
          </>
        )}
      </Technologies>
    </ExperienceItemStyles>
  )
}
