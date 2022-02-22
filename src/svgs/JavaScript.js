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

export default function JavaScript() {
  return (
    <SVG viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h18v18H0V0zm4.733 15.042c.399.846 1.184 1.547 2.537 1.547 1.499 0 2.526-.798 2.526-2.55V8.264H8.104v5.751c0 .846-.35 1.063-.906 1.063-.58 0-.822-.398-1.088-.87l-1.377.834zm5.981-.181c.496.979 1.51 1.728 3.081 1.728 1.607 0 2.803-.834 2.803-2.356 0-1.414-.81-2.042-2.247-2.659l-.423-.18c-.725-.315-1.039-.52-1.039-1.028 0-.41.314-.725.81-.725.483 0 .797.206 1.087.725l1.317-.846c-.556-.978-1.329-1.353-2.404-1.353-1.51 0-2.477.967-2.477 2.235 0 1.378.81 2.03 2.03 2.55l.422.181c.774.338 1.233.544 1.233 1.124 0 .483-.447.833-1.148.833-.834 0-1.305-.434-1.667-1.027l-1.378.798z" />
    </SVG>
  )
}
