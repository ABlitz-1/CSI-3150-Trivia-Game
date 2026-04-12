import React, { useState, useEffect } from 'react'

const Timer = ({ onTimeout, timeLimit }) => {
  const [timeLeft, setTimeLeft] = useState(timeLimit)

  useEffect(() => {

    setTimeLeft(timeLimit)
    const timerInt = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 0) {
          clearInterval(timerInt)
          onTimeout()
          return 0;
        }
        return prev - 1;
      })
    }, 1000)
    return () => clearInterval(timerInt)
  }, [timeLimit, onTimeout])

  return (<div>{timeLeft}s</div>)
}

export default Timer;