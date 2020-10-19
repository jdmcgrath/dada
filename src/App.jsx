import React from 'react';
import AddChick from "./components/addChick/AddChick"
import Categories from "./components/Categories/Categories"
import InputData from "./components/data/Input.js";
// import Input from "./components/Input";
// import library from "./components/data/fa-library";
// import FloatPlaceHolder from "./components/FloatPlaceHolder.module.scss";



export const App = () => {
  return (
    <>
        <AddChick InputData={InputData} />
        {/* <Input InputData={InputData} /> */}
    </>
  )
}
export default App;
