import React from 'react';
import Routes from "./containers/Routes/Routes";
import NavBar from "./components/NavBar";
import { firestore } from "../src/firebase";

export const App = () => {

  return (
    <>
        <NavBar />
        <Routes  />
    </> 
  )
}
export default App;