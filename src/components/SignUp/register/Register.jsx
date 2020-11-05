import React, { useCallback, useState } from 'react'
import styles from "./Register.module.scss"
import { navigate } from '@reach/router'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialFollow from './SocialFollow';
import firebase from "../../../firebase"




export const Register = () => {
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
  })



  return (
      <form className={styles.formContainer} onSubmit={handleSignUp}>
        <h2>Sign Up</h2>
        <div className={styles.inputContainer}>
          <label for="username"></label>
          <input type="text" id="username" placeholder="Name" name="username" onInput={e => setUn(un += e.target.value)}/>
          <label for="user-email"></label>
          <input type="email" id="user-email" placeholder="Email" name="email" onInput={e => setEm(email += e.target.value)}/>
          <label for="user-password"></label>
          <input type="password" id="user-password" placeholder="Password" name="password" onInput={e => setPass(e.target.value)}/>
        </div>
        <div className={styles.termsContainer}>
        <input type="checkbox" id="terms-checkbox"></input>

          <p className={styles.terms}>I read and agree to <span>Terms and Conditions</span></p>
        </div>
        <button type="submit" className={styles.primaryBtn}>
          Sign Up
        </button>
        <p className={styles.logIn}>Already have an account? <span><a href="https://github.com/nology-tech/dada">Login</a></span></p>
        <p className={styles.orSignIn}>or sign in with</p>
        < SocialFollow />
      </form>
  )
}





export default Register;