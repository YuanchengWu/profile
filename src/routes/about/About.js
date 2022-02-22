import React, { useEffect } from 'react'
import styled from 'styled-components'
import { injectIntl } from 'react-intl'

import Map from './Map'
import Paragraph from '../../components/Paragraph'

const AboutStyles = styled.section`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: auto 10%;
  overflow: visible;
`

function About({ setDescription, intl }) {
  useEffect(() => {
    setDescription(intl.formatMessage({ id: 'description.default' }))
  })

  function handleMouseEnterArticle() {
    setDescription(intl.formatMessage({ id: 'description.about.article' }))
  }

  function handleMouseEnterMap() {
    setDescription(intl.formatMessage({ id: 'description.about.map' }))
  }

  function handleMouseLeave() {
    setDescription(intl.formatMessage({ id: 'description.default' }))
  }

  return (
    <AboutStyles>
      <article
        onMouseEnter={handleMouseEnterArticle}
        onMouseLeave={handleMouseLeave}
      >
        <Paragraph
          messageId="about.paragraph1"
          messageDescription="About page text content"
        />
        <Paragraph
          messageId="about.paragraph2"
          messageDescription="About page text content"
        />
        <Paragraph
          messageId="about.paragraph3"
          messageDescription="About page text content"
        />
      </article>
      <div onMouseEnter={handleMouseEnterMap} onMouseLeave={handleMouseLeave}>
        <Map locale={intl.locale} />
      </div>
    </AboutStyles>
  )
}

export default injectIntl(About)
