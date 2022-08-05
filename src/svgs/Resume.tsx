import { useIntl } from 'react-intl'
import styled from 'styled-components'
import { useDescription } from '../contexts/DescriptionContext'

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

export function Resume() {
  const intl = useIntl()
  const { setDescription } = useDescription()

  function handleMouseEnter() {
    setDescription(intl.formatMessage({ id: `description.contact.Resume` }))
  }

  function handleMouseLeave() {
    setDescription(intl.formatMessage({ id: 'description.contact.default' }))
  }
  return (
    <SVG
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      viewBox="0 0 280 347"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M280 67v280H0V0h213l67 67zm-22 0l-45-45v45h45zm7 265V82h-67V15H15v317h250zm-161.6-73.6V289H52.5v24.2h-5.3v-55h56.2zm-5.3 5.3H52.5v20.1h45.6v-20.1zm55.1-5.3l14.7 13.3v26.8l-14.7 14.8h-41.5v-55h41.5zm-1.3 5.3h-34.8v44.2h34.8l10.7-10.7v-22.8l-10.7-10.7zm80.6 0h-50.9v20.1h50.9v5.3h-50.9v24.2h-5.3v-55h56.2v5.4z" />
    </SVG>
  )
}
