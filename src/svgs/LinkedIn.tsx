import { useIntl } from 'react-intl'
import styled from 'styled-components'
import { useDescription } from '../contexts/DescriptionContext'

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

export function LinkedIn() {
  const intl = useIntl()
  const { setDescription } = useDescription()

  function handleMouseEnter() {
    setDescription(intl.formatMessage({ id: `description.contact.LinkedIn` }))
  }

  function handleMouseLeave() {
    setDescription(intl.formatMessage({ id: 'description.contact.default' }))
  }
  return (
    <SVG
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      viewBox="0 0 659 663"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M.5 48A48 48 0 0 1 49 .4H610a48 48 0 0 1 48.6 47.4v567.3a48 48 0 0 1-48.6 47.5H49A48 48 0 0 1 .5 615.3V47.9zM200 554.7v-299h-99.4v299H200zM150.3 215c34.6 0 56.2-23 56.2-51.7-.6-29.3-21.6-51.7-55.6-51.7S94.7 134 94.7 163.3c0 28.7 21.6 51.7 55 51.7h.6zM255 554.8h99.3v-167c0-8.9.7-17.8 3.3-24.2 7.2-17.9 23.5-36.4 51-36.4 36 0 50.4 27.5 50.4 67.7v159.9h99.3V383.4c0-91.9-49-134.6-114.4-134.6-53.6 0-77.1 30-90.2 50.3h.6v-43.3H255c1.3 28 0 299 0 299z" />
    </SVG>
  )
}
