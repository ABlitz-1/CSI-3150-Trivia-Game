import React from 'react';
import Menu from './pages/menu'
import Quiz from './pages/quiz'
import Result from './pages/result'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return(
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/Quiz/:category/:difficulty/" element={<Quiz />} />
          <Route path="/Results" element={<Result />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
