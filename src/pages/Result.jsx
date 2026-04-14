import { useContext, useEffect, useState } from 'react'
import QuizContext from '../QuizContext'
import { useNavigate } from 'react-router-dom'

const Result = () => {
  const [highscore, setHighScore] = useState(localStorage.getItem('highScore'))
  const [finalscore, setFinalScore] = useState(localStorage.getItem('finalScore'))
  const [score, scoreDispatch] = useContext(QuizContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (score > 0) {
      setFinalScore(score)
      localStorage.setItem('finalScore', JSON.stringify(score))
    } else if (score > highscore) {
      setHighScore(score)
      localStorage.setItem('highScore', JSON.stringify(score))
    }
  }, [])

  const goToMainMenu = () => {
    scoreDispatch({
      type: 'RESET_SCORE',
    })
    navigate('/')
  }

  const retakeQuiz = () => {
    scoreDispatch({
      type: 'RESET_SCORE',
    })
    navigate(-1)
  }

  const scorePct = Math.round((finalscore / 10) * 100)
  
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center my-5">
      <h3>Result</h3>
      <h5>You scored {finalscore} out of {10} ({scorePct}%)</h5>
      <section className="d-flex flex-row align-items-center justify-content-center my-3 w-100">
        <button className="btn btn-info text-white w-25 mx-3" onClick={goToMainMenu}>
          Main Menu
        </button>
        <button className="btn btn-info text-white w-25 mx-3" onClick={retakeQuiz}>
          Retake Quiz
        </button>
      </section>
    </div>
  )
}

export default Result
