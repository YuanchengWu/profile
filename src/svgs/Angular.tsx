import styled from 'styled-components'

const SVG = styled.svg`
  min-width: 18px;
  height: 18px;
  margin-right: 0.5em;
  fill: ${(props) => props.theme.fill6};
  filter: drop-shadow(0px 0px 8px ${(props) => props.theme.fill3})
    drop-shadow(0px 0px 16px ${(props) => props.theme.fill3});
`

export function Angular() {
  return (
    <SVG version="1.1" viewBox="2 2 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="m12 2.5 8.84 3.15-1.34 11.7-7.5 4.15-7.5-4.15-1.34-11.7 8.84-3.15m0 2.1-5.53 12.4h2.06l1.11-2.78h4.7l1.11 2.78h2.05l-5.5-12.4m1.62 7.9h-3.23l1.61-3.87z" />
    </SVG>
  )
}
