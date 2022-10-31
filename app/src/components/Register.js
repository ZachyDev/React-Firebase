import React, { useState } from 'react'
import { auth } from './FirebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Register() {
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
    const Register = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth,username,password)
            .then(res => {
                alert('Account created successfully');
                navigate('/login');
            })
            .catch(err => alert(err.message));
    }
  return (
    <>
    <form>
        <h4>Register</h4>
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
        <button onClick={Register}>Register</button>
    </form>
    </>
  )
}

export default Register