import React from 'react';
import Menu from './pages/menu'
import Quiz from './pages/muiz'
import Result from './pages/result'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
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
