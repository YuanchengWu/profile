import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useIntl } from 'react-intl'

import { Typer } from '../../components/Typer'
import { useDescription } from '../../contexts/DescriptionContext'

const StyledLink = styled(Link)`
  font-family: 'T.C.SYSTEM', sans-serif;
  font-size: 32px;
  text-transform: uppercase;
  text-decoration: none;
  color: ${(props) => props.theme.fill4};
  text-shadow: 0 0 8px ${(props) => props.theme.fill3},
    0 0 16px ${(props) => props.theme.fill3};

  :hover {
    color: ${(props) => props.theme.fill6};
    text-shadow: 0 0 5px ${(props) => props.theme.fill3},
      0 0 10px ${(props) => props.theme.fill4},
      0 0 15px ${(props) => props.theme.fill5};
  }
`

const ListItem = styled.li`
  list-style: none;
  margin-bottom: 32px;
`

interface MenuItemProps {
  name: string
  path: string
}

export function MenuItem({ name, path }: MenuItemProps) {
  const intl = useIntl()
  const { setDescription } = useDescription()

  function handleMouseEnter() {
    setDescription(intl.formatMessage({ id: `description.main.${name}` }))
  }

  function handleMouseLeave() {
    setDescription(intl.formatMessage({ id: 'description.main' }))
  }

  return (
    <ListItem>
      <StyledLink
        to={path}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Typer
          fullText={intl.formatMessage({ id: `main.${name}` })}
          typingSpeed={25}
        />
      </StyledLink>
    </ListItem>
  )
}

export default MenuItem
