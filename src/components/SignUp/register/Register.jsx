import React from 'react'
import styles from "./Register.module.scss"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialFollow from './SocialFollow';




export const Register = () => {


  return (
      <form className={styles.formContainer}>
        <h2>Sign Up</h2>
        <div className={styles.inputContainer}>
          <input type="text" placeholder="Name"/>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
        </div>
        <p className={styles.terms}>I read and agree to <span>Terms and Conditions</span></p>
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