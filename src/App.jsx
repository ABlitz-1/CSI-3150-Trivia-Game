import React from 'react';
import Menu from './pages/menu.jsx'
import Quiz from './pages/quiz.jsx'
import Result from './pages/result.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return(
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/quiz/:category/:difficulty/" element={<Quiz />} />
          <Route path="/results" element={<Result />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
