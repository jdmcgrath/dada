import React, { useCallback } from 'react'
import styles from "./Register.module.scss"
import { navigate } from '@reach/router'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialFollow from './SocialFollow';
import firebase from "../../../firebase"




export const Register = () => {


  const handleSignUp = useCallback(async event => { 
    event.preventDefault();
    const { email, password } = event.target.element; 
    try { 
      await firebase
      .auth()
      .createUserWithEmailAndPassword(email.value, password.value)
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
          <label for="username" ></label>
          <input type="text" id="username" placeholder="Name" name="username"/>
          <label for="user-email"></label>
          <input type="email" id="user-email" placeholder="Email" name="email"/>
          <label for="user-password"></label>
          <input type="password" id="user-password" placeholder="Password" name="password"/>
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

//what we need to do: 
//be able to access all of the input's values 
//store them 
//




export default Register;