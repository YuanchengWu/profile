import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

const P = styled.p`
  font-family: 'Chakra Petch', sans-serif;
  font-size: 16px;
  margin-top: 0.5em;
  color: ${(props) => props.theme.fill6};
  text-shadow: 0 0 5px ${(props) => props.theme.fill3},
    0 0 10px ${(props) => props.theme.fill4},
    0 0 15px ${(props) => props.theme.fill5};
`

export default function Paragraph({ messageId, messageDescription }) {
  return (
    <P>
      <FormattedMessage id={messageId} description={messageDescription} />
    </P>
  )
}
