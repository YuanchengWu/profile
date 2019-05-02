import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { injectIntl } from 'react-intl';

import Typer from '../../components/Typer';

const ExperienceItemStyles = styled.div`
  display: flex;
  flex-direction: column;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Technologies = styled.div`
  margin-left: 1em;
  height: 80px;
`;

const TechnologiesTitle = styled.h4`
  font-family: 'T.C.SYSTEM';
  font-size: 16px;
  font-weight: normal;
  color: ${props => props.theme.fill6};
  text-shadow: 0 0 5px ${props => props.theme.fill3},
    0 0 10px ${props => props.theme.fill4},
    0 0 15px ${props => props.theme.fill5};
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const TechnologyIcons = styled.div`
  align-self: flex-start;
  margin-top: 2em;
  transform-origin: left;
  transform: scale(2);
  animation: ${fadeIn} 0.5s linear 0.5s;
  animation-fill-mode: backwards;
`;

function ExperienceItem({ Icon, setDescription, children, intl }) {
  const [isHovering, setIsHovering] = useState(false);

  function handleMouseEnter() {
    setIsHovering(true);
  }

  function handleMouseLeave() {
    setIsHovering(false);
  }

  return (
    <ExperienceItemStyles
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Icon setDescription={setDescription} />
      <Technologies>
        {isHovering && (
          <>
            <TechnologiesTitle>
              <Typer
                fullText={intl.formatMessage({ id: 'experience.title' })}
                typingSpeed={10}
              />
            </TechnologiesTitle>
            <TechnologyIcons>{children}</TechnologyIcons>
          </>
        )}
      </Technologies>
    </ExperienceItemStyles>
  );
}

export default injectIntl(ExperienceItem);
