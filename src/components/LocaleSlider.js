import React from 'react';
import styled from 'styled-components';

const Button = styled.button``;

export default function LocaleSlider({ changeLanguage }) {
  return (
    <>
      <Button onClick={() => changeLanguage('en')}>English</Button>
      <Button onClick={() => changeLanguage('zh')}>中文</Button>
    </>
  );
}
