import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { cats, diff } from '../requests'


const Menu = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    cat: '',
    diff: '',
  })

  let highscore = 0
  if ( useState(localStorage.getItem('highScore')) !== undefined) {
    highscore = useState(localStorage.getItem('highScore'))
  }
  const highScorePct = highscore === null ? 0 : Math.round((highscore / 10) * 100)

  const selectCat = (event) => {
    setFormData((prev) => ({
      ...prev,
      cat: event.target.value,
    }))
  }

  const selectDiff = (event) => {
    setFormData((prev) => ({
      ...prev,
      diff: event.target.value,
    }))
  }

  const startQuiz = (event) => {
    event.preventDefault()
    navigate(`/quiz/${formData.cat}/${formData.diff}/`)
  }

console.log('Component:', Menu);
  return (
    <div className="container d-flex flex-column align-items-start justify-content-center font-sans w-100 py-5">
      <Form onSubmit={startQuiz} className="my-2 d-flex flex-column align-items-center justify-content-center">
        <section>
          <h3 className="my-3">Select Category</h3>
          {cats.map((cat) => ( 
            <Form.Check 
              key={cat.value}
              type="radio"
              id={`${cat.label}`}
              label={`${cat.label}`}
              name="category"
              onChange={selectCat}
              value={cat.value}
            />
            ))}
        </section>
        <section>
          <h3 className="my-3">Select Difficulty</h3>
          {diff.map((option) => ( 
            <Form.Check 
              key={option}
              type="radio"
              id={`${option}`}
              label={`${option}`}
              name="difficulty"
              className="text-capitalize"
              onChange={selectDiff}
              value={option}
            />
            ))}
        </section>
        <button
          className={`btn btn-primary w-100 my-3 ${
            formData.cat === '' || formData.diff === ''
            ? 'disabled'
            : ''
          }`}
          >
            Submit
          </button>
      </Form>
      <div className="my-2 d-flex flex-column align-items-center justify-content-center">
        <h6>Highscore: {highscore} ({highScorePct}%)</h6>
      </div>
    </div>
  )
}

export default Menu
