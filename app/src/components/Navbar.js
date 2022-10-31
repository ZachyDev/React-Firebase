import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
function Navbar() {
  return (
    <>
    <Link to='/login'>Login</Link>
    <Link to='/register'>Register</Link>
    <nav>
        <Routes>
            <Route path='login' element={ <Login /> }/>
            <Route path='register' element={ <Register /> }/>
            <Route path='home' element={ <Home /> }/>
        </Routes>
    </nav>
    </>
  )
}

export default Navbar