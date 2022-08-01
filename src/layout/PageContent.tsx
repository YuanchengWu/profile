import { memo, ReactNode } from 'react'
import styled from 'styled-components'

const PageStyle = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`

interface PageContentProps {
  showSplash: boolean
  children: ReactNode
}

function PageContent({ children }: PageContentProps) {
  return <PageStyle>{children}</PageStyle>
}

function areEqual(prevProp: PageContentProps, nextProp: PageContentProps) {
  return prevProp.showSplash === nextProp.showSplash
}

export default memo(PageContent, areEqual)
