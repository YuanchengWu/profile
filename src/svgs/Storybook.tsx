import styled from 'styled-components'

const SVG = styled.svg`
  min-width: 18px;
  height: 18px;
  margin-right: 0.5em;
  fill: ${(props) => props.theme.fill6};
  filter: drop-shadow(0px 0px 8px ${(props) => props.theme.fill3})
    drop-shadow(0px 0px 16px ${(props) => props.theme.fill3});
`

export function Storybook() {
  return (
    <SVG viewBox="0 0 15 18" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.446.849a.905.905 0 0 1 .001.056v16.19a.905.905 0 0 1-.945.904l-12.08-.542a.905.905 0 0 1-.864-.87L.001 1.728A.905.905 0 0 1 .849.792l9.904-.62-.085 2.04c0 .021.003.042.012.06l.016.028c.045.06.13.07.189.026l.792-.601.67.527a.135.135 0 0 0 .218-.111L12.492.063l.994-.061a.905.905 0 0 1 .96.847Zm-6.95 2.214c-2.355 0-3.675 1.28-3.675 3.199 0 3.343 4.51 3.407 4.51 5.23 0 .512-.25.816-.801.816-.719 0-1.003-.367-.97-1.615 0-.27-2.74-.355-2.823 0-.213 3.023 1.67 3.895 3.826 3.895 2.089 0 3.726-1.113 3.726-3.128 0-3.583-4.578-3.487-4.578-5.262 0-.72.535-.816.852-.816.334 0 .936.059.886 1.402 0 .353 2.371.184 2.69-.064 0-2.397-1.287-3.657-3.643-3.657Z" />
    </SVG>
  )
}
