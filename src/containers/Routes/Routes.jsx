import React from "react";
import { Router } from "@reach/router";

import Categories from "../../components/Categories";
import SignUp from "../../components/sign-up/register";
import AddChick from "../../components/AddChick";
import ActivityIdeas from "../../components/Categories/ActivityIdeas";
import VideoList from "../../components/Categories/VideoList";
import ArticleList from "../../components/Categories/ArticleList";



const Routes = () => {
    return(
        <Router>
            <Categories path="categories" />
            <SignUp path="sign-up" />
            <AddChick path="add-chick" />
            <ActivityIdeas path="activity-ideas" />
            <VideoList path="video-list" />
            <ArticleList path="article-list" />
        </Router>
    )
}

export default Routes;