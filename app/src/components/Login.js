import React from 'react'

function Login() {
  return (
    <>
    <form>
        <h4>Login</h4>
        <input
         type='text'
         placeholder='Enter email'
        />
         <input
         type='password'
         placeholder='Enter password'
        />
        <button>Login</button>
    </form>
    </>
  )
}

export default Login