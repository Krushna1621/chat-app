import React from 'react';
import { auth, provider } from './firebase-config';
import { signInWithPopup } from "firebase/auth";
function Auth() {
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider);
  };

  return (
    <div className='Auth'>
      <p>Sign In with Google To continue</p>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  );
}

export default Auth;
