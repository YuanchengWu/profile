import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ReactGA from 'react-ga'

export const usePageTracking = () => {
  const location = useLocation()
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    if (
      !window.location.href.includes('localhost') &&
      process.env.REACT_APP_GA_TRACKING_ID
    ) {
      ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID)
    }
    setInitialized(true)
  }, [])

  useEffect(() => {
    if (initialized) {
      ReactGA.pageview(location.pathname + location.search)
    }
  }, [initialized, location])
}