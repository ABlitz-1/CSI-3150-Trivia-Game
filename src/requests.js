import axios from 'axios'
const baseUrl = 'https://opentdb.com/api.php?amount=10&type=multiple'

export const getQuestions = ({ cat, diff }) => {
  return axios
    .get(`${baseUrl}&difficulty=${diff}&category=${cat}`)
    .then((res) => res.data)
}

export const cats = [
  {label: 'General Knowledge', value: 9 },
  {label: 'Entertainment: Music', value: 12 },
  {label: 'Science and Nature', value: 17 },
  {label: 'Sports', value: 21 },
  {label: 'Geography', value: 22 },
]

export const diff = ['easy', 'medium', 'hard']