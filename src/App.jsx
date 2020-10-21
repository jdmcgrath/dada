import React from 'react';
import AddChick from "./components/addChick/AddChick"
import Categories from "./components/Categories/Categories"
import Register from './components/sign-up/register'
import NavBar from './components/NavBar'

export const App = () => {
  return (
    <>

    <NavBar />

        <Categories />
        {/* <h1>Dada</h1> */}
        {/* <Categories /> */}
        <AddChick />
    </>
  )
}
export default App;
