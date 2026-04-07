import axios from 'axios'
const baseUrl = 'https://opentdb.com/api.php?amount=10&type=multiple'

export const getQuestions = ({ category, difficulty }) => {
  return axios
    .get(`${baseUrl}&difficulty=${difficulty}&category=${category}`)
    .then((res) => res.data)
}

export const categories = [
  {label: '', value: 9 },
  {label: '', value: 12 },
  {label: '', value: 17 },
  {label: '', value: 21 },
  {label: '', value: 22 },
]

export const difficulty = ['easy', 'medium', 'hard']