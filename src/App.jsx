import Navbar from '../components/Navbar'
import React from 'react';
import Menu from './pages/Menu'
import Quiz from './pages/Quiz'
import Result from './pages/Result'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return(
    <div>
      <Navbar />
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
