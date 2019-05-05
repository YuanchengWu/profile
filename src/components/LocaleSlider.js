import React from 'react';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';
import ReactGA from 'react-ga';

import { cookieService } from '../services/cookieService';

const SliderWrapper = styled.div`
  border: 2px solid ${props => props.theme.fill6};
  flex: 1;
  min-width: 106px;
  max-width: 106px;
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
  font-family: 'T.C.SYSTEM', sans-serif;
  font-size: 18px;
  line-height: 1.6em;
  border: none;
  outline: none;
  width: 51px;
  height: 100%;
  color: ${props => props.theme.fill4};
  background-color: transparent;
  text-align: center;
  vertical-align: top;
  text-decoration: none;
  text-shadow: 0 0 8px ${props => props.theme.fill3},
    0 0 16px ${props => props.theme.fill3};

  ${props =>
    props.active
      ? `color: ${props.theme.fill3};
    background-color: ${props.theme.fill6};
    text-shadow: none;`
      : `:hover {
    color: ${props.theme.fill6};
    text-shadow: 0 0 5px ${props.theme.fill3},
      0 0 10px ${props.theme.fill4},
      0 0 15px ${props.theme.fill5};`}
`;

function LocaleSlider({ changeLanguage, intl }) {
  const buttons = [
    { locale: 'en', name: 'EN' },
    { locale: 'zh', name: '中' }
  ].map(lang => (
    <Button
      key={lang.locale}
      active={isActiveLocale(lang.locale)}
      onClick={() => handleChangeLanguage(lang.locale)}
    >
      {lang.name}
    </Button>
  ));

  function isActiveLocale(locale) {
    return locale === intl.locale;
  }

  function handleChangeLanguage(locale) {
    cookieService.setCookie('locale', locale, 4000);
    ReactGA.event({
      category: 'Language',
      action: 'Language Changed to ' + locale
    });
    changeLanguage(locale);
  }

  return <SliderWrapper>{buttons}</SliderWrapper>;
}

export default injectIntl(React.memo(LocaleSlider, () => true));
