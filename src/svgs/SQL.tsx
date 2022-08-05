import styled from 'styled-components'

const SVG = styled.svg`
  min-width: 18px;
  height: 18px;
  margin-right: 0.5em;
  fill: ${(props) => props.theme.fill6};
  filter: drop-shadow(0px 0px 8px ${(props) => props.theme.fill3})
    drop-shadow(0px 0px 16px ${(props) => props.theme.fill3});
`

export function SQL() {
  return (
    <SVG viewBox="0 0 16 18" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 0C3.58 0 0 1.79 0 4s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zM0 6v3c0 2.21 3.58 4 8 4s8-1.79 8-4V6c0 2.21-3.58 4-8 4S0 8.21 0 6zm0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4z" />
    </SVG>
  )
}
