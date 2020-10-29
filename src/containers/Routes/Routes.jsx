import React from "react";
import { Router } from "@reach/router";

import Categories from "../../components/Categories";
import SignUp from "../../components/SignUp/register";
import ActivityIdeas from "../../components/ActivityIdeas";
import BookSmarts from "../../components/BookSmarts/BookSmarts";
import BookInfo from "../../components/BookInfo";
import AddChick from "../../components/AddChick";
import SOS from "../../components/SOS";
import SplashScreen from "../../components/SplashScreen";
import Tantrums from "../../components/Tantrums"
import ArticleReader from "../../components/ArticleReader";
import Welcome from "../../components/Welcome";

const Routes = () => {
    return(
        <Router>
            <Categories path="categories" />
            <SignUp path="sign-up" />
            <AddChick path="add-chick" />
            <ActivityIdeas path="categories/activity-ideas" />
            <BookSmarts path="book-smarts" />
            <BookInfo path="book-smarts/book-info" />
            <SOS path="/categories/sos"/>
            <SplashScreen path="splash" />
            <Tantrums path="tantrums" />
            <ArticleReader path="article-reader"/>
            <Welcome path="welcome" />
        </Router>
    )
}

export default Routes;
