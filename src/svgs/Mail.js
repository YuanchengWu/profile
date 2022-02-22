import React from 'react'
import { injectIntl } from 'react-intl'
import styled from 'styled-components'

const SVG = styled.svg`
  height: 4.5em;
  margin: 0.5em;
  padding-bottom: 1em;
  fill: ${(props) => props.theme.fill6};
  filter: drop-shadow(0px 0px 8px ${(props) => props.theme.fill3})
    drop-shadow(0px 0px 16px ${(props) => props.theme.fill3});
  transition: filter 0.2s ease-in;

  &:hover {
    filter: drop-shadow(0 0 1px ${(props) => props.theme.fill3})
      drop-shadow(0 0 2px ${(props) => props.theme.fill4})
      drop-shadow(0 0 4px ${(props) => props.theme.fill5});
    transition: filter 0.2s ease;
  }
`

function Mail({ setDescription, intl }) {
  function handleMouseEnter() {
    setDescription(intl.formatMessage({ id: `description.contact.Mail` }))
  }

  function handleMouseLeave() {
    setDescription(intl.formatMessage({ id: 'description.contact.default' }))
  }
  return (
    <SVG
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      viewBox="0 0 232 168"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M224 10.8L116 89 8 10.8V160h216V10.8zM0 0h232v168H0V0z" />
    </SVG>
  )
}

export default injectIntl(Mail)
