import React from 'react'
import styles from "./SocialFollow.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import firebase, { provider } from "../../../../firebase"
import {
    faFacebook,
    faGoogle
  } 
  from "@fortawesome/free-brands-svg-icons";


const SocialFollow = () => {

  const providerTwo = new firebase.auth.FacebookAuthProvider();

    
  const goToSignInWithGoogle = () => {    
    firebase.auth().signInWithRedirect(provider)    
  }
    
  const goToSignInWithFacebook = () => {
    firebase.auth().signInWithRedirect(providerTwo);
    }
    return (
      <div className={styles.socialContainer}>
        <a href="https://github.com/nology-tech/dada"
        className={styles.facebookSocial} onClick={goToSignInWithFacebook}
        >
            <FontAwesomeIcon  icon={faFacebook} size="3x" />
        </a>
        <a href="https://github.com/nology-tech/dada" onClick={goToSignInWithGoogle} className={styles.twitterSocial}>
            <FontAwesomeIcon icon={faGoogle} size="3x" />
        </a>
      </div>
    );
  }

  export default SocialFollow