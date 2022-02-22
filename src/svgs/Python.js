import React from 'react'
import styled from 'styled-components'

const SVG = styled.svg`
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
`

export default function Python() {
  return (
    <SVG viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          className="dark"
          d="M8.95 0C4.372 0 4.657 1.985 4.657 1.985l.005 2.056h4.368v.617H2.929S0 4.326 0 8.943c0 4.618 2.556 4.454 2.556 4.454h1.526v-2.142S4 8.699 6.597 8.699h4.332s2.434.039 2.434-2.352V2.393S13.733 0 8.949 0zM6.54 1.383a.785.785 0 1 1 .002 1.57.785.785 0 0 1-.002-1.57z"
        />
        <path
          className="light"
          d="M9.08 17.933c4.576 0 4.29-1.984 4.29-1.984l-.005-2.056H8.998v-.618H15.1s2.929.332 2.929-4.285c0-4.618-2.557-4.454-2.557-4.454h-1.525v2.143s.082 2.556-2.516 2.556H7.1s-2.434-.04-2.434 2.352v3.953s-.37 2.393 4.413 2.393zm2.408-1.382a.785.785 0 1 1-.002-1.57.785.785 0 0 1 .002 1.57z"
        />
      </g>
    </SVG>
  )
}
