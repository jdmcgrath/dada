import React, { useEffect } from "react";
import firebase from "../../firebase";
import { navigate } from "@reach/router";

const PrivateRoutes = (props) => { 
  const { children } = props
  useEffect(() =>{
    firebase.auth().onAuthStateChanged((user) => {
     !user ? alert("Are you the user?"): alert("Hello User")
    }) 
  })
};

//check your identity - are they who they say they are?
//if (yes) let them in else do one
//if not, alert to sign in 


export default PrivateRoutes;