import { useEffect, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'

import { useInterval } from '../hooks/useInterval'

interface TyperProps {
  fullText: string
  /**
   * The delay, in milliseconds, between each character.
   */
  typingSpeed: number
  /**
   * The character used to render the trailing typing cursor.
   * @default ''
   */
  cursor?: string
}

export function Typer({ fullText, typingSpeed, cursor = '' }: TyperProps) {
  const [text, setText] = useState('')
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    setText('')
    setIsDone(false)
  }, [fullText])

  useInterval(
    () => {
      if (text === fullText) setIsDone(true)
      else setText(fullText.slice(0, text.length + 1))
    },
    isDone ? null : typingSpeed
  )

  return (
    <>
      <span>{text}</span>
      <Blinking blink={isDone}>{cursor}</Blinking>
    </>
  )
}

const blink = keyframes`
  to {
    opacity: 0;
  }
`

const Blinking = styled.span<{ blink: boolean }>`
  animation: ${(props) =>
    props.blink &&
    css`
      ${blink} 1s cubic-bezier(0, -0.82, 0.43, 0.6) infinite;
    `};
`
