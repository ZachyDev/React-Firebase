import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
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
        </Routes>
    </nav>
    </>
  )
}

export default Navbar