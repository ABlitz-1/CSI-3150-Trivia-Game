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


  return (
    <div>
      <Form onSubmit={startQuiz}>
        <section>
          <h3>Select Category</h3>
          {cats.map((cat) => ( 
            <Form.check 
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
          <h3>Select Difficulty</h3>
          {diff.map((option) => ( 
            <Form.check 
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
    </div>
  )
}