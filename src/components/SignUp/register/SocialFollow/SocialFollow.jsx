import React from 'react'
import styles from "./SocialFollow.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import firebase, { provider } from '../../../../firebase'
import {
    faFacebook,
    faGoogle
  } 
  from "@fortawesome/free-brands-svg-icons";


const SocialFollow = () => {

  const goToSignInWithGoogle = () => {
    firebase.auth().signInWithRedirect(provider)
  }

  const goToSignInWithFacebook = () => {
    firebase.auth().FacebookAuthProvider(provider)
  }

    return (
      <div className={styles.socialContainer}>
        <a onClick={goToSignInWithFacebook}
        className={styles.facebookSocial}>
            <FontAwesomeIcon  icon={faFacebook} size="3x" />
        </a>
        <a onClick={goToSignInWithGoogle} className={styles.twitterSocial}>
            <FontAwesomeIcon icon={faGoogle} size="3x" />
        </a>
      </div>
    );
  }

  export default SocialFollow