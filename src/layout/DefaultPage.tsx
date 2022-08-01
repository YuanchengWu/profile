import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './Header'

import { About } from '../routes/about/About'
import { Skills } from '../routes/skills/Skills'
import { Projects } from '../routes/projects/Projects'
import { Experience } from '../routes/experience/Experience'
import { Contact } from '../routes/contact/Contact'
import { NoMatch } from '../routes/404/NoMatch'
import { Navbar } from '../components/Navbar'
import { RouteProps } from '../routes/RouteProps'

export function DefaultPage({ setShowSplash }: RouteProps) {
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
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route element={<NoMatch />} />
      </Routes>
    </>
  )
}
