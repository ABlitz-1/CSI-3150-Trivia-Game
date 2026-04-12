import React, { useState, useEffect, useRef } from 'react'

const Timer = ({ onTimeout, timeLimit, questionId }) => {
  const [timeLeft, setTimeLeft] = useState(timeLimit)
  const onTimeoutRef = useRef(onTimeout)

  useEffect(() => {
    onTimeoutRef.current = onTimeout
  }, [onTimeout])

  useEffect(() => {

    setTimeLeft(timeLimit)
    const timerInt = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerInt)
          onTimeoutRef.current()
          return 0;
        }
        return prev - 1;
      })
    }, 1000)
    return () => clearInterval(timerInt)
  }, [questionId, timeLimit])

  return (<div>{timeLeft}s</div>)
}

export default Timer;