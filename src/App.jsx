import React from "react";
import Routes from "./containers/Routes/Routes";
import { Router, Link } from "@reach/router";
import NavBar from './components/NavBar'



// import Input from "./components/Input";
// import library from "./components/data/fa-library";
// import FloatPlaceHolder from "./components/FloatPlaceHolder.module.scss";
 

// import Register from './components/sign-up/register';

export const App = () => {

  // const [previousPage, setPreviousPage] = useState([])

  // const grabPreviousPage = () => {
  //   const arrPreviousPage = []
    

  //   arrPreviousPage.push({previousPage})
  // }
  //console.log(window.location.pathname);

  return (
    <>
      <NavBar />
      <Routes />
    </>
  );
}
export default App;