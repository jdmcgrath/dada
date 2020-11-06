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
// import SideBar from "../../components/SideBar";
import AddChickAge from "../../components/AddChickAge";
import UpYourGame from "../../components/UpYourGame";
import PrivateRoutes from "../../containers/Routes/PrivateRoutes"

const Routes = () => {  
    return(
        <Router>

            <Categories path="categories" />
            <SignUp path="sign-up" />
            <AddChick path="add-chick" />

            <PrivateRoutes path="/">
                <ActivityIdeas path="categories/activity-ideas" />
            </PrivateRoutes>

            <AddChickAge path="add-chick-age" />
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
};
//using net ninja method, use the sign up for to make a firebase user 
//wait for sam, use what he gives us to allow us to sign up with facebook 
//check if logging in with different accounts accesses the same firebase user, if not, make in if statement to prohibiting them from accdesing the sign up page
export default Routes;
