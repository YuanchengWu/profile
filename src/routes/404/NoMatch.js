import React, { useEffect } from 'react'
import { injectIntl } from 'react-intl'
import styled from 'styled-components'

import Alert from '../../components/Alert'

const NotFoundStyles = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: auto;
`

function NoMatch({ setDescription, intl, history }) {
  useEffect(() => {
    setDescription(intl.formatMessage({ id: 'description.404' }))
    const redirect = delayRedirect()
    return () => clearTimeout(redirect)
  })

  function delayRedirect() {
    return setTimeout(() => history.push('/'), 3800)
  }

  return (
    <NotFoundStyles>
      <Alert messageId="alert.404" countdown timeout={3} />
    </NotFoundStyles>
  )
}

export default injectIntl(NoMatch)
