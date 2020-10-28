import React from 'react'
import styles from "./Register.module.scss"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialFollow from './SocialFollow';




export const Register = () => {


  return (
      <form className={styles.formContainer}>
        <h2>Sign Up</h2>
        <div className={styles.inputContainer}>
          <label for="username"></label>
          <input type="text" id="username" placeholder="Name"/>
          <label for="user-email"></label>
          <input type="email" id="user-email" placeholder="Email"/>
          <label for="user-password"></label>
          <input type="password" id="user-password" placeholder="Password"/>
        </div>
        <div className={styles.termsContainer}>
          <p className={styles.terms}>I read and agree to <span>Terms and Conditions</span></p>
          <input type="checkbox" id="terms-checkbox"></input>
        </div>
        <button type="button" className={styles.primaryBtn}>
          Sign Up
        </button>
        <p className={styles.logIn}>Already have an account? <span><a href="https://github.com/nology-tech/dada">Login</a></span></p>
        <p className={styles.orSignIn}>or sign in with</p>
        < SocialFollow />
      </form>
  )
}


export default Register;