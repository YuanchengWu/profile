import { useRef, useEffect } from 'react'

/**
 * Taken from <https://overreacted.io/making-setinterval-declarative-with-react-hooks/>
 */
export function useInterval(callback: Function, delay: number | null) {
  const savedCallback = useRef<Function>()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick() {
      savedCallback.current?.()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
