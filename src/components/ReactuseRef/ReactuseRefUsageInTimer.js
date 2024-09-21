import React, { useState, useEffect, useRef } from "react"

function ReactuseRefUsageInTimer() {
  const useInterval = (callback, delay) => {
    const savedCallback = React.useRef()

    useEffect(() => {
      savedCallback.current = callback
    }, [callback])

    useEffect(() => {
      const tick = () => {
        savedCallback.current()
      }
      if (delay !== null) {
        let id = setInterval(tick, delay)
        return () => clearInterval(id)
      }
    }, [delay])
  }

  const Timer = (props) => {
    const [seconds, setSeconds] = React.useState(0)
    useInterval(() => {
      setSeconds(seconds + 1)
    }, 1000)

    return <p>{seconds}</p>
  }
  const [timer, setTimer] = useState(0)
  const intervalRef = useRef()
  useEffect(() => {
    intervalRef.current = setInterval(
      () => setTimer((prevTimer) => prevTimer + 1),
      1000
    )
    return () => {
      clearInterval(intervalRef.current)
    }
  })
  return (
    <div>
      <h3>Building Timer using React useRef Hook</h3>
      <p>timer-{timer}</p>
      <button onClick={() => clearInterval(intervalRef.current)}>
        Clear Timer
      </button>
    </div>
  )
}
export default ReactuseRefUsageInTimer
