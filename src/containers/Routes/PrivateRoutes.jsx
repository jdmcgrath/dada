import React, { useEffect, useState } from "react";
import firebase from "../../firebase";
import { navigate } from "@reach/router";
import { Router, Link } from "@reach/router";
import styles from "./PrivateRoutes.module.scss"
const PrivateRoutes = (props) => { 
  const { children } = props
  
  useEffect(() =>{
    console.log('started useEffect')
    firebase.auth().onAuthStateChanged((user) => {
     !user ?  navigate("/sign-up") : alert("Hello User")
    }) 
    console.log('finished useEffect')
  }, [])



  return <>{children}</>;
};


//make a conditional render for the return at the bottom 
//if the user is signed in, render the childred 
//else render Kuda's message idea
//add a button to the alert which takes to signup page 
//implement funcitonality in sign up 
//place rigth components in private routes
export default PrivateRoutes;