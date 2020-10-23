import React from "react";
import { Router } from "@reach/router";

import Categories from "../../components/Categories";
import SignUp from "../../components/sign-up/register";
import AddChick from "../../components/addChick/AddChick";
import ActivityIdeas from "../../components/Categories/ActivityIdeas";
import VideoList from "../../components/Categories/VideoList";
import ArticleList from "../../components/Categories/ArticleList";
import BookSmarts from "../../components/bookSmarts/BookSmarts";
import SOS from "../../components/Categories/SOS";


const Routes = () => {


    
    return(
        <Router>
            <Categories path="categories" />
            <SignUp path="sign-up" />
            <AddChick path="add-chick" />
            <ActivityIdeas path="categories/activity-ideas" />
            <VideoList path="categories/activity-ideas/video-list" />
            <ArticleList path="categories/activity-ideas/article-list" />
            <BookSmarts path="book-smarts" />
            <SOS path="sos"/>
        </Router>
    )
}

export default Routes;