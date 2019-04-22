import React from 'react';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';

const SliderWrapper = styled.div`
  border: 2px solid ${props => props.theme.fill6};
  box-sizing: border-box;
  width: 106px;
  height: 27px;
  padding: 0;
  background-color: transparent;
  box-shadow: 0 0 5px ${props => props.theme.fill3},
    0 0 10px ${props => props.theme.fill4},
    0 0 15px ${props => props.theme.fill5};
    /* inset 0 0 5px ${props => props.theme.fill3},
    inset 0 0 10px ${props => props.theme.fill4},
    inset 0 0 15px ${props => props.theme.fill5}; */
`;

const Button = styled.button`
  font-family: 'T.C.SYSTEM';
  font-size: 18px;
  line-height: 24px;
  border: none;
  outline: none;
  width: 51px;
  height: 25px;
  color: ${props => props.theme.fill4};
  background-color: transparent;
  text-align: center;
  vertical-align: top;
  text-decoration: none;
  text-shadow: 0 0 8px ${props => props.theme.fill3},
    0 0 16px ${props => props.theme.fill3};

  ${props =>
    props.active
      ? `color: ${props.theme.fill1};
    background-color: ${props.theme.fill6};
    text-shadow: none;`
      : `:hover {
    color: ${props.theme.fill6};
    text-shadow: 0 0 5px ${props.theme.fill3},
      0 0 10px ${props.theme.fill4},
      0 0 15px ${props.theme.fill5};`}
`;

function LocaleSlider({ changeLanguage, intl }) {
  function isActiveLocale(locale) {
    return locale === intl.locale;
  }
  return (
    <SliderWrapper>
      <Button
        active={isActiveLocale('en')}
        onClick={() => changeLanguage('en')}
      >
        EN
      </Button>
      <Button
        active={isActiveLocale('zh')}
        onClick={() => changeLanguage('zh')}
      >
        中
      </Button>
    </SliderWrapper>
  );
}

export default injectIntl(LocaleSlider);
