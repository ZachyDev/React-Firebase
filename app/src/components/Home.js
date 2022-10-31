import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './FirebaseConfig';

function Home() {
  const [user,loading,error] = useAuthState(auth);
  return (
    <div>Welcome - { user.email }</div>
  )
}

export default Home