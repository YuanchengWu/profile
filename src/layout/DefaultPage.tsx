import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import Header from './Header'

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
      <Outlet />
    </>
  )
}
