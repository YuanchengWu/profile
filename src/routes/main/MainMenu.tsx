import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useIntl } from 'react-intl'

import { Splash } from './Splash'
import MenuItem from './MenuItem'
import StickyLogo from '../../components/StickyLogo'
import { Typer } from '../../components/Typer'
import { useDescription } from '../../contexts/DescriptionContext'
import { RouteProps } from '../RouteProps'

const MainWrapper = styled.div`
  /* padding-bottom: 2.5rem; */
`

const Title = styled.h2`
  font-family: 'T.C.SYSTEM', sans-serif;
  font-size: 32px;
  font-weight: normal;
  color: ${(props) => props.theme.fill6};
  text-shadow: 0 0 5px ${(props) => props.theme.fill3},
    0 0 10px ${(props) => props.theme.fill4},
    0 0 15px ${(props) => props.theme.fill5};
  text-transform: uppercase;
  margin: 72px 0 0 72px;
`

const MenuItemList = styled.ul`
  margin: 96px 0 0 120px;
  padding: 0;
`

interface MainMenuProps extends RouteProps {
  showSplash: boolean
}

export function MainMenu({ showSplash, setShowSplash }: MainMenuProps) {
  const intl = useIntl()
  const { setDescription } = useDescription()

  // set default message before user interaction
  useEffect(() => {
    setDescription(intl.formatMessage({ id: 'description.main' }))
  })

  function handleMouseEnter() {
    setDescription(intl.formatMessage({ id: 'description.main.info' }))
  }

  function handleMouseLeave() {
    setDescription(intl.formatMessage({ id: 'description.main' }))
  }

  return (
    <MainWrapper>
      {showSplash && <Splash setShowSplash={setShowSplash} />}
      {!showSplash && (
        <>
          <Title>
            <Typer
              fullText={intl.formatMessage({ id: 'main.title' })}
              typingSpeed={25}
            />
          </Title>
          <Link
            to="/info"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <StickyLogo />
          </Link>
          <MenuItemList>
            {['about', 'skills', 'projects', 'experience', 'contact'].map(
              (name) => (
                <MenuItem key={name} name={name} path={`/${name}`} />
              )
            )}
          </MenuItemList>
        </>
      )}
    </MainWrapper>
  )
}
