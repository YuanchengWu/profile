import React, { useEffect } from 'react';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';

import LinkedIn from '../../svgs/LinkedIn';
import GitHub from '../../svgs/GitHub';
import Blog from '../../svgs/Blog';
import Mail from '../../svgs/Mail';

const ContactStyles = styled.section`
  margin: auto 10%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-evenly;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactTitle = styled.h4`
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

function Contact({ setDescription, intl }) {
  useEffect(() => {
    setDescription(intl.formatMessage({ id: 'description.contact.default' }));
  }, []);
  return (
    <ContactStyles>
      <ContactContainer>
        <ContactTitle>
          {intl.formatMessage({ id: 'experience.LinkedIn' })}
        </ContactTitle>
        <a href="https://www.linkedin.com/in/yuancheng-wu/" target="_">
          <LinkedIn setDescription={setDescription} />
        </a>
      </ContactContainer>
      <ContactContainer>
        <ContactTitle>
          {intl.formatMessage({ id: 'experience.GitHub' })}
        </ContactTitle>
        <a href="https://github.com/YuanchengWu" target="_">
          <GitHub setDescription={setDescription} />
        </a>
      </ContactContainer>
      <ContactContainer>
        <ContactTitle>
          {intl.formatMessage({ id: 'experience.Blog' })}
        </ContactTitle>
        <a href="https://codegallop.wordpress.com/" target="_">
          <Blog setDescription={setDescription} />
        </a>
      </ContactContainer>
      <ContactContainer>
        <ContactTitle>
          {intl.formatMessage({ id: 'experience.Email' })}
        </ContactTitle>
        <a href="mailto:yuanchengwu11@gmail.com">
          <Mail setDescription={setDescription} />
        </a>
      </ContactContainer>
    </ContactStyles>
  );
}

export default injectIntl(Contact);
