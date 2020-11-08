import React from "react";
import { Link } from "@reach/router";
import styles from "./AltBottomNavBar.module.scss";
import { ReactComponent as EllipsesIcon } from "../../assets/img/AltBottomNavBar/EllipsesIcon.svg";
import { ReactComponent as FavouritesIcon } from "../../assets/img/AltBottomNavBar/FavouritesIcon.svg";
import { ReactComponent as HomeIcon } from "../../assets/img/AltBottomNavBar/HomeIcon.svg";
import { ReactComponent as ProfileIcon } from "../../assets/img/AltBottomNavBar/ProfileIcon.svg";

const AltBottomNavBar = () => {

    return(
        <div className={styles.navBarContainer}>
            <Link to="../../categories">
            <div className={styles.iconContainer}>
                <HomeIcon className={styles.navBarIcons} />
                <p className={styles.iconSubHeader}>Home</p>   
            </div>
            </Link>
            <Link to="../activity-ideas">
            <div className={styles.iconContainer}>
                <FavouritesIcon className={styles.navBarIcons} />
                <p className={styles.iconSubHeader}>Favourites</p>     
            </div>
            </Link>
            <Link to="../sos">
            <div className={styles.iconContainer}>
                <ProfileIcon className={styles.navBarIcons} />
                <p className={styles.iconSubHeader}>Profile</p>     
            </div>
            </Link>
    
            <Link to="../book-smarts">
            <div className={styles.iconContainer}>
                <EllipsesIcon className={styles.navBarIcons} />
                <p className={styles.iconSubHeader}>More</p>    
            </div>
            </Link>
        </div>
        )
}

export default AltBottomNavBar;