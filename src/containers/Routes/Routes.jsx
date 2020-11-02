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
import AddChickAge from "../../components/AddChickAge";
import UpYourGame from "../../components/UpYourGame";
import PrivateRoutes from "../../containers/Routes/PrivateRoutes"

const Routes = () => {  
    return(
        <Router>
            <Categories path="categories" />
            <SignUp path="sign-up" />

            <PrivateRoutes path="categories">
                <AddChick path="add-chick" />
            </PrivateRoutes>

            <AddChickAge path="add-chick-age" />
            <ActivityIdeas path="categories/activity-ideas" />
            <Tantrums path="/categories/sos/tantrums" />
            <ArticleReader path="article-reader" />
            <BookSmarts path="categories/book-smarts" />
            <BookInfo path="categories/book-smarts/book-info" />
            <SOS path="categories/sos"/>
            <SplashScreen path="/" />
            <Welcome path="welcome" />
            <UpYourGame path ="/categories/up-your-game" />
        </Router>
    )
}

//create a variable function to import wherever needed:
//give option to sign in when they try to access locked content, button in notification routed to sign up page 

export default Routes;
