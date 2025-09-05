import React from 'react'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './screens/Home.jsx'
import About from './screens/About.jsx'
import Projects from './screens/Projects.jsx'
import Contact from './screens/Contact.jsx'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          {/* Redirect from "/" to "/home" */}
          <Route path="/Portfolio" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
