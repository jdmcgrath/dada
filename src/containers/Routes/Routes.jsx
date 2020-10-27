import React from "react";
import { Router } from "@reach/router";

import Categories from "../../components/Categories";
import SignUp from "../../components/SignUp/register";
import ActivityIdeas from "../../components/ActivityIdeas";
import BookSmarts from "../../components/BookSmarts";
import AddChick from "../../components/AddChick";
import SOS from "../../components/SOS";
import SplashScreen from "../../components/SplashScreen";
import UpYourGame from "../../components/UpYourGame";

const Routes = () => {
    return (
      <Router>
        <Categories path="categories" />
        <SignUp path="sign-up" />
        <AddChick path="add-chick" />
        <ActivityIdeas path="categories/activity-ideas" />
        <VideoList path="categories/activity-ideas/video-list" />
        <ArticleList path="categories/activity-ideas/article-list" />
        <BookSmarts path="book-smarts" />
        <SOS path="sos" />
        <SplashScreen path="splash" />
        <UpYourGame path ="up-your-game" />
      </Router>
    );
}

export default Routes;