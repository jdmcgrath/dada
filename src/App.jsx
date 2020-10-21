import React from 'react';
import SOS from "./components/Categories/SOS/SOS";
import AddChick from "./components/addChick/AddChick"
import Categories from "./components/Categories/Categories"
import Register from './components/sign-up/register'
import NavBar from './components/NavBar'

export const App = () => {
  return (
    <>
    <NavBar />
        <SOS />
        {/* <Categories /> */}
        {/*<AddChick />*/}
    </>
  )
}
export default App;
