import React from 'react'
import { injectIntl } from 'react-intl'
import styled from 'styled-components'

const SVG = styled.svg`
  min-width: 185px;
  height: 100px;
  margin: 1em;
  padding-bottom: 1em;
  fill: ${(props) => props.theme.fill6};
  filter: drop-shadow(0px 0px 8px ${(props) => props.theme.fill3})
    drop-shadow(0px 0px 16px ${(props) => props.theme.fill3});
  transition: filter 0.2s ease-in;

  &:hover {
    filter: drop-shadow(0 0 1px ${(props) => props.theme.fill3})
      drop-shadow(0 0 2px ${(props) => props.theme.fill4})
      drop-shadow(0 0 4px ${(props) => props.theme.fill5});
    transition: filter 0.2s ease;
  }
`

function Intel({ setDescription, intl }) {
  function handleMouseEnter() {
    setDescription(intl.formatMessage({ id: `description.experience.Intel` }))
  }

  function handleMouseLeave() {
    setDescription(intl.formatMessage({ id: 'description.experience.default' }))
  }
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 569.58 375.61"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <path d="M270.56 334.83C158 345.22 40.7 328.86 24.26 240.9c-8.03-43.36 11.75-89.34 37.95-117.92v-15.26c-47.2 41.4-72.78 93.78-58.05 155.66 18.82 79.37 119.48 124.32 273.16 109.4 60.82-5.9 140.38-25.46 195.72-55.86v-43.15c-50.23 29.92-133.29 54.65-202.48 61.06zm296.5-228.14C540.36-23.65 287.28-31.9 124.15 67.4v10.97C287.1-5.41 518.23-4.91 539.28 115.16c7.06 39.72-15.32 81.1-55.29 104.93v31.15c48.08-17.64 97.4-74.68 83.06-144.55z" />
      <path d="M463.94 87.71h-29.51v131.43c0 15.4 7.45 28.8 29.51 30.94V87.71zM112.56 135.7H83l-.02 85.87c0 15.46 7.47 28.84 29.58 30.94V135.7zM83 91.71h29.47v27.97H83zm206.3 159.44c-23.9 0-34-16.6-34-32.96V104.18h29.25v31.52h22.03v23.63h-22.03v57.05c0 6.67 3.17 10.39 10.12 10.39h11.91v24.38H289.3m53.83-48.58c0 14.97 9.36 25.98 25.93 25.98 12.97 0 19.37-3.6 26.86-11L414 234.75c-11.59 11.45-23.73 18.41-45.16 18.41-28 0-54.82-15.28-54.82-59.82 0-38.08 23.44-59.6 54.17-59.6 31.24 0 49.2 25.2 49.2 58.27v10.56h-74.26m23.78-44.64c-10.01 0-17.7 5.15-20.97 12.11-1.9 4.18-2.6 7.44-2.81 12.58h45.08c-.57-12.58-6.27-24.7-21.3-24.7zM192 159.33c8.58 0 12.15 4.24 12.15 11.12v80.87h29.26v-81.04c0-16.42-8.75-34.55-34.45-34.55l-60.44-.03v115.62h29.27v-92h24.21zM495.7 111.2c-6.5 0-11.7-5.25-11.7-11.75a11.7 11.7 0 0 1 11.7-11.74 11.8 11.8 0 0 1 11.79 11.74c0 6.5-5.32 11.75-11.79 11.75zm0-21.53a9.75 9.75 0 0 0-9.67 9.78 9.69 9.69 0 0 0 9.67 9.74 9.8 9.8 0 0 0 9.81-9.74 9.87 9.87 0 0 0-9.8-9.78zm5.2 16.82h-2.19a.5.5 0 0 1-.44-.3l-2.97-5.04a.88.88 0 0 0-.42-.23h-1.36v5.03c0 .25-.17.54-.49.54h-1.98c-.3 0-.5-.29-.5-.54V93.27c0-.75.25-1.05.9-1.14.71-.08 2.57-.17 3.6-.17 3.67 0 5.81 1.07 5.81 4.47v.25c0 2.1-1.03 3.24-2.64 3.75l3.1 5.26a.94.94 0 0 1 .07.37c0 .2-.11.43-.48.43zm-2.83-10.06c0-1.42-.89-1.86-2.77-1.86h-1.87v4.02l1.87.06c1.88 0 2.77-.63 2.77-1.97v-.25z" />
    </SVG>
  )
}

export default injectIntl(Intel)
