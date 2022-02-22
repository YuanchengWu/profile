import React from 'react'
import styled from 'styled-components'

const PageStyle = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`

function PageContent(props) {
  return <PageStyle>{props.children}</PageStyle>
}

function areEqual(prevProp, nextProp) {
  return prevProp.showSplash === nextProp.showSplash
}

export default React.memo(PageContent, areEqual)
