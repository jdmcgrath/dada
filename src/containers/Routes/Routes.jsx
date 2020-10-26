import React from "react";
import { Router } from "@reach/router";

import Categories from "../../components/Categories";
import SignUp from "../../components/SignUp/register";
import ActivityIdeas from "../../components/ActivityIdeas";
import BookSmarts from "../../components/BookSmarts";
import AddChick from "../../components/AddChick";
import SOS from "../../components/SOS";
import UpYourGame from "../../components/UpYourGame";

const Routes = () => {
    return(
        <Router>
            <Categories path="categories" />
            <SignUp path="sign-up" />
            <AddChick path="add-chick" />
            <ActivityIdeas path="categories/activity-ideas" />
            <BookSmarts path="book-smarts" />
            <SOS path="sos"/>
            <UpYourGame path ="up-your-game" />
        </Router>
    )
}

export default Routes;