import React from "react";
import { Router } from "@reach/router";

import Categories from "../../components/Categories";
import SignUp from "../../components/SignUp/register";
import ActivityIdeas from "../../components/ActivityIdeas";
import VideoList from "../../components/VideoList";
import ArticleList from "../../components/ArticleList";
// import BookSmarts from "../../components/BookSmarts";
import AddChick from "../../components/AddChick";
import SOS from "../../components/SOS";

const Routes = () => {
    return(
        <Router>
            <Categories path="categories" />
            <SignUp path="sign-up" />
            <AddChick path="add-chick" />
            <ActivityIdeas path="categories/activity-ideas" />
            <VideoList path="categories/activity-ideas/video-list" />
            <ArticleList path="categories/activity-ideas/article-list" />
            {/* <BookSmarts path="book-smarts" /> */}
            <SOS path="sos"/>
        </Router>
    )
}

export default Routes;