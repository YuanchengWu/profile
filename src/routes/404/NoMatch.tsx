import { useEffect } from 'react'
import { useIntl } from 'react-intl'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { Alert } from '../../components/Alert'
import { useDescription } from '../../contexts/DescriptionContext'

const NotFoundStyles = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: auto;
`

export function NoMatch() {
  const navigate = useNavigate()
  const intl = useIntl()
  const { setDescription } = useDescription()

  useEffect(() => {
    setDescription(intl.formatMessage({ id: 'description.404' }))
    const redirect = delayRedirect()
    return () => clearTimeout(redirect)
  })

  function delayRedirect() {
    return setTimeout(() => navigate('/'), 3800)
  }

  return (
    <NotFoundStyles>
      <Alert messageId="alert.404" countdown timeout={3} />
    </NotFoundStyles>
  )
}
