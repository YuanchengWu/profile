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

export default function HTML5() {
  return (
    <SVG viewBox="0 0 16 18" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.796 0l-1.44 16.147-6.468 1.796-6.45-1.794L0 0h15.796zM7.894 5.282h4.773l.04-.445.09-1.005.047-.53H2.94l.048.53.486 5.459h6.853l-.23 2.568-2.205.597h-.002l-2.202-.595-.14-1.58H3.56l.277 3.11 4.05 1.126.01-.003 4.047-1.123.03-.335.464-5.214.049-.532H5.28l-.18-2.028h2.793z" />
    </SVG>
  )
}
