import { useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { useIntl } from 'react-intl'
import ReactGA from 'react-ga'

import { useDescription } from '../../contexts/DescriptionContext'
import { Blog, GitHub, LinkedIn, Mail, Resume } from '../../svgs'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const ContactStyles = styled.section`
  margin: auto 10%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-evenly;
  animation: ${fadeIn} 0.5s;
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

export function Contact() {
  const intl = useIntl()
  const { setDescription } = useDescription()

  useEffect(() => {
    setDescription(intl.formatMessage({ id: 'description.contact.default' }))
  }, [intl, setDescription])

  function handleClick(linkName: string) {
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
          <LinkedIn />
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
          <GitHub />
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
          <Blog />
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
          <Mail />
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
          <Resume />
        </a>
      </ContactContainer>
    </ContactStyles>
  )
}
