import React, { useState } from "react";
import { Link } from "@reach/router";
import styles from "./AltBottomNavBar.module.scss";
import EllipsesIcon from "../../assets/img/AltBottomNavBar/EllipsesIcon.svg";
import FavouritesIcon from "../../assets/img/AltBottomNavBar/FavouritesIcon.svg";
import HomeIcon from "../../assets/img/AltBottomNavBar/HomeIcon.svg";
import ProfileIcon from "../../assets/img/AltBottomNavBar/ProfileIcon.svg";

const AltBottomNavBar = () => {

    return(
        <div className={styles.navBarContainer}>
            <Link to="../../categories">
            <div className={styles.iconContainer}>
                <img src={HomeIcon} alt="" className={styles.navBarIcons}></img> 
                <p className={styles.iconSubHeader}>Home</p>   
            </div>
            </Link>
            <Link to="../activity-ideas">
            <div className={styles.iconContainer}>
                <img src={FavouritesIcon} alt="" className={styles.navBarIcons}></img> 
                <p className={styles.iconSubHeader}>Favourites</p>     
            </div>
            </Link>
            <Link to="../sos">
            <div className={styles.iconContainer}>
                <img src={ProfileIcon} alt="" className={styles.navBarIcons}></img> 
                <p className={styles.iconSubHeader}>Profile</p>     
            </div>
            </Link>
    
            <Link to="../book-smarts">
            <div className={styles.iconContainer}>
                <img src={EllipsesIcon} alt="" className={styles.navBarIcons}></img>  
                <p className={styles.iconSubHeader}>More</p>    
            </div>
            </Link>
        </div>
        )
}

export default AltBottomNavBar;