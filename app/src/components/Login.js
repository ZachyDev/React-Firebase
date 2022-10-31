import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from './FirebaseConfig';

function Login() {
    const navigate = useNavigate();

    // initialize state
    const [username, setUsername] = useState('');
    const [password,setPassword] = useState('');

    const handleUsername = e => {
        setUsername(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const Login = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth,username,password)
            .then(res => {
                alert('Login successful');
                navigate('/home');
            })
            .catch(err => alert(err.message));
    }
  return (
    <>
    <form>
        <h4>Login</h4>
        <input
         type='text'
         placeholder='Enter email'
         onChange={handleUsername}
        />
         <input
         type='password'
         placeholder='Enter password'
         onChange={handlePassword}
        />
        <button onClick={Login}>Login</button>
        
    </form>
    </>
  )
}

export default Login