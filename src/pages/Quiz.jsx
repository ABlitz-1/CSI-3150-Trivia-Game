import { useQuery } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { cats, getQuestions } from '../requests'
import { ProgressBar, Spinner } from 'react-bootstrap'
import { useContext, useState } from 'react'
import Timer from '../components/timer'
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
      <div className='d-flex flex-column align-items-center justify-content-center my-5'>
        <Spinner amination='grow'/>
        <h3>Loading Questions ...</h3>
      </div>
    )
  }

  if (result.error) {
    return (
      <div className='d-flex flex-column align-items-center justify-content-center my-5'>
        <h3>An Error Occured</h3>
        <button onClick={() => location.reload()}>Reload</button>
      </div>
    )
  }

  const questions = result.data.results
  console.log('Component:', Quiz);
  return(
    <div>
      <div className="container my-5">
        <Timer
          key={currentQuestion}
          questionId={currentQuestion}
          timeLimit='15'
          onTimeout={questions.length === currentQuestion + 1 ? (
            finishQuiz
          ) : (
            nextQuestion
          )}
          />
        <div className="d-flex flex-column justify-content-start align-items-start">
          <div className="d-flex flex-row justify-content-between align-items-center w-100 my-2">
            <div className="bg-info p-2 rounded-1">
              {cats.find(cat => cat.value === Number(cat))?.label}
            </div>
            <div className="bg-warning p-2 rounded-1">
              {diff}
            </div>
          </div>
          <ProgressBar
            animated
            now={Math.round(((currentQuestion + 1) / 10) * 100)}
            className="w-100"
            />
            <span className="my-2">Question {currentQuestion + 1}/10</span>
        </div>
        <div className="my-4 d-flex flex-column justfy-content-center">
          <Question
            question={questions[currentQuestion]}
            setIsAnswered={setIsAnswered}
            isAnswered={isAnswered}
            />
            {questions.length === currentQuestion + 1 ? (
              <button
                className={`btn btn-primary align-self-end ${
                  isAnswered === false && 'disabled'
                }`}
                onClick={finishQuiz}
                >
                  Finish
                </button>
            ) : (
                <button
                  className={`btn btn-primary align-self-end ${isAnswered == false && 'disabled'
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
