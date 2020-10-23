import React from 'react';
import AddChick from "./components/addChick/AddChick";
import Categories from "./components/Categories/Categories"
import InputData from "./components/data/Input.js";
import BookSmarts from "./components/bookSmarts/BookSmarts";
import Routes from "./containers/Routes/Routes";
import NavBar from "./components/NavBar";
import Register from "./components/sign-up/register"
import { Router, Link } from "@reach/router"
import SOS from "./components/Categories/SOS/SOS"



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
        <NavBar /*pass setPreviuosPage through here*//>   
        {/* <Routes /> */}
        {/* <Register /> */}
        {/* <SOS /> */}
        {/* { <AddChick InputData={InputData} /> } */}
        {/* {/<Input InputData={InputData} /> } */}
        {/* <BookSmarts /> */}
        {/* {<Categories /> } */}
        {/* { <h1>Dada</h1> } */}
        <Routes />
    </> 
  )
}
export default App;