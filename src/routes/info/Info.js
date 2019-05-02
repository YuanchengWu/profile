import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import StickyLogo from '../../components/StickyLogo';

const InfoStyles = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3em 10%;
  align-items: center;
  min-height: min-content;
`;

const Article = styled.article`
  padding: 10px;
  max-width: 960px;
  font-family: 'Chakra Petch', sans-serif;
  white-space: pre-wrap;
  color: ${props => props.theme.fill6};
  text-shadow: 0 0 5px ${props => props.theme.fill3},
    0 0 10px ${props => props.theme.fill4},
    0 0 15px ${props => props.theme.fill5};
`;

const H1 = styled.h1`
  font-family: 'T.C.SYSTEM';
  font-size: 3em;
  font-weight: normal;
  text-transform: uppercase;
`;

const H2 = styled.h2`
  font-family: 'T.C.SYSTEM';
  font-size: 2em;
  font-weight: normal;
  text-transform: uppercase;
  margin-top: 3rem;
`;

const H3 = styled.h2`
  font-family: 'T.C.SYSTEM';
  font-size: 0.8em;
  font-weight: normal;
  text-transform: uppercase;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;

  &:before {
    content: '[ ';
  }

  &:after {
    content: ' ]';
  }
`;

const P = styled.p`
  font-size: 1em;
  margin-bottom: 0.5em;
`;

const A = styled.a`
  color: inherit;
`;

export default function Info({ setShowSplash }) {
  useEffect(() => {
    setShowSplash(false);
  });

  return (
    <InfoStyles>
      <Link to="/">
        <StickyLogo />
      </Link>
      <Article>
        <H1>
          <FormattedMessage id="info.title" />
        </H1>
        <H2>
          <FormattedMessage id="info.logo.title" />
        </H2>
        <H3>
          <FormattedMessage id="info.logo.subtitle" />
        </H3>
        <P>
          <FormattedMessage id="info.logo.subtitle.p1" />
        </P>
        <P>
          <FormattedMessage id="info.logo.subtitle.p2" />
        </P>
        <H3>
          <FormattedMessage id="info.logo.subtitle2" />
        </H3>
        <P>
          <FormattedMessage id="info.logo.subtitle2.p1" />
        </P>
        <H2>
          <FormattedMessage id="info.style.title" />
        </H2>
        <H3>
          <FormattedMessage id="info.style.subtitle" />
        </H3>
        <P>
          <FormattedMessage
            id="info.style.subtitle.p1"
            values={{
              link: (
                <A
                  href="https://en.wikipedia.org/wiki/Ace_Combat_04:_Shattered_Skies"
                  target="_blank"
                >
                  Ace Combat 04: Shattered Skies
                </A>
              )
            }}
          />
        </P>
        <H3>
          <FormattedMessage id="info.style.subtitle2" />
        </H3>
        <P>
          <FormattedMessage
            id="info.style.subtitle2.p1"
            values={{
              link: (
                <A href="https://sketch.cloud/s/o1gR0" target="_blank">
                  Sketch Cloud
                </A>
              )
            }}
          />
        </P>
        <H2>
          <FormattedMessage id="info.code.title" />
        </H2>
        <H3>
          <FormattedMessage id="info.code.subtitle" />
        </H3>
        <P>
          <FormattedMessage
            id="info.code.subtitle.p1"
            values={{
              DRY: (
                <A
                  href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself"
                  target="_blank"
                >
                  DRY
                </A>
              ),
              clean: (
                <A href="https://blog.cleancoder.com/" target="_blank">
                  clean
                </A>
              )
            }}
          />
        </P>
        <H3>
          <FormattedMessage id="info.code.subtitle2" />
        </H3>
        <P>
          <FormattedMessage
            id="info.code.subtitle2.p1"
            values={{
              Hooks: (
                <A
                  href="https://reactjs.org/docs/hooks-intro.html"
                  target="_blank"
                >
                  Hooks
                </A>
              )
            }}
          />
        </P>
        <P>
          <FormattedMessage
            id="info.code.subtitle2.p2"
            values={{
              repo: (
                <A
                  href="https://github.com/YuanchengWu/profile"
                  target="_blank"
                >
                  repo
                </A>
              )
            }}
          />
        </P>
      </Article>
    </InfoStyles>
  );
}
