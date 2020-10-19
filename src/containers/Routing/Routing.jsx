import React from "react";
import { Router } from "@reach/router";
import Categories from "../../components/Categories";
import SignUp from "../../components/sign-up";
import AddChick from "../../addChick";


const Routing = () => {
    return(
        <Router>
            <Categories path="categories" />
            <SignUp path="sign-up" />
            <AddChick path="add-chick" />
        </Router>
    )
}

export default Routing;