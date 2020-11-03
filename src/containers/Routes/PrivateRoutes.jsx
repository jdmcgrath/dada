import React, { useEffect, useState } from "react";
import firebase from "../../firebase";
import { navigate } from "@reach/router";
import { Router, Link } from "@reach/router";
import styles from "./PrivateRoutes.module.scss"


const PrivateRoutes = (props) => { 
  const { children } = props

  const [rendering , setRendering] = useState(children)

  const signUpHtml = () => { 
    
     return  (<>
          <div className={styles.signInAlert}>
          <h3 className={styles.signInH3}>You Must Be Signed In to View This Content, Click the button below to sign in</h3>
      <Link to="sign-up"><button className ={styles.signInButton}>Sign up</button></Link>
      <Link to="sign-up"><button className={styles.signInButton}>Back to Categories</button></Link>
      </div>
      </>)
  };

  useEffect(() =>{
    console.log('started useEffect')
    firebase.auth().onAuthStateChanged((user) => {
     !user ?  setRendering(signUpHtml) : alert("Hello User")
    }) 
    console.log('finished useEffect')

  }, [])


  return <>{rendering}</>;
};

//make a conditional render for the return at the bottom 
//if the user is signed in, render the childred 
//else render Kuda's message idea




//add a button to the alert which takes to signup page 
//implement funcitonality in sign up 
//place rigth components in private routes

export default PrivateRoutes;