import { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { useIntl } from 'react-intl'

import { Icon } from './Icon'
import SplashText from './SplashText'
import { RouteProps } from '../RouteProps'

const fade = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

const SplashStyle = styled.div<{ fadeDelay: number }>`
  margin: 0 10%;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`

export function Splash({ setShowSplash }: RouteProps) {
  const [startTyping, setStartTyping] = useState(false)
  const intl = useIntl()

  const typingSpeed = 50
  const splashDuration = 2
  const splashSustain = 1.5
  const text = intl.formatMessage({ id: 'splash.text' })
  const cursor = intl.formatMessage({ id: 'text.cursor' })
  const fadeDelay =
    splashDuration + (text.length * typingSpeed) / 1000 + splashSustain
  // TODO: add pause after period

  useEffect(() => {
    if (!startTyping) {
      const typingTimer = setTimeout(
        () => setStartTyping(true),
        splashDuration * 1000
      )
      setTimeout(() => setShowSplash(false), (fadeDelay + splashSustain) * 1000)
      return function cleanUp() {
        clearTimeout(typingTimer)
      }
    }
  })

  return (
    <SplashStyle fadeDelay={fadeDelay}>
      <Icon animate duration={splashDuration} />
      <SplashText
        text={text}
        cursor={cursor}
        startTyping={startTyping}
        typingSpeed={typingSpeed}
      />
    </SplashStyle>
  )
}
