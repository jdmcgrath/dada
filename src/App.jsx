import React from 'react';
import AddChick from "./components/addChick/AddChick"
import Categories from "./components/Categories/Categories"
import Register from './components/sign-up/register';
import ActivityIdeas from './components/Categories/ActivityIdeas';

export const App = () => {
  return (
    <>
        <ActivityIdeas />
        {/* <h1>Dada</h1> */}
        <Categories />
        <AddChick />
    </>
  )
}
export default App;
