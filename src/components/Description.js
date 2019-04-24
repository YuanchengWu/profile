import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

import { DescriptionContext } from '../App';
import Typer from './Typer';

const DescriptionWrapper = styled.div`
  display: flex;
  margin-left: 2em;
  align-items: flex-start;
`;

const BarBackground = styled.div`
  width: 3px;
  min-height: 126px; /* use line height *4 */
  background-color: ${props => props.theme.fill3};
  box-shadow: 0 0 8px ${props => props.theme.fill3},
    0 0 16px ${props => props.theme.fill3};
`;

const Bar = styled.div`
  height: ${props => props.barHeight}px;
  width: 3px;
  background-color: ${props => props.theme.fill6}
  box-shadow: 0 0 5px ${props => props.theme.fill3},
    0 0 10px ${props => props.theme.fill4},
    0 0 15px ${props => props.theme.fill5};
  transition: height 1s ease-out;
`;

const Text = styled.p`
  font-family: 'Chakra Petch', sans-serif;
  font-size: 24px;
  line-height: 42px;
  margin: 0 32px;
  color: ${props => props.theme.fill6};
  text-shadow: 0 0 5px ${props => props.theme.fill3},
    0 0 10px ${props => props.theme.fill4},
    0 0 15px ${props => props.theme.fill5};
`;

export default function Description() {
  // eslint-disable-next-line
  const [windowWidth, setWindowWidth] = useState();
  const [lineHeight, setLineHeight] = useState(42);
  const { description } = useContext(DescriptionContext);

  const textRef = React.createRef();

  useEffect(() => {
    // Use height of text box for bar height
    setLineHeight(textRef.current.offsetHeight);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  function handleResize() {
    return setWindowWidth(window.innerWidth);
  }

  return (
    <DescriptionWrapper>
      <BarBackground>
        <Bar barHeight={lineHeight} />
      </BarBackground>
      <Text ref={textRef}>
        {description && (
          <Typer fullText={description} typingSpeed={10} cursor="▌" />
        )}
      </Text>
    </DescriptionWrapper>
  );
}
