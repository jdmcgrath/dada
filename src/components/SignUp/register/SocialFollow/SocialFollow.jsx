import React from 'react'
import styles from "./SocialFollow.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faGoogle
  } from "@fortawesome/free-brands-svg-icons";


const SocialFollow = () => {
    return (
      <div className={styles.socialContainer}>
        <a href="https://www.facebook.com/"
        className={styles.facebookSocial}>
            <FontAwesomeIcon icon={faFacebook} size="3x" />
        </a>
        <a href="https://www.google.com/" className={styles.twitterSocial}>
            <FontAwesomeIcon icon={faGoogle} size="3x" />
        </a>
      </div>
    );
  }

  export default SocialFollow