import React from 'react'

function Register() {
  return (
    <>
    <form>
        <h4>Register</h4>
        <input
         type='text'
         placeholder='Enter email'
        />
         <input
         type='password'
         placeholder='Enter password'
        />
        <button>Register</button>
    </form>
    </>
  )
}

export default Register