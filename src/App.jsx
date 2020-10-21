import React from 'react';
import AddChick from "./components/addChick/AddChick";
import Categories from "./components/Categories/Categories";
import Register from './components/sign-up/register';
import NavBar from './components/NavBar';
// import { render } from "react-dom";
// import { Link, Router } from '@reach/router';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


export const App = () => {
  return (
    <>
    <Router>
      <div className='App'>
        <Route path="/addchick" component={AddChick} />
        <Route path="/categories" component={Categories} />
        <Route path="/register" component={Register} />

      </div>
    </Router>








     {/* <section>
       <Link to="categories">
       Categories
       </Link>
       <Link to="sign-up">
       <button>Register</button>
       </Link>
       <button>AddChick</button>
      
       </section>  */}
    </>
  )
}
export default App;
