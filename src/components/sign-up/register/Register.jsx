import React from 'react'
import styles from "./Register.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Font Awesome:



export const Register = () => {


  return (
    <article className="base-container">
      <div className="header">Sign Up</div>
      <div className="content">
        <div className="form">
          <div className="form-group">
            <input type="text" placeholder="Name"/>
            </div>
          <div className="form-group">
            <input type="email" placeholder="Email"/>
            </div>
          <div className="form-group">
            <input type="password" placeholder="password"/>
            </div>
          <p>I read and agree to <strong>Terms and Condition</strong></p>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Sign Up
          </button>
        </div>
        <p>Already have an account? <a>Login</a></p>
        <p>or sign in with</p>
       <i className="fab "></i><i className="fab fa-twitter"></i><i className="fab fa-google"></i>
      </div>
    </article>
  )
}


export default Register;