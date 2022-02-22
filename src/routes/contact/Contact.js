import React, { useEffect } from 'react'
import styled from 'styled-components'
import { injectIntl } from 'react-intl'
import ReactGA from 'react-ga'

import LinkedIn from '../../svgs/LinkedIn'
import GitHub from '../../svgs/GitHub'
import Blog from '../../svgs/Blog'
import Mail from '../../svgs/Mail'
import Resume from '../../svgs/Resume'

const ContactStyles = styled.section`
  margin: auto 10%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-evenly;
  animation: fade-in 0.5s;

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContactTitle = styled.h4`
  font-family: 'T.C.SYSTEM', sans-serif;
  font-size: 16px;
  font-weight: normal;
  color: ${(props) => props.theme.fill6};
  text-shadow: 0 0 5px ${(props) => props.theme.fill3},
    0 0 10px ${(props) => props.theme.fill4},
    0 0 15px ${(props) => props.theme.fill5};
  text-transform: uppercase;
  margin-bottom: 16px;

  &:before {
    content: '[ ';
  }

  &:after {
    content: ' ]';
  }
`

function Contact({ setDescription, intl }) {
  useEffect(() => {
    setDescription(intl.formatMessage({ id: 'description.contact.default' }))
  })

  function handleClick(linkName) {
    ReactGA.event({
      category: 'External Links',
      action: 'Accessed ' + linkName,
    })
  }

  return (
    <ContactStyles>
      <ContactContainer>
        <ContactTitle>
          {intl.formatMessage({ id: 'contact.LinkedIn' })}
        </ContactTitle>
        <a
          href="https://www.linkedin.com/in/yuancheng-wu/"
          target="_blank"
          rel="noreferrer noopener"
          onClick={() => handleClick('LinkedIn')}
        >
          <LinkedIn setDescription={setDescription} />
        </a>
      </ContactContainer>
      <ContactContainer>
        <ContactTitle>
          {intl.formatMessage({ id: 'contact.GitHub' })}
        </ContactTitle>
        <a
          href="https://github.com/YuanchengWu"
          target="_blank"
          rel="noreferrer noopener"
          onClick={() => handleClick('GitHub')}
        >
          <GitHub setDescription={setDescription} />
        </a>
      </ContactContainer>
      <ContactContainer>
        <ContactTitle>
          {intl.formatMessage({ id: 'contact.Blog' })}
        </ContactTitle>
        <a
          href="https://codegallop.wordpress.com/"
          target="_blank"
          rel="noreferrer noopener"
          onClick={() => handleClick('blog')}
        >
          <Blog setDescription={setDescription} />
        </a>
      </ContactContainer>
      <ContactContainer>
        <ContactTitle>
          {intl.formatMessage({ id: 'contact.Email' })}
        </ContactTitle>
        <a
          href="mailto:john.wu@fullgallop.me"
          onClick={() => handleClick('email')}
        >
          <Mail setDescription={setDescription} />
        </a>
      </ContactContainer>
      <ContactContainer>
        <ContactTitle>
          {intl.formatMessage({ id: 'contact.Resume' })}
        </ContactTitle>
        <a
          href="https://dl.dropboxusercontent.com/s/79mxo4b4ophaj4k/Resume.pdf"
          onClick={() => handleClick('resume')}
        >
          <Resume setDescription={setDescription} />
        </a>
      </ContactContainer>
    </ContactStyles>
  )
}

export default injectIntl(Contact)
