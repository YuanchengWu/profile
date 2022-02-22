import React from 'react'
import styled from 'styled-components'

const SVG = styled.svg`
  min-width: 18px;
  height: 18px;
  margin-right: 0.5em;
  fill: ${(props) => props.theme.fill6};
  filter: drop-shadow(0px 0px 8px ${(props) => props.theme.fill3})
    drop-shadow(0px 0px 16px ${(props) => props.theme.fill3});
`

export default function Express() {
  return (
    <SVG viewBox="0 0 12 18" xmlns="http://www.w3.org/2000/svg">
      <path d="M.5 17.5V8.87h10.72v-.5H.5V.5h11.4V0H0v18h12v-.5H.5z" />
    </SVG>
  )
}
