import React from 'react'
import styles from "./LoginSocialFollow.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import firebase, { provider } from "../../../../firebase"
import {
    faFacebook,
    faGoogle
  } 
  from "@fortawesome/free-brands-svg-icons";
import { navigate } from '@reach/router';


const LoginSocialFollow = () => {

  const goToSignInWithGoogle = async() => {
    firebase.auth().signInWithRedirect(provider)
    .then(() => {
    navigate("/categories")
  })
  }

  // const goToSignInWithFacebook = () => {
  //   firebase.auth().signInWithCredential(Face)
  // }
// onClick={goToSignInWithFacebook}
    return (
      <div className={styles.socialContainer}>
        <a href="https://github.com/nology-tech/dada"
        className={styles.facebookSocial}>
            <FontAwesomeIcon  icon={faFacebook} size="3x" />
        </a>
        <a href="https://github.com/nology-tech/dada" onClick={goToSignInWithGoogle} className={styles.twitterSocial}>
            <FontAwesomeIcon icon={faGoogle} size="3x" />
        </a>
      </div>
    );
  }

  export default LoginSocialFollow