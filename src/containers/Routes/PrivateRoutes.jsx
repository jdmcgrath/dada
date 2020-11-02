import React, { useEffect } from "react";
import firebase from "../../firebase";
import { navigate } from "@reach/router";
import { Router, Link } from "@reach/router";
import styles from "./PrivateRoutes.module.scss"


const PrivateRoutes = (props) => { 
  const { children } = props
  

  const signUpLink = () => { 
      return (
          <div className={styles.signInAlert}>
          <h3>You Must Be Signed In to View This Content, Click the button below to sign in</h3>
      <Link to="sign-up"><button>Sign up</button></Link>
      </div>
      )
  };

  useEffect(() =>{
    firebase.auth().onAuthStateChanged((user) => {
     !user ? navigate("categories") && signUpLink() : alert("Hello User")
    }) 
  }, [])
  return <>{children}</>;
};

//add a button to the alert which takes to signup page 
//implement funcitonality in sign up 
//place rigth components in private routes

export default PrivateRoutes;