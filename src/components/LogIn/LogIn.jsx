import React, { useCallback, useState } from 'react'
import styles from "./LogIn.module.scss"
import { navigate } from '@reach/router'
import SocialFollow from './SocialFollow';
import firebase from "../../firebase";




export const LogIn = () => {
 let [password, setPass] = useState("")
 let [email, setEm] = useState("")
 let [un, setUn] = useState("")

  const handleSignUp = useCallback(async event => { 
    event.preventDefault();
    
    try { 
      await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      navigate("/")    
    }
    catch (error) {
      alert(error)
    }

    
  }, [email, password])



  return (
      <form className={styles.formContainer} onSubmit={handleSignUp}>
        <h2>Log In</h2>
        <div className={styles.inputContainer}>
          <label for="username"></label>
          <input type="text" id="username" placeholder="Name" name="username" onInput={e => setUn(un += e.target.value)}/>
          <label for="user-email"></label>
          <input type="email" id="user-email" placeholder="Email" name="email" onInput={e => setEm(email += e.target.value)}/>
          <label for="user-password"></label>
          <input type="password" id="user-password" placeholder="Password" name="password" onInput={e => setPass(e.target.value)}/>
        </div>
        <button type="submit" className={styles.primaryBtn}>
          Sign In
        </button>
        <p className={styles.orSignIn}>or sign in with</p>
        < SocialFollow />
      </form>
  )
}





export default LogIn;