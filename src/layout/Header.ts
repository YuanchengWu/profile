import { memo } from 'react'
import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  margin: 3em auto;
  justify-content: center;
`

// FIXME: bad practice
export default memo(Header, () => true)
