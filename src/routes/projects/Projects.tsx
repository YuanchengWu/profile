import { useEffect } from 'react'
import { useIntl, FormattedMessage } from 'react-intl'
import styled, { keyframes } from 'styled-components'

import { Alert } from '../../components/Alert'
import { useDescription } from '../../contexts/DescriptionContext'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const ProjectsStyles = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: auto;
`

const Message = styled.p`
  font-family: 'Chakra Petch', sans-serif;
  font-size: 16px;
  margin-top: 0.5em;
  opacity: 0;
  color: ${(props) => props.theme.fill6};
  text-shadow: 0 0 5px ${(props) => props.theme.fill3},
    0 0 10px ${(props) => props.theme.fill4},
    0 0 15px ${(props) => props.theme.fill5};
  animation: ${fadeIn} 1s linear 1s 1 normal forwards;
`

const A = styled.a`
  color: inherit;
`

export function Projects() {
  const intl = useIntl()
  const { setDescription } = useDescription()

  useEffect(() => {
    setDescription(intl.formatMessage({ id: 'description.projects.default' }))
  }, [intl, setDescription])

  return (
    <ProjectsStyles>
      <Alert messageId="alert.projects" />
      <Message>
        <FormattedMessage
          id="projects.message"
          description="A note about projects in progress."
        />
        <span> </span>
        <A href="https://github.com/YuanchengWu" target="_">
          GitHub
        </A>
      </Message>
    </ProjectsStyles>
  )
}
