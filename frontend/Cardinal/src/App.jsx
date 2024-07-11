import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import './index.css'


const routes = (
  <Router>
    <div className="min-h-screen ">
    <Routes>
      <Route path='/home' exact element={<Home />} />
      <Route path='/login' exact element={<Login />} />
      <Route path='/signup' exact element={<SignUp />} />
      <Route path='/' exact element={<Login />} />
    </Routes>
    </div>
  </Router>
);

const App = () => {
  return (
    <div>{routes}</div>
  )
}

export default App
