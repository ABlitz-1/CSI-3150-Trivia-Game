import { useQuery } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { cats, getQuestions } from '../requests'
import { ProgressBar, Spinner } from 'react-bootstrap'
import { useContext, useState } from 'react'
import Question from '../components/question'
import QuizContext from '../QuizContext'

const Quiz = () => {
  const navigate = useNavigate()
  const [isAnswered, setIsAnswered] = useState(false)
  const { cat, diff } = useParams()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, scoreDispatch] = useContext(QuizContext)

  const nextQuestion = () => {
    setCurrentQuestion((prev) => prev + 1)
    setIsAnswered(false)
  }

  const finishQuiz = () => {
    if (score === null) {
      scoreDispatch({
        type: 'SET_SCORE',
        payload: 0
      })
    }
    setIsAnswered(false)
    navigate('/results')
  }

  const result = useQuery({
    queryKey: ['questions'],
    queryFn: () => getQuestions({ cat, diff})
  })

  if (result.isLoading) {
    return (
      <div>
        <h3>Loading Questions ...</h3>
      </div>
    )
  }

  if (result.error) {
    return (
      <div>
        <h3>An Error Occured</h3>
        <button onClick={() => location.reload()}>Reload</button>
      </div>
    )
  }

  const questions = result.data.results
  console.log('Component:', Quiz);
  return(
    <div>
      <div>
        <div>
          <div>
            <div>
              {cats.find(cat => cat.value === Number(category)).label}
            </div>
            <div>
              {diff}
            </div>
          </div>
          <ProgressBar
            animated
            now={Math.round(((currentQuestion + 1) / 10) * 100)}
            className="w-100"
            />
            <span>Question {currentQuestion + 1}/10</span>
        </div>
        <div>
          <Question
            question={questions[currentQuestion]}
            setIsAnswered={setIsAnswered}
            isAnswered={isAnswered}
            />
            {questions.length === currentQuestion + 1 ? (
              <button
                className={` ${
                  isAnswered === false && 'disabled'
                }`}
                onClick={finishQuiz}
                >
                  Finish
                </button>
            ) : (
                <button
                  className={` ${isAnswered == false && 'disabled'
                  }`}
                  onClick={nextQuestion}
                >
                  Next
                </button>      
            )}
        </div>
      </div>
    </div>
  )
}

export default Quiz
