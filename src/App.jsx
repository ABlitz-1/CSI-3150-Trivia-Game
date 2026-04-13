import Navbar from './components/navbar'
import React from 'react';
import Menu from './pages/Menu'
import Quiz from './pages/Quiz'
import Result from './pages/Result'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return(
    <div className="bg-light" style={{ minHeight: '100vh' }}>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/quiz/:cat/:diff/" element={<Quiz />} />
          <Route path="/results" element={<Result />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
