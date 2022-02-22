import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { injectIntl } from 'react-intl'

import { withTracker } from '../withTracker'
import Header from './Header'

import About from '../routes/about/About'
import Skills from '../routes/skills/Skills'
import Projects from '../routes/projects/Projects'
import Experience from '../routes/experience/Experience'
import Contact from '../routes/contact/Contact'
import NoMatch from '../routes/404/NoMatch'
import Navbar from '../components/Navbar'

const TrackedAbout = withTracker(About)
const TrackedSkills = withTracker(Skills)
const TrackedProjects = withTracker(Projects)
const TrackedExperience = withTracker(Experience)
const TrackedContact = withTracker(Contact)
const TrackedNoMatch = withTracker(NoMatch)

function DefaultPage({ setShowSplash, setDescription, intl }) {
  useEffect(() => {
    setShowSplash(false)
  })

  return (
    // TODO: put scroll fading here
    <>
      <Header>
        <Navbar />
      </Header>
      <Routes>
        <Route
          path="/about"
          render={(props) => (
            <TrackedAbout {...props} setDescription={setDescription} />
          )}
        />
        <Route
          path="/skills"
          render={(props) => (
            <TrackedSkills {...props} setDescription={setDescription} />
          )}
        />
        <Route
          path="/projects"
          render={(props) => (
            <TrackedProjects {...props} setDescription={setDescription} />
          )}
        />
        <Route
          path="/experience"
          render={(props) => (
            <TrackedExperience {...props} setDescription={setDescription} />
          )}
        />
        <Route
          path="/contact"
          render={(props) => (
            <TrackedContact {...props} setDescription={setDescription} />
          )}
        />
        <Route
          render={(props) => (
            <TrackedNoMatch {...props} setDescription={setDescription} />
          )}
        />
      </Routes>
    </>
  )
}

export default injectIntl(DefaultPage)
