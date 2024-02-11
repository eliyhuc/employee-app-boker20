import react, { useState, useEffect } from "react";

import { auth } from './fbconfig'
import { onAuthStateChanged } from 'firebase/auth'

import Main from "./Main";
import Login from "./Login";


const App = () => {

  const [isUser, setIsUser] = useState(false)

  const handleAuthStateChange = async (authUser) => {
    if (authUser) {
      setIsUser(true)
    } else {
      setIsUser(false)
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, handleAuthStateChange);
    return unsubscribe;
  }, [])

  return (
    <>
      {
        isUser ? (<Main />) : (<Login />)
      }
    </>
  );

};

export default App;
