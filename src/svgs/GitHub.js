import React from 'react'
import { injectIntl } from 'react-intl'
import styled from 'styled-components'

const SVG = styled.svg`
  height: 5em;
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

function GitHub({ setDescription, intl }) {
  function handleMouseEnter() {
    setDescription(intl.formatMessage({ id: `description.contact.GitHub` }))
  }

  function handleMouseLeave() {
    setDescription(intl.formatMessage({ id: 'description.contact.default' }))
  }
  return (
    <SVG
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2350 2314.8"
    >
      <path d="M1175 0C525.8 0 0 525.8 0 1175c0 552.2 378.9 1010.5 890.1 1139.7a158.6 158.6 0 0 1-8.8-55.8v-199.8H734.4c-79.3 0-152.8-35.2-185.1-99.9-38.2-70.5-44.1-179.2-141-246.8-29.4-23.5-5.9-47 26.4-44.1 61.7 17.6 111.6 58.8 158.6 120.4 47 61.7 67.6 76.4 155.7 76.4 41.1 0 105.7-2.9 164.5-11.8 32.3-82.3 88.1-155.7 155.7-190.9-393.6-47-581.6-240.9-581.6-505.3 0-114.6 49.9-223.3 132.2-317.3-26.4-91.1-61.7-279.1 11.8-352.5 176.3 0 282 114.6 308.4 143.9a904.6 904.6 0 0 1 284.9-47 890.4 890.4 0 0 1 284.9 47c26.4-29.4 132.2-143.9 308.4-143.9 70.5 70.5 38.2 261.4 8.8 352.5 82.3 91.1 129.3 202.7 129.3 317.3 0 264.4-185.1 458.3-575.7 499.4 108.7 55.8 185.1 214.4 185.1 331.9V2256c0 8.8-2.9 17.6-2.9 26.4A1170.5 1170.5 0 0 0 2350 1175C2350 525.8 1824.2 0 1175 0z" />
    </SVG>
  )
}

export default injectIntl(GitHub)
