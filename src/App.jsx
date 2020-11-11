import React, { useState, useEffect} from 'react';
import Routes from "./containers/Routes/Routes";
import NavBar from "./components/NavBar";
import firebase from "./firebase";


export const App = () => {

  // user state to be passed through Routes
  const [user, setUser] = useState(null);

  // check user onmount and if user changes
  useEffect(() => {
    checkForUser();
  },[user])

  const checkForUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }



  return (
    <>
        <NavBar />
        <Routes user={user}/>
    </> 
  )
}
export default App;