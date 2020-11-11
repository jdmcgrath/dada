import React from 'react'
import styles from "./SocialFollow.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import firebase, { provider, providertwo } from "../../../../firebase"
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
    firebase.auth().signInWithRedirect(providertwo)
  }
// onClick={goToSignInWithFacebook}
    return (
      <div className={styles.socialContainer}>
        <span onClick={goToSignInWithFacebook} className={styles.facebookSocial}>
            <FontAwesomeIcon  icon={faFacebook} size="3x" />
        </span>
        <span onClick={goToSignInWithGoogle} className={styles.twitterSocial}>
            <FontAwesomeIcon icon={faGoogle} size="3x" />
        </span>
      </div>
    );
  }

  export default SocialFollow