import { useContext, useEffect, useState } from 'react'
import QuizContext from '../QuizContext.jsx'
import { useNavigate } from 'react-router-dom'

const Result = () => {
  const [score, scoreDispatch] = useContext(QuizContext)
  const navigate = useNavigate()

  useEffect(() => {
    if(score === null) {
      navigate()
    }
  }, [])

  const goToMainMenu = () => {
    scoreDispatch({
      type: 'RESET_SCORE',
    })
    navigate('/')
  }

  const retakeQuiz = () => {
    scoreDiscaptch({
      type: 'RESET_SCORE',
    })
    navigate(-1)
  }

  const scorePct = Math.round((score / 10) * 100)
  
  return (
    <div>
      <h3>Result</h3>
      <h5>You scored {score} out of {10} ({scorePct}%)</h5>
      <section>
        <button onClick={goToMainMenu}>Main Menu</button>
        <button onClick={retakeQuiz}>Retake Quiz</button>
      </section>
    </div>
  )
}

export default Result