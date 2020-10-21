import React from 'react';
import AddChick from "./components/addChick/AddChick"
import Categories from "./components/Categories/Categories"
import InputData from "./components/data/Input.js";
import BookSmarts from "./components/bookSmarts/BookSmarts";
import Routes from "./containers/Routes/Routing";
// import Input from "./components/Input";
// import library from "./components/data/fa-library";
// import FloatPlaceHolder from "./components/FloatPlaceHolder.module.scss";


// import Register from './components/sign-up/register';

export const App = () => {
  return (
    <>

<div className='App'>
        <Route path="/addchick" component={AddChick} />
        <Route path="/categories" component={Categories} />
        <Route path="/register" component={Register} />

      </div>
    

        {/* { <AddChick InputData={InputData} /> } */}
        {/* {/<Input InputData={InputData} /> } */}
        <BookSmarts />
        {/* {<Categories /> } */}
        {/* { <h1>Dada</h1> } */}
        {/* {<Categories /> } */}
        {/* {<AddChick /> } */}
        <Routes />
    </>
  )
}
export default App;
