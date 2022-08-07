import styled from 'styled-components'
import { useIntl } from 'react-intl'
import { useResizeDetector } from 'react-resize-detector'

import { Typer } from './Typer'
import { useDescription } from '../contexts/DescriptionContext'

const DescriptionWrapper = styled.div`
  display: flex;
  flex: 1;
  margin-left: 2em;
  align-items: flex-start;
`

const BarBackground = styled.div`
  width: 3px;
  min-height: 126px; /* use line height *4 */
  background-color: ${(props) => props.theme.fill3};
  box-shadow: 0 0 8px ${(props) => props.theme.fill3},
    0 0 16px ${(props) => props.theme.fill3};
`

const Bar = styled.div<{ barHeight: number }>`
  height: ${(props) => props.barHeight}px;
  max-height: 126px;
  width: 3px;
  background-color: ${(props) => props.theme.fill6};
  box-shadow: 0 0 5px ${(props) => props.theme.fill3},
    0 0 10px ${(props) => props.theme.fill4},
    0 0 15px ${(props) => props.theme.fill5};
  transition: height 1s ease-out;
`

const Text = styled.div`
  font-family: 'Chakra Petch', sans-serif;
  font-size: 24px;
  line-height: 42px;
  white-space: pre-wrap;
  margin: 0 32px;
  color: ${(props) => props.theme.fill6};
  text-shadow: 0 0 5px ${(props) => props.theme.fill3},
    0 0 10px ${(props) => props.theme.fill4},
    0 0 15px ${(props) => props.theme.fill5};
`

export function Description() {
  const intl = useIntl()
  const { description } = useDescription()
  const { height, ref } = useResizeDetector()

  return (
    <DescriptionWrapper>
      <BarBackground>
        <Bar barHeight={height ?? 0} />
      </BarBackground>
      <Text ref={ref}>
        {/* // TODO: use resize observer instead of external library */}
        {description && (
          <Typer
            fullText={description}
            typingSpeed={intl.locale === 'en' ? 7 : 25}
            cursor={intl.formatMessage({ id: 'text.cursor' })}
          />
        )}
      </Text>
    </DescriptionWrapper>
  )
}
